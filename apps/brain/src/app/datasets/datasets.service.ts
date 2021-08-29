import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDatasetDto } from './dto/create-dataset.dto';
import { Dataset, DatasetDocument } from './schemas/dataset.schema';

@Injectable()
export class DatasetsService {
    constructor(@InjectModel(Dataset.name) private readonly datasetModel: Model<DatasetDocument>) {}
    async create(createDatasetDto: CreateDatasetDto): Promise<Dataset> {
        const createdItem = new this.datasetModel(createDatasetDto);
        return createdItem.save();
    }
    async findAll(): Promise<Dataset[]> {
        const items = await this.datasetModel.find().exec();
        return items;
    }
}
