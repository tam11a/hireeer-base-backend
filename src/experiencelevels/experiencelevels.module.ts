import { Module } from '@nestjs/common';
import { ExperiencelevelsService } from './experiencelevels.service';
import { ExperiencelevelsResolver } from './experiencelevels.resolver';

@Module({
  providers: [ExperiencelevelsResolver, ExperiencelevelsService],
})
export class ExperiencelevelsModule {}
