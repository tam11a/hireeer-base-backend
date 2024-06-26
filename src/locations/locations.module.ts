import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsResolver } from './locations.resolver';

@Module({
  providers: [LocationsResolver, LocationsService],
})
export class LocationsModule {}
