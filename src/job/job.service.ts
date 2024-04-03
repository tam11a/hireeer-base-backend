import { Injectable } from '@nestjs/common';
import { CreateJobInput, UpdateJobInput } from 'src/graphql';
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
        show_organization_details: createJobInput.show_organization_details,
        publish_status: createJobInput.publish_status,
        receive_application_from: createJobInput.receive_application_from,
        receive_application_to: createJobInput.receive_application_to,
      },
    });
  }

  findAll() {
    return this.prisma.job.findMany();
  }

  findOne(id: number) {
    return this.prisma.job.findUnique({
      where: {
        id,
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
        preferred_qualifications: updateJobInput.preferred_qualifications,
        show_organization_details: updateJobInput.show_organization_details,
        publish_status: updateJobInput.publish_status,
        receive_application_from: updateJobInput.receive_application_from,
        receive_application_to: updateJobInput.receive_application_to,
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
