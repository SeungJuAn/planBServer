import { Plan } from '../plan/entities/plan.entity';
import { User } from '../user/entities/user.entity';
import { DataSource } from 'typeorm';
import serverConfig from '../../config';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: serverConfig.DB_HOST,
  port: serverConfig.DB_PORT,
  username: serverConfig.DB_USER,
  password: serverConfig.DB_PASS,
  database: 'planb',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/migrations/*.ts'],
});
