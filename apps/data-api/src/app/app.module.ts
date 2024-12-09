import { Module } from '@nestjs/common';
import { BackendFeaturesMealModule } from '@avans-nx-expedition/backend/features';
import { UsersModule } from '@avans-nx-expedition/backend/user';
import { ExpeditionModule } from '@avans-nx-expedition/backend/expedition';
import { AuthModule } from '@avans-nx-expedition/backend/auth';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '@avans-nx-expedition/shared/util-env';
import { Logger } from '@nestjs/common';

@Module({
    imports: [
        BackendFeaturesMealModule,
        AuthModule,
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
        ExpeditionModule
    ],
    controllers: [],
    providers: []
})
export class AppModule {}
