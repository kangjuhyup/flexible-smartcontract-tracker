import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SetContractDto } from '@server/admin/dto/set-contract.dto';
import { Contract, EventFragment, EventPayload, Fragment, InterfaceAbi, WebSocketProvider } from 'ethers';

interface Event {
    anonymous: boolean,
    inputs: {
        indexed: boolean,
        internalType: string,
        name: string,
        type: string,
    }[],
    name: string,
    type: string,
}


@Injectable()
export class WebsocketService {
    private contracts: Contract[];
    constructor(
    ) {}


    async startTracking(event_name: string) {
        console.info('[startTracking] : ', event_name);
        this.contracts.map((contract:Contract) => {
            if(contract.interface.hasEvent(event_name)) {
                contract.on(event_name, this._eventListener);
            }
        });
    }


    getSmartContracts() {
        console.info('[getSmartContracts]');
        return this.contracts;
    }

    setContract(
        dto:SetContractDto
    ) {
        console.info('[_setContract]');
        const provider = new WebSocketProvider(dto.provider_url);
        this.contracts.push(new Contract(dto.contract_address, dto.abi, provider));
    }

    _eventListener(from: string, to: string, value: BigInt, event: any) {
        console.info('[_eventListener]');
        console.log('from : ', from);
        console.log('to : ', to);
        console.log('value : ', value);
        console.log('event : ', event);
    }
}
