import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { EventProvider } from './event/event.provider';
import { EventRepository } from './event/event.repository';

@Module({
    providers : [
        EventRepository,
    ],
    exports : [
        EventRepository,
    ]
})
export class DatabaseModule {

    static forRoot(data_source:DataSource) {
        console.log('DatabaseModule.forRoot');
        console.log(data_source);
        return {
            module : DatabaseModule,
            providers : [
                data_source,
                ...EventProvider,
            ],
            exports : [
                EventRepository,
            ]
        }
    }
}