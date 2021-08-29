import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatasetsController } from './datasets.controller';
import { DatasetsService } from './datasets.service';
import { DatasetModel, DatasetSchema } from './schemas/dataset.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: DatasetModel.name, schema: DatasetSchema }])],
    providers: [DatasetsService],
    controllers: [DatasetsController],
})
export class DatasetsModule {}
