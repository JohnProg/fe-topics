import type { User } from '../entities/user.entity';

export interface IUserRepository {
  searchBy(fromPage: number, limitPerPage: number, searchTerm: string | undefined): Promise<User[]>;
}
