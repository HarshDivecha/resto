import { Test, TestingModule } from '@nestjs/testing';
import { ExtraItemController } from './extra-item.controller';

describe('ExtraItemController', () => {
  let controller: ExtraItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExtraItemController],
    }).compile();

    controller = module.get<ExtraItemController>(ExtraItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
