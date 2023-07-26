import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EventEntity {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    transactoinHash : string;

    @Column()
    eventName : string;

    @Column({ type: 'json' })
    eventArgs : object;

    @Column()
    blockNumber : number;

    
    constructor(
        _transactoinHash : string,
        _eventName : string,
        _eventArgs : Object,
        _blockNumber : number
    ) {
        this.transactoinHash = _transactoinHash;
        this.eventName = _eventName;
        this.eventArgs = _eventArgs;
        this.blockNumber = _blockNumber;
    } 
} 