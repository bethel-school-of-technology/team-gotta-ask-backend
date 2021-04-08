import { Test, TestingModule } from '@nestjs/testing';
import { LongTextService } from './longText.service';

describe('LongTextService', () => {
  let service: LongTextService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LongTextService],
    }).compile();

    service = module.get<LongTextService>(LongTextService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
