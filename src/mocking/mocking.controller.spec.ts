import { Test, TestingModule } from '@nestjs/testing';
import { MockingController } from './mocking.controller';
import { MockingService } from './mocking.service';

describe('MockingController', () => {
  let controller: MockingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MockingController],
      providers: [MockingService],
    }).compile();

    controller = module.get<MockingController>(MockingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
