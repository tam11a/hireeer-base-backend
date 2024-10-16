import { Test, TestingModule } from '@nestjs/testing';
import { ExperiencelevelsService } from './experiencelevels.service';

describe('ExperiencelevelsService', () => {
  let service: ExperiencelevelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExperiencelevelsService],
    }).compile();

    service = module.get<ExperiencelevelsService>(ExperiencelevelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
