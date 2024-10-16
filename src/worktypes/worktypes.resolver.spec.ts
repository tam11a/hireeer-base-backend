import { Test, TestingModule } from '@nestjs/testing';
import { WorktypesResolver } from './worktypes.resolver';
import { WorktypesService } from './worktypes.service';

describe('WorktypesResolver', () => {
  let resolver: WorktypesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorktypesResolver, WorktypesService],
    }).compile();

    resolver = module.get<WorktypesResolver>(WorktypesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
