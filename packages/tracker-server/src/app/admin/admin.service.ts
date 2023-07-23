import { Injectable } from '@nestjs/common';
import { TrackerService } from '@tracker/tracker.service';

@Injectable()
export class AdminService {

    constructor(
        private readonly tracker_service : TrackerService
    ){}

    async setContract() {
        await this.tracker_service.loadSmartContract();
        return {
            success : true,
        }
    }

    async setDatabase() {
        await this.tracker_service.loadDatabase();
        return {
            success : true,
        }
    }
}
