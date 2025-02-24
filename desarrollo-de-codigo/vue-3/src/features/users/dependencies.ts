import { UserApiRepository, UserInMemoryRepository } from './data/repositories';
import { SearchUsersUseCase } from './domain/useCases';

export const provideSearchUsersUseCase = () => {
  const userInMemoryRepository = new UserApiRepository();
  const searchUsersUseCase = new SearchUsersUseCase(userInMemoryRepository);

  return searchUsersUseCase;
};

export const provideCreateUserUseCase = () => {
  // TODO: Usecase for create a user
};

export const provideDeleteUserUseCase = () => {
  // TODO: Usecase for delete a user
};
