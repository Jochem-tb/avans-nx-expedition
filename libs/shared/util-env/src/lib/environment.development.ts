import { IEnvironment } from './environment.interface';

export const environment: IEnvironment = {
    production: false,

    ROOT_DOMAIN_URL: 'http://localhost:3000',
    dataApiUrl: 'http://localhost:3000',
    neo4J_URL: 'http://localhost:3100/api',

    MONGO_DB_CONNECTION_STRING: 'mongodb://localhost:27017/expeditionPlanner',
    MONGO_DB_NAME: 'expeditionPlanner',

    NEO4J_SCHEME: 'neo4j',
    NEO4J_URI: 'neo4j',
    NEO4J_HOST: 'localhost',
    NEO4J_USERNAME: 'neo4j',
    NEO4J_PASSWORD: 'password',
    AURA_INSTANCEID: 'NOT_IMPLEMENTED_YET',
    AURA_INSTANCENAME: 'NOT_IMPLEMENTED_YET',

    PORT: '7687',
    NEO4J_DATABASE: 'expeditionrec'
};
