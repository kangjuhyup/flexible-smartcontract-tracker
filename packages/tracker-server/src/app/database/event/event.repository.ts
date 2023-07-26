import { Inject, Injectable } from '@nestjs/common';
import { EventEntity } from '@server/database/event/event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventRepository {
  constructor(
    @Inject('EVENT_REPOSITORY') private repository: Repository<EventEntity>,
  ) {
    console.log('EventRepository constructor');
  }

  upsert(event: EventEntity): Promise<EventEntity> {
    return this.repository.save(event).catch((err) => {
      throw err;
    });
  }

  findAll() : Promise<EventEntity[]> {
    return this.repository.find()
  }

  findOne(): Promise<EventEntity> {
    return this.repository.findOne({
      where: {
        
      },
    });
  }
}