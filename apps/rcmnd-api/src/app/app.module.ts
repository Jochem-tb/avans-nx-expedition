import { Neo4jBackendModule } from '@avans-nx-expedition/backend/neo4j';
import { Module } from '@nestjs/common';
import { Neo4jModule } from 'nest-neo4j/dist';
import { environment } from '@avans-nx-expedition/shared/util-env';

@Module({
    imports: [
        Neo4jModule.forRoot({
            scheme: 'neo4j',
            host: 'localhost',
            port: 7687,
            username: 'neo4j',
            password: 'password',
            database: 'expeditionrec'
        }),
        Neo4jBackendModule
    ],
    controllers: [],
    providers: []
})
// @Module({
//     imports: [
//         Neo4jModule.forRoot({
//             // Use the secure scheme (based on your environment value)
//             scheme: environment.NEO4J_URI === 'bolt+s' ? 'bolt+s' : 'neo4j',
//             host: environment.NEO4J_HOST, // "ebdc050a.databases.neo4j.io"
//             port: 7687, // For Aura, this is always 7687
//             username: environment.NEO4J_USERNAME, // "neo4j"
//             password: environment.NEO4J_PASSWORD, // "secret"
//             database: environment.NEO4J_DATABASE || 'neo4j', // default database is "neo4j"
//             // Include additional configuration required for Aura:
//             config: {
//                 encrypted: 'ENCRYPTION_ON', // Enable TLS encryption
//                 trust: 'TRUST_SYSTEM_CA_SIGNED_CERTIFICATES' // Trust system CA-signed certificates
//             }
//         }),
//         // Only import the Neo4jBackendModule once.
//         Neo4jBackendModule
//     ],
//     controllers: [],
//     providers: []
// })
export class AppModule {}
