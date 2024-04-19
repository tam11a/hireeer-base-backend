import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { JobtypesService } from './jobtypes.service';

import { CreateJobtypeInput, Paging, UpdateJobtypeInput } from 'src/graphql';

@Resolver('Jobtype')
export class JobtypesResolver {
  constructor(private readonly jobtypesService: JobtypesService) {}

  @Mutation('createJobtype')
  create(@Args('createJobtypeInput') createJobtypeInput: CreateJobtypeInput) {
    return this.jobtypesService.create(createJobtypeInput);
  }

  @Query('jobtypes')
  findAll(@Args('paging') paging?: Paging) {
    return this.jobtypesService.findAll(paging);
  }

  @Query('jobtype')
  findOne(@Args('id') id: number) {
    return this.jobtypesService.findOne(id);
  }

  @Mutation('updateJobtype')
  update(@Args('updateJobtypeInput') updateJobtypeInput: UpdateJobtypeInput) {
    return this.jobtypesService.update(
      updateJobtypeInput.id,
      updateJobtypeInput,
    );
  }

  @Mutation('removeJobtype')
  remove(@Args('id') id: number) {
    return this.jobtypesService.remove(id);
  }
}
