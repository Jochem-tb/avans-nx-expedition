/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ApiResponseInterceptor } from '@avans-nx-expedition/backend/dto';
import { AppModule } from './app/app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { environment } from '@avans-nx-expedition/shared/util-env';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);

    app.enableCors({
        origin: 'https://avans-nx-expedition-webapp.netlify.app', // ✅ your frontend URL
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    });

    app.useGlobalInterceptors(new ApiResponseInterceptor());

    const port = process.env.PORT || 3100;
    await app.listen(port);
    Logger.log(
        `🚀 RCMND server is running on: ` +
            environment.neo4J_URL +
            ` :${port}/${globalPrefix}`
    );
}

bootstrap();
