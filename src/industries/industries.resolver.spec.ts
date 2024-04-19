import { Test, TestingModule } from '@nestjs/testing';
import { IndustriesResolver } from './industries.resolver';
import { IndustriesService } from './industries.service';

describe('IndustriesResolver', () => {
  let resolver: IndustriesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IndustriesResolver, IndustriesService],
    }).compile();

    resolver = module.get<IndustriesResolver>(IndustriesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
