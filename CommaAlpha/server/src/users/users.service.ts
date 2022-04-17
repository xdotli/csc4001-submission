import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'user1',
      password: 'pass1',
      email: 'fake1@test.com',
      // lastLocation: [0, 0],
    },
    {
      id: 2,
      username: 'user2',
      password: 'pass2',
      email: 'fake2@test.com',
      // lastLocation: [0, 0],
    },
    {
      id: 3,
      username: 'user3',
      password: 'pass3',
      email: 'fake3@test.com',
      // lastLocation: [0, 0],
    },
  ];

  create(createUserInput: CreateUserInput) {
    const user = {
      ...createUserInput,
      id: this.users.length + 1,
    };

    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
