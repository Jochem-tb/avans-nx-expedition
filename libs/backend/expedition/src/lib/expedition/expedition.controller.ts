import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Req,
    UseGuards
} from '@nestjs/common';
import { ExpeditionService } from './expediton.service';
import {
    ExpeditionStatus,
    DifficultyLevel,
    ContinentEnum,
    IExpedition,
    IActivity,
    IRole,
    IUser
} from '@avans-nx-expedition/shared/api';
import {
    CreateExpeditionDto,
    UpdateExpeditionDto,
    UpsertExpeditionDto
} from '@avans-nx-expedition/backend/dto';
import { Expedition } from './expedition.schema';
import { Request } from 'express';
import { AuthGuard } from '@avans-nx-expedition/backend/auth';

@Controller('expedition')
export class ExpeditionController {
    constructor(private readonly expeditionService: ExpeditionService) {}

    @Get()
    async findAll() {
        // return [];
        return await this.expeditionService.findAll();
    }

    @Get('diff/:difficulty')
    async findByDifficulty(
        @Param('difficulty') difficulty: DifficultyLevel
    ): Promise<IExpedition[]> {
        return this.expeditionService.findManyByDifficultyLevel(difficulty);
    }

    // this method should precede the general getOne method, otherwise it never matches
    // @Get('self')
    // async getSelf(@InjectToken() token: Token): Promise<Iexpedition> {
    //     const result = await this.expeditionService.getOne(token.id);
    //     return result;
    // }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<IExpedition | null> {
        return this.expeditionService.findOne(id);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    async delete(
        @Param('id') id: string,
        @Req() req: Request
    ): Promise<IExpedition | null> {
        const user = (req as any)['user'];
        const userId = user.user_id;

        const expedition = await this.expeditionService.findOne(id);
        if (!expedition) {
            console.log('Expedition not found');
            return Promise.resolve(null);
        }

        const expeditionOrganizerId = (
            expedition.organizer as IUser
        )._id.toString();
        if (expeditionOrganizerId !== userId) {
            console.log(
                `OrganiserId ${expeditionOrganizerId} !== userId ${userId}`
            );
            console.log('User is not the organizer of this expedition');
            return null;
        }

        return this.expeditionService.delete(id);
    }

    @Post('')
    create(@Body() expedition: CreateExpeditionDto): Promise<IExpedition> {
        return this.expeditionService.create(expedition);
    }

    @Post('activity')
    createActivity(@Body() activity: IActivity): Promise<IActivity> {
        return this.expeditionService.createActivity(activity);
    }

    @Post('role')
    createRole(@Body() role: IRole): Promise<IRole> {
        return this.expeditionService.createRole(role);
    }

    @UseGuards(AuthGuard)
    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() expedition: UpdateExpeditionDto,
        @Req() req: Request
    ): Promise<IExpedition | null> {
        const user = (req as any)['user'];
        const userId = user.user_id;

        const expeditionDB = await this.expeditionService.findOne(id);
        if (!expeditionDB) {
            console.log('Expedition not found');
            return Promise.resolve(null);
        }

        const expeditionOrganizerId = (
            expeditionDB.organizer as IUser
        )._id.toString();
        if (expeditionOrganizerId !== userId) {
            console.log(
                `OrganiserId ${expeditionOrganizerId} !== userId ${userId}`
            );
            console.log('User is not the organizer of this expedition');
            return Promise.resolve(null);
        }

        return this.expeditionService.update(id, expedition);
    }

    @Get(':id/join/:userId')
    async join(
        @Param('id') id: string,
        @Param('userId') userId: string
    ): Promise<IExpedition | null> {
        return this.expeditionService.join(id, userId);
    }

    @Get(':id/leave/:userId')
    async leave(
        @Param('id') id: string,
        @Param('userId') userId: string
    ): Promise<IExpedition | null> {
        return this.expeditionService.leave(id, userId);
    }

    @Get('/organising/:userId')
    getOrganising(
        @Param('userId') userId: string
    ): Promise<IExpedition[] | null> {
        return this.expeditionService.getOrganising(userId);
    }

    @Get('/joined/:userId')
    getJoined(@Param('userId') userId: string): Promise<IExpedition[] | null> {
        return this.expeditionService.getJoined(userId);
    }

    @Get('/recommended/:userId')
    getRecommended(
        @Param('userId') userId: string
    ): Promise<IExpedition[] | null> {
        return this.expeditionService.getRecommended(userId);
    }
}
