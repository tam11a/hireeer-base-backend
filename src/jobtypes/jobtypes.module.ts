import { Module } from '@nestjs/common';
import { JobtypesService } from './jobtypes.service';
import { JobtypesResolver } from './jobtypes.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [JobtypesResolver, JobtypesService],
  imports: [PrismaModule],
})
export class JobtypesModule {}
