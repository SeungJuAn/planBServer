import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { PlanModule } from './plan/plan.module';
import { Plan } from './plan/entities/plan.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // or 'postgres', etc.
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'doit9299',
      database: 'planb',
      entities: [User, Plan],
      synchronize: false,
    }),
    UserModule,
    PlanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
