import { Injectable } from '@nestjs/common';
import { LazyModuleLoader } from '@nestjs/core';
import { EventRepository } from '@server/database/event/event.repository';
import { WebsocketService } from '@server/websocket/websocket.service';
import { ITrackerService } from './interface/tracker.service.interface';
import { SetContractDto } from '@server/admin/dto/set-contract.dto';
import { SetDatabaseDto } from '@server/admin/dto/set-database.dto';
import { startTrackingDto } from './dto/start-tracking.dto';
import { EventEntity } from '@server/database/event/event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TrackerService extends ITrackerService {
  private repository: Repository<EventEntity>;
  private ws: WebsocketService;

  constructor(private readonly lazy_loader: LazyModuleLoader) {
    super();
  }

  loadDatabase = async (dto : SetDatabaseDto) => {
    console.log(`loadDatabase: ${JSON.stringify(dto)}`)
    if (!this.repository) {
        const { databaseProvider } = await import(
            '@server/database/database.provider'
        );
        const data_source = await databaseProvider(dto);
        this.repository = data_source.getRepository(EventEntity);
        this.repository.find().then((events) => {
            console.log(`events: ${JSON.stringify(events)}`)
        })
    }
  };

  loadSmartContract = async (dto : SetContractDto) => {
    if (!this.ws) {
      const { WebSocketModule } = await import(
        '@server/websocket/websocket.module'
      );
      const module_ref = await this.lazy_loader.load(() => WebSocketModule);
      this.ws = module_ref.get(WebsocketService);
    }
    this.ws.setContract(dto);
    return this.ws.getSmartContracts();
  };

  checkDatabase = async () => {
    if (this.repository) return true;
    return false;
  };

  startTracking = async ({event_name}:startTrackingDto) => {
    if (!this.ws || !this.repository) {
      return {
        success : false,
        message : 'Database or Smart Contract not loaded',
      }
    }
    this.ws.startTracking(event_name);
  };
}
