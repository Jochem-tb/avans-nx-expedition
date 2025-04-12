import { IExpedition } from '@avans-nx-expedition/shared/api';
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
            MATCH (u:User {id: $userId})-[:JOINED]->(e:Expedition)<-[:JOINED]-(other:User)-[:JOINED]->(rec:Expedition)
            WHERE NOT (u)-[:JOINED]->(rec)
            RETURN DISTINCT rec
            LIMIT 10
        `;

        const result = await this.neo4jService.read(query, { userId });

        return result.records.map((record) => record.get('rec').properties);
    }

    async addUserExpeditionRelation(
        userId: string,
        expeditionId: string,
        expeditionObject: IExpedition
    ) {
        const { title, difficultyLevel, location } = expeditionObject;

        const query = `
            MERGE (u:User {id: $userId})
            MERGE (e:Expedition {title: $title, id: $expeditionId, difficulty: $difficultyLevel, continent: $location.continent })
            MERGE (u)-[:JOINED]->(e)
        `;
        await this.neo4jService.write(query, {
            userId,
            expeditionId,
            title,
            difficultyLevel,
            location
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
}
