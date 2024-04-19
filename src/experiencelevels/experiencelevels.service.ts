import { Injectable } from '@nestjs/common';
import {
  CreateExperiencelevelInput,
  Paging,
  UpdateExperiencelevelInput,
} from 'src/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

const default_include = {
  jobs: true,
};

@Injectable()
export class ExperiencelevelsService {
  constructor(private prisma: PrismaService) {}

  create(createExperiencelevelInput: CreateExperiencelevelInput) {
    return this.prisma.experienceLevel.create({
      data: {
        label: createExperiencelevelInput.label,
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
    const experiencelevels = await this.prisma.experienceLevel.findMany({
      take,
      skip,
      cursor: cursor ? { id: parseInt(cursor) } : undefined,
      include: { ...default_include },
    });
    return {
      pageInfo: {
        hasNextPage:
          experiencelevels.length === (paging?.first || paging?.last || 10),
        hasPreviousPage: !!paging?.after,
        startCursor: experiencelevels.length
          ? experiencelevels[0].id.toString()
          : null,
        endCursor: experiencelevels.length
          ? experiencelevels[experiencelevels.length - 1].id.toString()
          : null,
      },
      edges: experiencelevels.map((experiencelevel) => ({
        cursor: experiencelevel.id.toString(),
        node: experiencelevel,
      })),
    };
  }

  findOne(id: number) {
    return this.prisma.experienceLevel.findUnique({
      where: {
        id,
      },
      include: { ...default_include },
    });
  }

  update(id: number, updateExperiencelevelInput: UpdateExperiencelevelInput) {
    return this.prisma.experienceLevel.update({
      where: {
        id,
      },
      data: {
        label: updateExperiencelevelInput.label,
      },
      include: { ...default_include },
    });
  }

  remove(id: number) {
    return this.prisma.experienceLevel.delete({
      where: {
        id,
      },
      include: { ...default_include },
    });
  }
}
