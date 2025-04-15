import { env } from 'process';
import { IEnvironment } from './environment.interface';

export const environment: IEnvironment = {
    production: true,

    ROOT_DOMAIN_URL: 'https://avans-nx-expedition-webapp.netlify.app',
    dataApiUrl: 'https://avans-nx-expedition-data-api.onrender.com',
    neo4J_URL:
        'https://ebdc050a.databases.neo4j.io/db/expeditionrec/query/v2/api',

    MONGO_DB_CONNECTION_STRING:
        'mongodb+srv://admin:admin@spellendoos.wh96y.mongodb.net/',
    MONGO_DB_NAME: 'expeditionPlanner',

    // NEO4J_SCHEME: 'bolt+s',
    // NEO4J_URI: 'bolt+s://ebdc050a.databases.neo4j.io',
    // NEO4J_HOST: 'ebdc050a.databases.neo4j.io',
    // NEO4J_USERNAME: 'neo4j',
    // NEO4J_PASSWORD: 'kKtUzjK86uYPR2DEyYUbknxoo83sMmK40GQx_8t7qNE',
    // AURA_INSTANCEID: 'ebdc050a',
    // AURA_INSTANCENAME: 'Free instance',

    // PORT: '7687',
    // NEO4J_DATABASE: 'neo4j'

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
