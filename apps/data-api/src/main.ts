/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
    AllExceptionsFilter,
    HttpExceptionFilter,
    ApiResponseInterceptor
} from '@avans-nx-expedition/backend/dto';
import { AppModule } from './app/app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { environment } from '@avans-nx-expedition/shared/util-env';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);

    app.enableCors({ origin: '*' });

    app.useGlobalInterceptors(new ApiResponseInterceptor());
    app.useGlobalPipes(new ValidationPipe());

    // General exception handling
    // app.useGlobalFilters(new HttpExceptionFilter());

    const port = process.env.PORT || 3000;
    await app.listen(port, '0.0.0.0');
    Logger.log(
        `🚀 DATA-API server is running on: ` +
            environment.dataApiUrl +
            ` :${port}/${globalPrefix}`
    );
}

bootstrap();
