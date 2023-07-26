import { Transform } from "class-transformer"
import { IsEthereumAddress, IsJSON, IsNumber, IsUrl } from "class-validator"
import { InterfaceAbi } from "ethers"

export class SetContractDto {

    @Transform((x) => parseInt(x.value))
    @IsNumber()
    chain_id : number

    @IsUrl()
    provider_url : string

    @IsEthereumAddress()
    contract_address : string   

    @Transform((x) => JSON.parse(x.value))
    @IsJSON()
    abi : InterfaceAbi
}