import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MockingModule } from './mocking/mocking.module';

@Module({
  imports: [MockingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
