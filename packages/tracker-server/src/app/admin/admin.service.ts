import { Injectable } from '@nestjs/common';
import { TrackerService } from '@server/tracker/tracker.service';
import { SetContractDto } from './dto/set-contract.dto';
import { SetDatabaseDto } from './dto/set-database.dto';

@Injectable()
export class AdminService {

    constructor(
        private readonly tracker_service : TrackerService
    ){}

    async setContract(
        dto : SetContractDto
    ) {
        const contracts = await this.tracker_service.loadSmartContract(dto);
        return {
            success : true,
            contracts : contracts,
        }
    }

    async setDatabase(
        dto : SetDatabaseDto
    ) {
        await this.tracker_service.loadDatabase(dto);
        return {
            success : true,
        }
    }
}
