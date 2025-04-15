import {
    Controller,
    Request,
    Post,
    UseGuards,
    Logger,
    Body,
    Get
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from '../decorators/decorators';
import {
    IUserCredentials,
    IUserIdentity,
    IUserRegistration
} from '@avans-nx-expedition/shared/api';
import { CreateUserDto } from '@avans-nx-expedition/backend/dto';
import { UserExistGuard } from '@avans-nx-expedition/backend/user';
import { version } from 'os';

@Controller('auth')
export class AuthController {
    private readonly logger = new Logger(AuthController.name);

    constructor(private authService: AuthService) {}

    @Public()
    @Post('login')
    async login(@Body() credentials: IUserCredentials): Promise<IUserIdentity> {
        this.logger.log('Login');
        return await this.authService.login(credentials);
    }

    @Public()
    @UseGuards(UserExistGuard)
    @Post('register')
    async register(@Body() user: CreateUserDto): Promise<IUserIdentity> {
        this.logger.log(`Register attempt for new user`);
        return await this.authService.register(user);
    }

    @Public()
    @Get('info')
    getApiInfo(@Request() req: any): { info: string; version: number } {
        this.logger.log(`Getting api info`);
        return { info: 'Running', version: 2.2 };
    }
}
