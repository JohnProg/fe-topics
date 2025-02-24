import type { User } from '@/features/users/domain/entities/user.entity';
import type { IUserRepository } from '@/features/users/domain/repositories/user.repository';
import { UserModel } from '../models/user.model';

const baseEndpoint = 'https://jsonplaceholder.typicode.com/';

export class UserApiRepository implements IUserRepository {
  async searchBy(
    fromPage: number = 0,
    limitPerPage: number = 10,
    searchTerm: string,
  ): Promise<User[]> {
    const response = await fetch(
      `${baseEndpoint}users?_start=${fromPage}&_limit=${limitPerPage}&name_like=${searchTerm ?? ''}`,
    );
    const jsonResponse = await response.json();
    const users = [];

    for (let index = 0; index < jsonResponse.length; index++) {
      users.push(UserModel.fromJson(jsonResponse[index]));
    }

    return users;
  }
}
