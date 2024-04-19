import { Injectable } from '@nestjs/common';
import { CreateLocationInput, Paging, UpdateLocationInput } from 'src/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

const default_include = {
  jobs: true,
};

@Injectable()
export class LocationsService {
  constructor(private prisma: PrismaService) {}

  create(createLocationInput: CreateLocationInput) {
    return this.prisma.location.create({
      data: {
        label: createLocationInput.label,
      },
      include: { ...default_include },
    });
  }

  async findAll(paging: Paging) {
    const take = paging?.first
      ? paging?.first
      : paging?.last
        ? -1 * paging?.last
        : 10;
    const skip = paging?.after || paging?.before ? 1 : 0;
    const cursor = paging?.after || paging?.before;
    const locations = await this.prisma.location.findMany({
      take,
      skip,
      cursor: cursor ? { id: parseInt(cursor) } : undefined,
      include: { ...default_include },
    });
    return {
      pageInfo: {
        hasNextPage: locations.length === (paging?.first || paging?.last || 10),
        hasPreviousPage: !!paging?.after,
        startCursor: locations.length ? locations[0].id.toString() : null,
        endCursor: locations.length
          ? locations[locations.length - 1].id.toString()
          : null,
      },
      edges: locations.map((location) => ({
        cursor: location.id.toString(),
        node: location,
      })),
    };
  }

  findOne(id: number) {
    return this.prisma.location.findUnique({
      where: {
        id,
      },
      include: { ...default_include },
    });
  }

  update(id: number, updateLocationInput: UpdateLocationInput) {
    return this.prisma.location.update({
      where: {
        id,
      },
      data: {
        label: updateLocationInput.label,
      },
      include: { ...default_include },
    });
  }

  remove(id: number) {
    return this.prisma.location.delete({
      where: {
        id,
      },
      include: { ...default_include },
    });
  }
}
