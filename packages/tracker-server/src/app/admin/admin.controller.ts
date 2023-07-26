import { Body, Controller, Get, Post } from '@nestjs/common';
import { SetContractDto } from './dto/set-contract.dto';
import { SetDatabaseDto } from './dto/set-database.dto';
import { TrackerService } from '@server/tracker/tracker.service';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {

    constructor(
        private readonly admin_service : AdminService
    ) {}
    
    @Post('set-contract')
    setContract(
        @Body() dto : SetContractDto
    ) {
        return this.admin_service.setContract(dto);
    }    

    @Post('set-database')
    setDatabase(
        @Body() dto : SetDatabaseDto
    ) {
        return this.admin_service.setDatabase(dto);
    }

    @Get('contract-info')
    getContractInfo() {

    }

    @Get('database-info')
    getDatabaseInfo() {
        
    }
}
