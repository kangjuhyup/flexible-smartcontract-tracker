import { Module } from '@nestjs/common';
import { TrackerService } from './tracker.service';
import { TrackerController } from './tracker.controller';

@Module({
  imports: [],
  providers: [TrackerService],
  controllers: [TrackerController],
  exports: [TrackerService],
})
export class TrackerModule {}
