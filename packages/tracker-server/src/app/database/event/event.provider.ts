import { DataSource } from "typeorm";
import { EventEntity } from "./event.entity";

export const EventProvider = [
    {
        provide : 'EVENT_REPOSITORY',
        useFactory : (ds:DataSource) => {
            console.log('EventProvider useFactory');
            return ds.getRepository(EventEntity);
        },
        inject : ['DATA_SOURCE'],
    }
]