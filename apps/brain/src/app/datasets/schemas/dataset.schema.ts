import { PartialByKeys, PickAndPartialByKeys } from '@cc/utils';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum DatasetObjectiveType {
    classification = 'CLASSIFICATION',
    // objectDetection = 'OBJECT_DETECTION',
}

export enum DatasetState {
    initialized = 'INITIALIZED',
    extracted = 'EXTRACTED',
    labels = 'LABELED',
}

@Schema()
export class DatasetModel {
    @Prop({ required: true })
    sourceArchive: string;

    @Prop({ enum: DatasetObjectiveType, default: DatasetObjectiveType.classification })
    objectiveType: DatasetObjectiveType;

    @Prop({ enum: DatasetState, default: DatasetState.initialized })
    state: DatasetState;
}
export type DatasetCreate = PartialByKeys<DatasetModel, 'objectiveType' | 'state'>;
export type DatasetUpdate = PickAndPartialByKeys<DatasetModel, 'objectiveType' | 'state'>;

export const DatasetSchema = SchemaFactory.createForClass(DatasetModel);
export type DatasetDocument = DatasetModel & Document;
