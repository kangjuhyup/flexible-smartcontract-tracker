import { IsEthereumAddress, IsString } from "class-validator"

export class startTrackingDto {

    @IsEthereumAddress()
    contract_address : string

    @IsString()
    event_name : string
}