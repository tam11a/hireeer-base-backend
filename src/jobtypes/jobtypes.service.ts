import { Injectable } from '@nestjs/common';
import { CreateJobtypeInput, Paging, UpdateJobtypeInput } from 'src/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

const default_include = {
  jobs: true,
};

@Injectable()
export class JobtypesService {
  constructor(private prisma: PrismaService) {}

  create(createJobtypeInput: CreateJobtypeInput) {
    return this.prisma.jobTybe.create({
      data: {
        label: createJobtypeInput.label,
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
    const jobtypes = await this.prisma.jobTybe.findMany({
      take,
      skip,
      cursor: cursor ? { id: parseInt(cursor) } : undefined,
      include: { ...default_include },
    });
    return {
      pageInfo: {
        hasNextPage: jobtypes.length === (paging?.first || paging?.last || 10),
        hasPreviousPage: !!paging?.after,
        startCursor: jobtypes.length ? jobtypes[0].id.toString() : null,
        endCursor: jobtypes.length
          ? jobtypes[jobtypes.length - 1].id.toString()
          : null,
      },
      edges: jobtypes.map((jobtype) => ({
        cursor: jobtype.id.toString(),
        node: jobtype,
      })),
    };
  }

  findOne(id: number) {
    return this.prisma.jobTybe.findUnique({
      where: {
        id,
      },
      include: { ...default_include },
    });
  }

  update(id: number, updateJobtypeInput: UpdateJobtypeInput) {
    return this.prisma.jobTybe.update({
      where: {
        id,
      },
      data: {
        label: updateJobtypeInput.label,
      },
      include: { ...default_include },
    });
  }

  remove(id: number) {
    return this.prisma.jobTybe.delete({
      where: {
        id,
      },
      include: { ...default_include },
    });
  }
}
