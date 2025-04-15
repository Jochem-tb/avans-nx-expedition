export interface IEnvironment {
    production: boolean;

    ROOT_DOMAIN_URL: string;
    dataApiUrl: string;
    neo4J_URL: string;

    MONGO_DB_CONNECTION_STRING: string;
    MONGO_DB_NAME: string;

    NEO4J_SCHEME: string;
    NEO4J_URI: string;
    NEO4J_HOST?: string;
    NEO4J_USERNAME: string;
    NEO4J_PASSWORD: string;
    AURA_INSTANCEID: string;
    AURA_INSTANCENAME: string;

    PORT?: string;
    NEO4J_DATABASE?: string;

    // Hier kun je meer environment
    // variabelen zetten als dat nodig is
}
