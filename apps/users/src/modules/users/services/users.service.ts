import { Injectable } from '@nestjs/common';
import { AbstractCrudHandler } from 'libs/utils/services/abstract-crud-handler.service';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { LoggerService } from '@libs/logger';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService extends AbstractCrudHandler<User> {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    protected readonly loggerService: LoggerService,
  ) {
    super(userRepository, loggerService);
  }

  protected mapEntityToDto(record: User) {
    return { ...record, password: undefined };
  }
}
