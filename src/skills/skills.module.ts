import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsResolver } from './skills.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [SkillsResolver, SkillsService],
  imports: [PrismaModule],
})
export class SkillsModule {}
