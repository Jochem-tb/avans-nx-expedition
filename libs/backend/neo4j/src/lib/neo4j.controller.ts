import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put
} from '@nestjs/common';
import { Neo4JUserService } from './neo4j-users.service';
import { IExpedition } from '@avans-nx-expedition/shared/api';

@Controller('recommendations')
export class Neo4JExampleController {
    constructor(private readonly neo4jService: Neo4JUserService) {}

    @Get('')
    async getAllUsers(): Promise<any> {
        const results = await this.neo4jService.findAll();
        return results;
    }

    @Get(':userId')
    async getRecommended(@Param('userId') userId: string): Promise<any> {
        return await this.neo4jService.getRecommendedExpeditions(userId);
    }

    @Post('joinExpedition')
    async addExpeditionRelation(
        @Body()
        body: {
            userId: string;
            expeditionId: string;
            expeditionObject: IExpedition;
        } // Expecting a body with userId and expeditionId
    ): Promise<any> {
        console.log('addExpeditionRelation aanroepen');
        const { userId, expeditionId, expeditionObject } = body;

        // Call your service that handles Neo4j interaction
        return await this.neo4jService.addUserExpeditionRelation(
            userId,
            expeditionId,
            expeditionObject
        );
    }

    @Post('leaveExpedition')
    async removeExpeditionRelation(
        @Body() body: { userId: string; expeditionId: string } // Expecting a body with userId and expeditionId
    ): Promise<any> {
        console.log('removeExpeditionRelation aanroepen');
        const { userId, expeditionId } = body;

        // Call your service that handles Neo4j interaction
        return await this.neo4jService.removeUserExpeditionRelation(
            userId,
            expeditionId
        );
    }


    @Delete('expedition/:id')
    async deleteExpedition(@Param('id') id: string) {
        try {
            await this.neo4jService.deleteExpedition(id);
            return {
                success: true,
                message: `Expedition with id ${id} has been deleted`
            };
        } catch (error) {
            console.log(`Failed to delete expedition: ${id}`);
            return {
                success: false
            };
        }
    }
}
