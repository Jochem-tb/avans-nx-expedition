import { IExpedition, IUser } from '@avans-nx-expedition/shared/api';
import { Injectable, Logger } from '@nestjs/common';
import { Neo4jService } from 'nest-neo4j/dist';

@Injectable()
export class Neo4JUserService {
    private readonly logger: Logger = new Logger(Neo4JUserService.name);

    constructor(private readonly neo4jService: Neo4jService) {}

    async findAll(): Promise<any> {
        this.logger.log('Fetching all users from Neo4j');
        const results = await this.neo4jService.read(`MATCH (u:User) RETURN u`);

        return results.records.map((record: any) => record.get('u').properties);
    }

    async getRecommendedExpeditions(userId: string): Promise<any[]> {
        const query = `
            MATCH (u:User {id: $userId})-[:JOINED]->(exp:Expedition)
            WITH u, collect(exp) AS userExps
            MATCH (other:User)-[:JOINED]->(rec:Expedition)
            WHERE other.id <> $userId AND NOT (u)-[:JOINED]->(rec)
            WITH rec, userExps, count(DISTINCT other) AS similarCount
            WITH rec, similarCount,
                 size([attr IN ['difficulty','continent','organizerId'] 
                       WHERE ANY(e IN userExps WHERE e[attr] = rec[attr])]) AS attrMatchCount
            ORDER BY (similarCount + attrMatchCount) DESC
            LIMIT 10
            RETURN rec, similarCount, attrMatchCount
        `;

        // Execute the query
        const result = await this.neo4jService.read(query, { userId });

        // Log overall recommendation process
        this.logger.log(`Recommended expeditions for user ${userId}:`);

        // For each record, log detailed intermediate values:
        result.records.forEach((record, index) => {
            const expeditionNode = record.get('rec');
            const recProperties = expeditionNode.properties;
            const similarCount = record.get('similarCount');
            const attrMatchCount = record.get('attrMatchCount');

            this.logger.log(
                `Record ${index + 1} => Expedition: ${
                    recProperties.title || recProperties.id
                }, ` +
                    `Similar Users: ${similarCount}, Attribute Matches: ${attrMatchCount}`
            );
        });

        // Finally, return the expedition properties for the frontend
        return result.records.map((record) => record.get('rec').properties);
    }

    async addUserExpeditionRelation(
        userId: string,
        expeditionId: string,
        expeditionObject: IExpedition
    ) {
        const { title, difficultyLevel, location, organizer } =
            expeditionObject;

        const organizer_Id = (organizer as IUser)._id;
        console.log(organizer_Id);

        const query = `
            MERGE (u:User {id: $userId})
            MERGE (e:Expedition {title: $title, id: $expeditionId, difficulty: $difficultyLevel, continent: $location.continent, organizerId: $organizer_Id})
            MERGE (u)-[:JOINED]->(e)
        `;
        await this.neo4jService.write(query, {
            userId,
            expeditionId,
            title,
            difficultyLevel,
            location,
            organizer_Id
        });
        this.logger.log(
            `User ${userId} joined expedition in Neo4J ${expeditionId}`
        );
    }

    async removeUserExpeditionRelation(userId: string, expeditionId: string) {
        const query = `
            MATCH (u:User {id: $userId})-[r:JOINED]->(e:Expedition {id: $expeditionId})
            DELETE r
        `;
        await this.neo4jService.write(query, { userId, expeditionId });
    }

    async deleteExpedition(id: string): Promise<any> {
        const query = `
            MATCH (e:Expedition {id: $id})
            OPTIONAL MATCH (e)-[r]-()  // Optional match to remove all relationships
            DELETE r, e
        `;

        const result = await this.neo4jService.write(query, { id });

        // Log the deleted expedition
        this.logger.log(`Expedition with id ${id} deleted`);

        return { success: true };
    }
}
