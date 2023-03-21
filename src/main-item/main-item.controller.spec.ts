import { Test, TestingModule } from '@nestjs/testing';
import { MainItemController } from './main-item.controller';

describe('MainItemController', () => {
  let controller: MainItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MainItemController],
    }).compile();

    controller = module.get<MainItemController>(MainItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
