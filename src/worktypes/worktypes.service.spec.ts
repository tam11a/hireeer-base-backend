import { Test, TestingModule } from '@nestjs/testing';
import { WorktypesService } from './worktypes.service';

describe('WorktypesService', () => {
  let service: WorktypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorktypesService],
    }).compile();

    service = module.get<WorktypesService>(WorktypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
