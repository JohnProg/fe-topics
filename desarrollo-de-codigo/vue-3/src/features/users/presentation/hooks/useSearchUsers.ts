import { reactive, ref } from 'vue';
import type { User } from '@/features/users/domain/entities/user.entity';
import type { IUseCase } from '@/features/users/domain/useCases/base';
import type { Params } from '@/features/users/domain/useCases/searchUsers.usecase';

export const useSearchUsers = (useCase: IUseCase<User[], Params>) => {
  const users = ref<User[]>([]);
  const errorMessage = ref<string | null>(null);
  const isFetching = ref<boolean>(false);
  const currentPage = ref<number>(0);
  const hasMoreToLoad = ref<boolean>(true);
  const isFetchingMore = ref<boolean>(false);
  const limitPerPage = 7;

  const handleSearch = async (searchTerm: string) => {
    try {
      isFetching.value = true;
      users.value = await useCase.execute({ fromPage: 0, limitPerPage, searchTerm });
    } catch (error) {
      errorMessage.value = (error as Error).toString();
    } finally {
      isFetching.value = false;
    }
  };

  const handleLoadMore = async () => {
    try {
      currentPage.value = currentPage.value + limitPerPage;
      isFetchingMore.value = true;
      const newUsers = await useCase.execute({ fromPage: currentPage.value, limitPerPage });

      if (newUsers.length < limitPerPage) {
        hasMoreToLoad.value = false;
      }
      users.value.push(...newUsers);
    } catch (error) {
      errorMessage.value = (error as Error).toString();
    } finally {
      isFetchingMore.value = false;
    }
  };

  return {
    onSearch: handleSearch,
    onLoadMore: handleLoadMore,
    users,
    errorFetchingUsers: errorMessage,
    isFetchingUsers: isFetching,
    isFetchingMoreUsers: isFetchingMore,
    hasMoreToLoad: hasMoreToLoad,
  };
};
