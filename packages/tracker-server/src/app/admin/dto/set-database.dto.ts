import { Transform } from "class-transformer";
import { IsNumber, IsString, IsUrl, Validate } from "class-validator";

export enum DatabaseType {
    mysql = 'mysql',
    postgres = 'postgres',
    mariadb = 'mariadb',
    mongodb = 'mongodb',
    oracle = 'oracle'
}

export class SetDatabaseDto {

    @IsString()
    @Validate((x) => {
        if(x !== 'mysql' && x !== 'postgres' && x !== 'mariadb' ) return false;
        return true;
    })
    @Transform((x) => {
        if(x.value === 'mysql') return DatabaseType.mysql;
        if(x.value === 'postgres') return DatabaseType.postgres;
        if(x.value === 'mariadb') return DatabaseType.mariadb;
        if(x.value === 'mongodb') return DatabaseType.mongodb;
        if(x.value === 'oracle') return DatabaseType.oracle;
    })
    type: DatabaseType

    @IsUrl()
    database_host : string

    @Transform((x) => parseInt(x.value))
    @IsNumber()
    database_port : number

    @IsString()
    database_username : string

    @IsString()
    database_password : string

    @IsString()
    database_name : string

}