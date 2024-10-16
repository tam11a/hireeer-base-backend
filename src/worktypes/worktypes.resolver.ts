import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { WorktypesService } from './worktypes.service';
import { Paging } from 'src/graphql';
import { CreateWorktypeInput, UpdateWorktypeInput } from 'src/graphql';

@Resolver('Worktype')
export class WorktypesResolver {
  constructor(private readonly worktypesService: WorktypesService) {}

  @Mutation('createWorktype')
  create(
    @Args('createWorktypeInput') createWorktypeInput: CreateWorktypeInput,
  ) {
    return this.worktypesService.create(createWorktypeInput);
  }

  @Query('worktypes')
  findAll(@Args('paging') paging: Paging) {
    return this.worktypesService.findAll(paging);
  }

  @Query('worktype')
  findOne(@Args('id') id: number) {
    return this.worktypesService.findOne(id);
  }

  @Mutation('updateWorktype')
  update(
    @Args('updateWorktypeInput') updateWorktypeInput: UpdateWorktypeInput,
  ) {
    return this.worktypesService.update(
      updateWorktypeInput.id,
      updateWorktypeInput,
    );
  }

  @Mutation('removeWorktype')
  remove(@Args('id') id: number) {
    return this.worktypesService.remove(id);
  }
}
