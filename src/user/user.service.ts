import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  /**
   *
   * @param id 고유 id
   * @param updateUserDto {name : string; email : string}
   * @returns true or false
   */
  async update(id: string, updateUserDto: UpdateUserDto) {
    const result = await this.userRepository.update(
      { id: id },
      { ...updateUserDto },
    );
    return result.affected ? true : false;
  }

  async findUser(id: string) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new UnauthorizedException(
        '해당 id를 가진 사용자는 존재하지않습니다.',
      );
    }
  }

  async remove(id: string) {
    const result = await this.userRepository.delete({ id: id });
    return result.affected ? true : false;
  }
}
