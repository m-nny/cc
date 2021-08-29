import { IsPositive, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  readonly name: string;
  @IsPositive()
  readonly age: number;
  @IsString()
  readonly breed: string;
}
