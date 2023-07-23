import { Injectable } from '@nestjs/common';
import { LazyModuleLoader } from '@nestjs/core';
import { EventRepository } from '@server/database/event/event.repository';
import { WebsocketService } from '@server/websocket/websocket.service';

@Injectable()
export class TrackerService {

    private repository: EventRepository
    private ws:WebsocketService

    constructor(
        private readonly lazy_loader : LazyModuleLoader,
    ){}

    async loadDatabase() {
        const { DatabaseModule } = await import('@server/database/database.module')
        const moudle_ref = await this.lazy_loader.load(() => DatabaseModule)
        this.repository = moudle_ref.get(EventRepository)
    }

    async loadSmartContract() {
        const { WebSocketModule } = await import('@server/websocket/websocket.module')
        const module_ref = await this.lazy_loader.load(() => WebSocketModule)
        this.ws = module_ref.get(WebsocketService)
    }

    checkDatabase() {
        if(this.repository) return true
        return false
    }

}
