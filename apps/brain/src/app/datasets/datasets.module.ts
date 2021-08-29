import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatasetsController } from './datasets.controller';
import { DatasetsService } from './datasets.service';
import { Dataset, DatasetSchema } from './schemas/dataset.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Dataset.name, schema: DatasetSchema }])],
    providers: [DatasetsService],
    controllers: [DatasetsController],
})
export class DatasetsModule {}
