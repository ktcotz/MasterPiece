import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class GetUsersParamDTO {
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  @ApiPropertyOptional({
    description: 'Get user with specific ID',
  })
  id?: number;
}
