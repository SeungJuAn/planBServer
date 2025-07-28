import { IsNotEmpty } from 'class-validator';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Plan {
  @IsNotEmpty()
  @Column('nvarchar', { length: 10, primary: true })
  planId: string;

  @IsNotEmpty()
  @Column('nvarchar', { length: 20 })
  planName: string;

  @IsNotEmpty()
  @Column('nvarchar', { length: 10 })
  planStartDate: string;

  @IsNotEmpty()
  @Column('nvarchar', { length: 10 })
  planEndDate: string;

  @IsNotEmpty()
  @Column('nvarchar', { length: 40 })
  planContent: string;

  @ManyToOne(() => User, (user) => user.plans)
  @JoinColumn({ name: 'planMaster', referencedColumnName: 'id' })
  user: User;
  @Column()
  planMaster: string;
}
