import { IsString } from 'class-validator';
import { DatasetCreate } from '../schemas/dataset.schema';

export class CreateDatasetDto implements DatasetCreate {
    @IsString()
    sourceArchive: string;
}
