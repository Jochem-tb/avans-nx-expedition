import { IEnvironment } from './environment.interface';

export const environment: IEnvironment = {
    production: false,

    ROOT_DOMAIN_URL: 'http://localhost:3000',
    dataApiUrl: 'http://localhost:3000/api',
    neo4J_URL: 'bolt://localhost:7687',

    MONGO_DB_CONNECTION_STRING: 'mongodb://localhost:27017/expeditionPlanner',
    MONGO_DB_NAME: 'expeditionPlanner',

    NEO4J_URI: 'localhost',
    NEO4J_USERNAME: 'neo4j',
    NEO4J_PASSWORD: 'password',
    AURA_INSTANCEID: 'NOT_IMPLEMENTED_YET',
    AURA_INSTANCENAME: 'NOT_IMPLEMENTED_YET',

    port: '7687',
    database: 'expeditionrec'
};
