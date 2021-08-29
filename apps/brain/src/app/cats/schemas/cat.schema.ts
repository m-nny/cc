import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type CatDocument = CatModel & Document;

@Schema()
export class CatModel {
    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop()
    breed: string;
}

export const CatSchema = SchemaFactory.createForClass(CatModel);
