import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { DatasetsModule } from './datasets/datasets.module';

@Module({
    imports: [MongooseModule.forRoot('mongodb://cc:change-in-production@localhost:8001'), CatsModule, DatasetsModule],
})
export class AppModule {}
