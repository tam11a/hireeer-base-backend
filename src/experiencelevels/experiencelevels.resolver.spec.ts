import { Test, TestingModule } from '@nestjs/testing';
import { ExperiencelevelsResolver } from './experiencelevels.resolver';
import { ExperiencelevelsService } from './experiencelevels.service';

describe('ExperiencelevelsResolver', () => {
  let resolver: ExperiencelevelsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExperiencelevelsResolver, ExperiencelevelsService],
    }).compile();

    resolver = module.get<ExperiencelevelsResolver>(ExperiencelevelsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
