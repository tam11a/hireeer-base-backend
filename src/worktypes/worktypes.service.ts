import { Injectable } from '@nestjs/common';
import { Paging } from 'src/graphql';
import { CreateWorktypeInput, UpdateWorktypeInput } from 'src/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

const default_include = {
  jobs: true,
};

@Injectable()
export class WorktypesService {
  constructor(private prisma: PrismaService) {}

  create(createWorktypeInput: CreateWorktypeInput) {
    return this.prisma.workType.create({
      data: {
        label: createWorktypeInput.label,
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
    const worktypes = await this.prisma.workType.findMany({
      take,
      skip,
      cursor: cursor ? { id: parseInt(cursor) } : undefined,
      include: { ...default_include },
    });
    return {
      pageInfo: {
        hasNextPage: worktypes.length === (paging?.first || paging?.last || 10),
        hasPreviousPage: !!paging?.after,
        startCursor: worktypes.length ? worktypes[0].id.toString() : null,
        endCursor: worktypes.length
          ? worktypes[worktypes.length - 1].id.toString()
          : null,
      },
      edges: worktypes.map((worktype) => ({
        cursor: worktype.id.toString(),
        node: worktype,
      })),
    };
  }

  findOne(id: number) {
    return this.prisma.workType.findUnique({
      where: {
        id,
      },
      include: { ...default_include },
    });
  }

  update(id: number, updateWorktypeInput: UpdateWorktypeInput) {
    return this.prisma.workType.update({
      where: {
        id,
      },
      data: {
        label: updateWorktypeInput.label,
      },
      include: { ...default_include },
    });
  }

  remove(id: number) {
    return this.prisma.workType.delete({
      where: {
        id,
      },
    });
  }
}
