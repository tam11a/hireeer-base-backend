import { Module } from '@nestjs/common';
import { WorktypesService } from './worktypes.service';
import { WorktypesResolver } from './worktypes.resolver';

@Module({
  providers: [WorktypesResolver, WorktypesService],
})
export class WorktypesModule {}
