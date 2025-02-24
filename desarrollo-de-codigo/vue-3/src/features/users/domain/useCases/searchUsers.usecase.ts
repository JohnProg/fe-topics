import type { User } from '../entities/user.entity';
import type { IUserRepository } from '../repositories/user.repository';
import type { IUseCase } from './base';

export type Params = {
  fromPage: number;
  limitPerPage: number;
  searchTerm?: string;
};

export class SearchUsersUseCase implements IUseCase<User[], Params> {
  constructor(private repository: IUserRepository) {}

  async execute({ fromPage, limitPerPage, searchTerm }: Params): Promise<User[]> {
    return this.repository.searchBy(fromPage, limitPerPage, searchTerm);
  }
}
