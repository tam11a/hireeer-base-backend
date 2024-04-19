import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ExperiencelevelsService } from './experiencelevels.service';
import {
  CreateExperiencelevelInput,
  Paging,
  UpdateExperiencelevelInput,
} from 'src/graphql';

@Resolver('Experiencelevels')
export class ExperiencelevelsResolver {
  constructor(
    private readonly experiencelevelsService: ExperiencelevelsService,
  ) {}

  @Mutation('createExperiencelevel')
  create(
    @Args('createExperiencelevelInput')
    createExperiencelevelInput: CreateExperiencelevelInput,
  ) {
    return this.experiencelevelsService.create(createExperiencelevelInput);
  }

  @Query('experiencelevels')
  findAll(
    @Args('paging')
    paging: Paging,
  ) {
    return this.experiencelevelsService.findAll(paging);
  }

  @Query('experiencelevel')
  findOne(@Args('id') id: number) {
    return this.experiencelevelsService.findOne(id);
  }

  @Mutation('updateExperiencelevel')
  update(
    @Args('updateExperiencelevelInput')
    updateExperiencelevelInput: UpdateExperiencelevelInput,
  ) {
    return this.experiencelevelsService.update(
      updateExperiencelevelInput.id,
      updateExperiencelevelInput,
    );
  }

  @Mutation('removeExperiencelevel')
  remove(@Args('id') id: number) {
    return this.experiencelevelsService.remove(id);
  }
}
