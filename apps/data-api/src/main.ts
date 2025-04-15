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
    try {
        const app = await NestFactory.create(AppModule);
        const globalPrefix = 'api';

        Logger.log('VERSION 2.0:');

        // Debug: Log the environment data API URL and port
        Logger.log('Environment Data API URL: ' + environment.dataApiUrl);
        const port = process.env.PORT || 3000;
        Logger.log('Port being used: ' + port);

        // Enable CORS for all origins
        app.enableCors({ origin: '*' });

        // Global interceptors and pipes
        app.useGlobalInterceptors(new ApiResponseInterceptor());
        app.useGlobalPipes(new ValidationPipe());

        // Debug: Log the server address before starting
        Logger.log(
            `About to start the server on http://0.0.0.0:${port}/${globalPrefix}`
        );

        // Start the server and listen on port with '0.0.0.0' as the host to allow external requests
        await app.listen(port, '0.0.0.0');

        Logger.log('TEST IF SUCCESFULL LOG');
        // Log the successful start with URL
        Logger.log(
            `🚀 DATA-API server is running on: ` +
                environment.dataApiUrl +
                ` :${port}/${globalPrefix}`
        );
    } catch (error) {
        // Log any errors during bootstrap
        Logger.error('Error starting the server:', error);
    }
}

bootstrap();
