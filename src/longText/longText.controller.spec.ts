import { Test, TestingModule } from '@nestjs/testing';
import { LongTextController } from './longText.controller';

describe('LongTextController', () => {
  let controller: LongTextController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LongTextController],
    }).compile();

    controller = module.get<LongTextController>(LongTextController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
