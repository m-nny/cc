import { Body, Controller, Get, Post } from '@nestjs/common';
import { DatasetsService } from './datasets.service';
import { CreateDatasetDto } from './dto/create-dataset.dto';
import { DatasetModel } from './schemas/dataset.schema';

@Controller('datasets')
export class DatasetsController {
    constructor(private readonly datasetService: DatasetsService) {}
    @Get('/')
    async findAll(): Promise<DatasetModel[]> {
        const items = await this.datasetService.findAll();
        return items;
    }
    @Post('/')
    async create(@Body() dto: CreateDatasetDto): Promise<DatasetModel> {
        const item = await this.datasetService.create(dto);
        return item;
    }
}
