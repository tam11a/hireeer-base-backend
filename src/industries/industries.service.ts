import { Injectable } from '@nestjs/common';
import { CreateIndustryInput, Paging, UpdateIndustryInput } from 'src/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

const default_include = {
  jobs: true,
};

@Injectable()
export class IndustriesService {
  constructor(private prisma: PrismaService) {}

  create(createIndustryInput: CreateIndustryInput) {
    return this.prisma.industry.create({
      data: {
        label: createIndustryInput.label,
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
    const industries = await this.prisma.industry.findMany({
      take,
      skip,
      cursor: cursor ? { id: parseInt(cursor) } : undefined,
      include: { ...default_include },
    });
    return {
      pageInfo: {
        hasNextPage:
          industries.length === (paging?.first || paging?.last || 10),
        hasPreviousPage: !!paging?.after,
        startCursor: industries.length ? industries[0].id.toString() : null,
        endCursor: industries.length
          ? industries[industries.length - 1].id.toString()
          : null,
      },
      edges: industries.map((industry) => ({
        cursor: industry.id.toString(),
        node: industry,
      })),
    };
  }

  findOne(id: number) {
    return this.prisma.industry.findUnique({
      where: {
        id,
      },
      include: { ...default_include },
    });
  }

  update(id: number, updateIndustryInput: UpdateIndustryInput) {
    return this.prisma.industry.update({
      where: {
        id,
      },
      data: {
        label: updateIndustryInput.label,
      },
      include: { ...default_include },
    });
  }

  remove(id: number) {
    return this.prisma.industry.delete({
      where: {
        id,
      },
      include: { ...default_include },
    });
  }
}
