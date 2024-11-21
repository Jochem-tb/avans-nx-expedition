import { env } from 'process';
import { IEnvironment } from './environment.interface';

export const environment: IEnvironment = {
    production: true,

    ROOT_DOMAIN_URL: 'NOT_IMPLEMENTED_YET',
    dataApiUrl: 'NOT_IMPLEMENTED_YET',

    MONGO_DB_CONNECTION_STRING:
        'mongodb+srv://' +
        env.MONGO_DB_USERNAME +
        ':' +
        env.MONGO_DB_PASSWORD +
        '@expeditionwebapp.guoil.mongodb.net/?retryWrites=true&w=majority&appName=ExpeditionWebApp'
};
