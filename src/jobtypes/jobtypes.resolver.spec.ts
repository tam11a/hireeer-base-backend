import { Test, TestingModule } from '@nestjs/testing';
import { JobtypesResolver } from './jobtypes.resolver';
import { JobtypesService } from './jobtypes.service';

describe('JobtypesResolver', () => {
  let resolver: JobtypesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobtypesResolver, JobtypesService],
    }).compile();

    resolver = module.get<JobtypesResolver>(JobtypesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
