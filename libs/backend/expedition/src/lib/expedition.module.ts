import { Module } from '@nestjs/common';
import { ExpeditionController } from './expedition/expedition.controller';
import { ExpeditionService } from './expedition/expediton.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Expedition, ExpeditionSchema } from './expedition/expedition.schema';
import { ActivitySchema } from './expedition/activity.schema';
// import { Meal, MealSchema } from '@avans-nx-expedition/backend/features';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Expedition.name, schema: ExpeditionSchema },
            { name: 'Activity', schema: ActivitySchema } // Assuming Activity is also an ExpeditionSchema for this example
        ])
    ],
    controllers: [ExpeditionController],
    providers: [ExpeditionService],
    exports: [ExpeditionService]
})
export class ExpeditionModule {}
