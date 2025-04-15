import { Neo4jBackendModule } from '@avans-nx-expedition/backend/neo4j';
import { Module } from '@nestjs/common';
import { Neo4jModule } from 'nest-neo4j/dist';
import { environment } from '@avans-nx-expedition/shared/util-env';

// @Module({
//     imports: [
//         Neo4jModule.forRoot({
//             scheme: 'neo4j',
//             host: 'localhost',
//             port: 7687,
//             username: 'neo4j',
//             password: 'password',
//             database: 'expeditionrec'
//         }),
//         Neo4jBackendModule
//     ],
//     controllers: [],
//     providers: []
// })
@Module({
    imports: [
        Neo4jModule.forRoot({
            scheme: environment.NEO4J_URI.startsWith('neo4j+s')
                ? 'neo4j+s'
                : 'neo4j',
            host: environment.NEO4J_URI,
            port: parseInt(environment.port || '7687', 10),
            username: environment.NEO4J_USERNAME,
            password: environment.NEO4J_PASSWORD,
            database: environment.database
        }),
        Neo4jBackendModule
    ],
    controllers: [],
    providers: []
})
export class AppModule {}
