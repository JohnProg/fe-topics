import { User } from '@/features/users/domain/entities/user.entity';
import type { IUserRepository } from '@/features/users/domain/repositories/user.repository';

const users = [
  User.new('1', 'John', 'john@gmail.com', '978778675'),
  User.new('2', 'Pepe', 'pepe@gmail.com', '978778675'),
  User.new('3', 'Ronald', 'ronals@gmail.com', '978778675'),
  User.new('4', 'Luis', 'luis@gmail.com', '978778675'),
];

export class UserInMemoryRepository implements IUserRepository {
  searchBy(_from: number, _limitPerPage: number): Promise<User[]> {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve(users);
      }, 100);
    });
  }
}
