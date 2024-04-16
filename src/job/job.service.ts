import { Injectable } from '@nestjs/common';
import { CreateJobInput, Paging, UpdateJobInput } from 'src/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JobService {
  constructor(private prisma: PrismaService) {}

  create(createJobInput: CreateJobInput) {
    return this.prisma.job.create({
      data: {
        label: createJobInput.label,
        about_job: createJobInput.about_job,
        key_responsibilities: createJobInput.key_responsibilities,
        education: createJobInput.education,
        preferred_qualifications: createJobInput.preferred_qualifications,
        skills: {
          connect: createJobInput.skills?.map((skillId) => ({
            id: skillId,
          })),
        },
        show_organization_details: createJobInput.show_organization_details,
        publish_status: createJobInput.publish_status,
        receive_application_from: createJobInput.receive_application_from,
        receive_application_to: createJobInput.receive_application_to,
      },
      include: {
        skills: true,
      },
    });
  }

  async findAll(paging?: Paging) {
    const take = paging?.first
      ? paging?.first
      : paging?.last
        ? -1 * paging?.last
        : 10;
    const skip = paging?.after || paging?.before ? 1 : 0;
    const cursor = paging?.after || paging?.before;
    const jobs = await this.prisma.job.findMany({
      take,
      skip,
      cursor: cursor ? { id: parseInt(cursor) } : undefined,
      include: {
        skills: true,
      },
    });

    return {
      pageInfo: {
        hasNextPage: jobs.length === (paging?.first || paging?.last || 10),
        hasPreviousPage: !!paging?.after,
        startCursor: jobs.length ? jobs[0].id.toString() : null,
        endCursor: jobs.length ? jobs[jobs.length - 1].id.toString() : null,
      },
      edges: jobs.map((job) => ({
        cursor: job.id.toString(),
        node: job,
      })),
    };
  }

  findOne(id: number) {
    return this.prisma.job.findUnique({
      where: {
        id,
      },
      include: {
        skills: true,
      },
    });
  }

  update(id: number, updateJobInput: UpdateJobInput) {
    return this.prisma.job.update({
      where: {
        id,
      },
      data: {
        label: updateJobInput.label,
        about_job: updateJobInput.about_job,
        key_responsibilities: updateJobInput.key_responsibilities,
        education: updateJobInput.education,
        skills: {
          set: updateJobInput.skills?.map((skillId) => ({
            id: skillId,
          })),
        },
        preferred_qualifications: updateJobInput.preferred_qualifications,
        show_organization_details: updateJobInput.show_organization_details,
        publish_status: updateJobInput.publish_status,
        receive_application_from: updateJobInput.receive_application_from,
        receive_application_to: updateJobInput.receive_application_to,
      },
      include: {
        skills: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.job.delete({
      where: {
        id,
      },
    });
  }
}
