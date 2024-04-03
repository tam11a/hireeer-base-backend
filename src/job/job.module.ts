import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { JobResolver } from './job.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [JobResolver, JobService],
  imports: [PrismaModule],
})
export class JobModule {}
