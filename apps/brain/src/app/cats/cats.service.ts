import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatModel, CatDocument } from './schemas/cat.schema';

@Injectable()
export class CatsService {
    constructor(@InjectModel(CatModel.name) private readonly catModel: Model<CatDocument>) {}
    async create(createCatDto: CreateCatDto): Promise<CatModel> {
        const createdItem = new this.catModel(createCatDto);
        return createdItem.save();
    }
    async findAll(): Promise<CatModel[]> {
        return this.catModel.find().exec();
    }
}
