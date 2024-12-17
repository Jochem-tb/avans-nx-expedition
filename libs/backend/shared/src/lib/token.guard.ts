import {
    CanActivate,
    ExecutionContext,
    Injectable,
    Logger,
    UnauthorizedException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class TokenGuard implements CanActivate {
    private readonly logger = new Logger(TokenGuard.name);

    constructor(private jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        console.log('AuthGuard');
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            this.logger.log('No token found');
        } else {
            try {
                const payload = await this.jwtService.verifyAsync(token, {
                    secret: process.env['JWT_SECRET'] || 'secretstring'
                });
                this.logger.log('payload', payload);
                // Assign the payload to the request object
                request['user'] = payload;
            } catch (error) {
                this.logger.log('Invalid token');
            }
        }
        // Always return true to allow access
        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}
