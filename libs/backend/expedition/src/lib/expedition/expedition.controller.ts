import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards
} from '@nestjs/common';
import { ExpeditionService } from './expediton.service';
import {
    ExpeditionStatus,
    DifficultyLevel,
    ContinentEnum,
    IExpedition,
    IActivity,
    IRole
} from '@avans-nx-expedition/shared/api';
import {
    CreateExpeditionDto,
    UpdateExpeditionDto,
    UpsertExpeditionDto
} from '@avans-nx-expedition/backend/dto';
import { Expedition } from './expedition.schema';

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

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<IExpedition | null> {
        return this.expeditionService.delete(id);
    }

    @Post('')
    // @UseGuards(expeditionExistGuard) NOT IMPLEMENTED YET
    create(@Body() expedition: CreateExpeditionDto): Promise<IExpedition> {
        return this.expeditionService.create(expedition);
    }

    @Post('activity')
    // @UseGuards(expeditionExistGuard) NOT IMPLEMENTED YET
    createActivity(@Body() activity: IActivity): Promise<IActivity> {
        return this.expeditionService.createActivity(activity);
    }

    @Post('role')
    // @UseGuards(expeditionExistGuard) NOT IMPLEMENTED YET
    createRole(@Body() role: IRole): Promise<IRole> {
        return this.expeditionService.createRole(role);
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() expedition: UpdateExpeditionDto
    ): Promise<IExpedition | null> {
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
