import { Plan } from '../plan/entities/plan.entity';
import { User } from '../user/entities/user.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'doit9299',
  database: 'planb',
  entities: [User, Plan],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
});
