import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { IndustriesService } from './industries.service';
import { CreateIndustryInput, Paging, UpdateIndustryInput } from 'src/graphql';

@Resolver('Industry')
export class IndustriesResolver {
  constructor(private readonly industriesService: IndustriesService) {}

  @Mutation('createIndustry')
  create(
    @Args('createIndustryInput') createIndustryInput: CreateIndustryInput,
  ) {
    return this.industriesService.create(createIndustryInput);
  }

  @Query('industries')
  findAll(
    @Args('paging')
    paging: Paging,
  ) {
    return this.industriesService.findAll(paging);
  }

  @Query('industry')
  findOne(@Args('id') id: number) {
    return this.industriesService.findOne(id);
  }

  @Mutation('updateIndustry')
  update(
    @Args('updateIndustryInput') updateIndustryInput: UpdateIndustryInput,
  ) {
    return this.industriesService.update(
      updateIndustryInput.id,
      updateIndustryInput,
    );
  }

  @Mutation('removeIndustry')
  remove(@Args('id') id: number) {
    return this.industriesService.remove(id);
  }
}
