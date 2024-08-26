import { Test, TestingModule } from '@nestjs/testing';
import { WifiController } from './wifi.controller';

describe('WifiController', () => {
  let controller: WifiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WifiController],
    }).compile();

    controller = module.get<WifiController>(WifiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
