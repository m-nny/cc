import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type DatasetDocument = Dataset & Document;

export enum DatasetObjectiveType {
    classification = 'CLASSIFICATION',
    // objectDetection = 'OBJECT_DETECTION',
}

@Schema()
export class Dataset {
    @Prop({ required: true })
    sourceArchive: string;
    @Prop({ enum: DatasetObjectiveType, default: DatasetObjectiveType.classification })
    objectiveType: DatasetObjectiveType;
}

export type DatasetCreate = Pick<Dataset, 'sourceArchive'>;

export const DatasetSchema = SchemaFactory.createForClass(Dataset);
