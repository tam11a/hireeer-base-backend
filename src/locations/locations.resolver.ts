import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LocationsService } from './locations.service';
import { CreateLocationInput, Paging, UpdateLocationInput } from 'src/graphql';

@Resolver('Location')
export class LocationsResolver {
  constructor(private readonly locationsService: LocationsService) {}

  @Mutation('createLocation')
  create(
    @Args('createLocationInput') createLocationInput: CreateLocationInput,
  ) {
    return this.locationsService.create(createLocationInput);
  }

  @Query('locations')
  findAll(
    @Args('paging')
    paging: Paging,
  ) {
    return this.locationsService.findAll(paging);
  }

  @Query('location')
  findOne(@Args('id') id: number) {
    return this.locationsService.findOne(id);
  }

  @Mutation('updateLocation')
  update(
    @Args('updateLocationInput') updateLocationInput: UpdateLocationInput,
  ) {
    return this.locationsService.update(
      updateLocationInput.id,
      updateLocationInput,
    );
  }

  @Mutation('removeLocation')
  remove(@Args('id') id: number) {
    return this.locationsService.remove(id);
  }
}
