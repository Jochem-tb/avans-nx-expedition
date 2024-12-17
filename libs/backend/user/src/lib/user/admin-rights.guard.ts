import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import { Observable } from 'rxjs';
import { UserRole } from '@avans-nx-expedition/shared/api';

@Injectable()
export class AdminRightsGuard implements CanActivate {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        console.debug('AdminRightsGuard');
        const request = context.switchToHttp().getRequest();
        const userId = request.headers['user'];
        console.debug('userId', userId);

        if (!userId) {
            return false;
        }

        const foundUser = await this.userModel.findOne({ _id: userId }).exec();
        console.debug('foundUser', foundUser);
        return foundUser !== null && foundUser.role === UserRole.Admin;
    }
}
