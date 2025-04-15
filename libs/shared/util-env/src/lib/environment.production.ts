import { env } from 'process';
import { IEnvironment } from './environment.interface';

export const environment: IEnvironment = {
    production: true,

    ROOT_DOMAIN_URL: 'https://avans-nx-expedition-webapp.netlify.app',
    dataApiUrl: 'https://avans-nx-expedition-production.up.railway.app/api',
    neo4J_URL: 'https://neo4j+s://ebdc050a.databases.neo4j.io',

    MONGO_DB_CONNECTION_STRING:
        'mongodb+srv://admin:admin@spellendoos.wh96y.mongodb.net/',
    MONGO_DB_NAME: 'expeditionPlanner',

    NEO4J_URI: 'neo4j+s://ebdc050a.databases.neo4j.io',
    NEO4J_USERNAME: 'neo4j',
    NEO4J_PASSWORD: 'kKtUzjK86uYPR2DEyYUbknxoo83sMmK40GQx_8t7qNE',
    AURA_INSTANCEID: 'ebdc050a',
    AURA_INSTANCENAME: 'Free instance',

    port: 'NOT_IMPLEMENTED_YET',
    database: 'NOT_IMPLEMENTED_YET'
};
