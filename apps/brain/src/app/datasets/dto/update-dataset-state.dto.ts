import { IsEnum, IsOptional, IsString } from 'class-validator';
import { DatasetCreate, DatasetObjectiveType, DatasetState } from '../schemas/dataset.schema';

export class UpdateDatasetDto implements DatasetCreate {
    @IsString()
    sourceArchive: string;

    @IsEnum(DatasetState)
    state: DatasetState;

    @IsEnum(DatasetObjectiveType)
    @IsOptional()
    objectiveType?: DatasetObjectiveType;
}
