import { Test, TestingModule } from '@nestjs/testing';
import { MockingService } from './mocking.service';

describe('MockingService', () => {
  let service: MockingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockingService],
    }).compile();

    service = module.get<MockingService>(MockingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
