import { Test, TestingModule } from '@nestjs/testing';
import { ActionTextController } from './actionText.controller';

describe('ActionTextController', () => {
  let controller: ActionTextController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActionTextController],
    }).compile();

    controller = module.get<ActionTextController>(ActionTextController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
