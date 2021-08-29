import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDatasetDto } from './dto/create-dataset.dto';
import { DatasetModel, DatasetDocument } from './schemas/dataset.schema';

@Injectable()
export class DatasetsService {
    constructor(@InjectModel(DatasetModel.name) private readonly datasetModel: Model<DatasetDocument>) {}
    async create(createDatasetDto: CreateDatasetDto): Promise<DatasetModel> {
        const createdItem = new this.datasetModel(createDatasetDto);
        return createdItem.save();
    }
    async findAll(): Promise<DatasetModel[]> {
        const items = await this.datasetModel.find().exec();
        return items;
    }
}
