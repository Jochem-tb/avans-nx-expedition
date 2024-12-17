import { Module } from '@nestjs/common';
import { BackendFeaturesMealModule } from '@avans-nx-expedition/backend/features';
import { UsersModule } from '@avans-nx-expedition/backend/user';
import { ExpeditionModule } from '@avans-nx-expedition/backend/expedition';
import { AuthGuard, AuthModule } from '@avans-nx-expedition/backend/auth';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '@avans-nx-expedition/shared/util-env';
import { Logger } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthService } from 'libs/backend/auth/src/lib/auth/auth.service';

@Module({
    imports: [
        MongooseModule.forRoot(environment.MONGO_DB_CONNECTION_STRING, {
            connectionFactory: (connection) => {
                connection.on('connected', () => {
                    // console.log('is connected');
                    Logger.verbose(
                        `Mongoose db connected to ${environment.MONGO_DB_CONNECTION_STRING}`
                    );
                });
                connection._events.connected();
                return connection;
            }
        }),
        UsersModule,
        ExpeditionModule,
        BackendFeaturesMealModule,
        AuthModule
    ],
    controllers: [],
    providers: [
        {
            provide: APP_GUARD,
            useValue: AuthGuard
        }
    ]
})
export class AppModule {}
