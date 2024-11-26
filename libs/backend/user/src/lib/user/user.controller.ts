import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    UseGuards
} from '@nestjs/common';
import { UserService } from './user.service';
import {
    IUserInfo,
    IUser,
    UserExperienceLevel
} from '@avans-nx-expedition/shared/api';
import { CreateUserDto, UpdateUserDto } from '@avans-nx-expedition/backend/dto';
import { UserExistGuard } from './user-exists.guard';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async findAll() {
        return await this.userService.findAll();
    }

    @Get('exp/:experience')
    async findByExperience(
        @Param('experience') experience: UserExperienceLevel
    ): Promise<IUserInfo[]> {
        return this.userService.findManyByExperienceLevel(experience);
    }

    // this method should precede the general getOne method, otherwise it never matches
    // @Get('self')
    // async getSelf(@InjectToken() token: Token): Promise<IUser> {
    //     const result = await this.userService.getOne(token.id);
    //     return result;
    // }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<IUser | null> {
        return this.userService.findOne(id);
    }

    @Post('')
    @UseGuards(UserExistGuard)
    create(@Body() user: CreateUserDto): Promise<IUserInfo> {
        return this.userService.create(user);
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() user: UpdateUserDto
    ): Promise<IUserInfo | null> {
        return this.userService.update(id, user);
    }
}
