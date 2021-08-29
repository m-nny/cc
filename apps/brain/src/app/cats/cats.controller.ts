import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './schemas/cat.schema';

@Controller('/cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get('/')
  async findAll(): Promise<Cat[]> {
    const items = await this.catsService.findAll();
    return items;
  }
  @Post('/')
  async create(@Body() dto: CreateCatDto): Promise<Cat> {
    const item = await this.catsService.create(dto);
    return item;
  }
}
