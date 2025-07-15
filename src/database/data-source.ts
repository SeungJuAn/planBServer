import { User } from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '6964',
  database: 'planb',
  entities: [User],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
});
