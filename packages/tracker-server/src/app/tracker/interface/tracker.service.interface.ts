import { SetContractDto } from "@server/admin/dto/set-contract.dto";
import { SetDatabaseDto } from "@server/admin/dto/set-database.dto";
import { startTrackingDto } from "../dto/start-tracking.dto";

export class ITrackerService {

    loadDatabase : (dto:SetDatabaseDto) => Promise<any>;

    loadSmartContract : (dto:SetContractDto) => any;

    checkDatabase : () => any;

    getProvider : () => any;

    startTracking : (dto:startTrackingDto) => any;

    stopTracking : () => any;

    getEventCounts : () => any;

    getAllEventsCounts : () => any;



}