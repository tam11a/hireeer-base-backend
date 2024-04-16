import { Injectable } from '@nestjs/common';
import { CreateSkillInput, Paging, UpdateSkillInput } from 'src/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SkillsService {
  constructor(private prisma: PrismaService) {}

  create(createSkillInput: CreateSkillInput) {
    return this.prisma.skill.create({
      data: {
        label: createSkillInput.label,
      },
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
    const skills = await this.prisma.skill.findMany({
      take,
      skip,
      cursor: cursor ? { id: parseInt(cursor) } : undefined,
    });
    return {
      pageInfo: {
        hasNextPage: skills.length === (paging?.first || paging?.last || 10),
        hasPreviousPage: !!paging?.after,
        startCursor: skills.length ? skills[0].id.toString() : null,
        endCursor: skills.length
          ? skills[skills.length - 1].id.toString()
          : null,
      },
      edges: skills.map((skill) => ({
        cursor: skill.id.toString(),
        node: skill,
      })),
    };
  }

  findOne(id: number) {
    return this.prisma.skill.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateSkillInput: UpdateSkillInput) {
    return this.prisma.skill.update({
      where: {
        id,
      },
      data: {
        label: updateSkillInput.label,
      },
    });
  }

  remove(id: number) {
    return this.prisma.skill.delete({
      where: {
        id,
      },
    });
  }
}
