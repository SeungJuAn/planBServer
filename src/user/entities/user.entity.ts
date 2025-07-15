import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('nvarchar', { length: 50 })
  userId: string;

  @Column('nvarchar', { length: 20 })
  name: string;

  @Column('nvarchar', { length: 20 })
  email: string;

  @Column('nvarchar', { length: 50 })
  password: string;
}
