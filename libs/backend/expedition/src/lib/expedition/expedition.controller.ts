import {
    Body,
    Controller,
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
    IExpedition
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

    @Post('')
    // @UseGuards(expeditionExistGuard) NOT IMPLEMENTED YET
    create(@Body() expedition: CreateExpeditionDto): Promise<IExpedition> {
        return this.expeditionService.create(expedition);
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() expedition: UpdateExpeditionDto
    ): Promise<IExpedition | null> {
        return this.expeditionService.update(id, expedition);
    }
}
