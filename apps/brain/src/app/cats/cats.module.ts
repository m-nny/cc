import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CatModel, CatSchema } from './schemas/cat.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: CatModel.name, schema: CatSchema }])],
    controllers: [CatsController],
    providers: [CatsService],
})
export class CatsModule {}
