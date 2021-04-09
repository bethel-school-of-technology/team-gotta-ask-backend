import { Test, TestingModule } from '@nestjs/testing';
import { ActionTextService } from './actionText.service';

describe('ActionTextService', () => {
  let service: ActionTextService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActionTextService],
    }).compile();

    service = module.get<ActionTextService>(ActionTextService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
