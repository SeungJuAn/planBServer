import { IsNotEmpty, IsString } from 'class-validator';
import { IsNull } from 'typeorm';

export class CreatePlanDto {
  @IsNotEmpty()
  @IsString()
  planId: string;

  @IsNotEmpty()
  @IsString()
  planName: string;

  @IsNotEmpty()
  @IsString()
  planStartDate: string;

  @IsNotEmpty()
  @IsString()
  planEndDate: string;

  @IsNotEmpty()
  @IsString()
  planContent: string;

  @IsNotEmpty()
  @IsString()
  planMaster: string;
}
