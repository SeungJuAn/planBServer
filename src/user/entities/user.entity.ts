import { Column, PrimaryColumn } from 'typeorm';

export class User {
  @PrimaryColumn('uuid')
  id: string;
  @Column()
  userId: string;

  @Column()
  name: string;
  email: string;

  @Column()
  password: string;
}
