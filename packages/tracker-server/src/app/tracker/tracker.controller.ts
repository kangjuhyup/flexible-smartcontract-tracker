import { Controller, Get, Query } from '@nestjs/common';
import { WebsocketService } from '@server/websocket/websocket.service';
import { TrackerService } from './tracker.service';
import { startTrackingDto } from './dto/start-tracking.dto';

@Controller('tracker')
export class TrackerController {

    constructor(
        private readonly trackerService: TrackerService,
    ) {}
    

    @Get('start-tracking')
    startTracking(
        @Query() dto : startTrackingDto
    ) {
        return this.trackerService.startTracking(dto);
    }

    @Get('stop-tracking')
    stopTracking() {
        return '';
    }

    @Get('event-counts')
    getEventCounts() {
        return '';
    }

    @Get('all-events-counts')
    getAllEventsCounts() {
        return '';
    }
    
}
