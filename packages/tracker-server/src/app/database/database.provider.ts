import { DatabaseType, SetDatabaseDto } from '@server/admin/dto/set-database.dto';
import { DataSource, DataSourceOptions } from 'typeorm';
import { EventEntity } from './event/event.entity';

export const databaseProvider = ({
  type,
  database_host,
  database_port,
  database_username,
  database_password,
  database_name,
}:SetDatabaseDto) => {
  const dataSourceOpt:DataSourceOptions = {  
    type : type,
    host: database_host,
    port: database_port,
    username: database_username,
    password: database_password,
    database: database_name,
    entities: [
        EventEntity,
    ],
    synchronize: true,
  };
  console.log(`dataSourceOpt: ${JSON.stringify(dataSourceOpt)}`)
  const dataSource = new DataSource(dataSourceOpt);
  return dataSource.initialize();
};