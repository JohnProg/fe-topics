<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { provideSearchUsersUseCase } from '@/features/users/dependencies';
import { useSearchUsers } from '@/features/users/presentation/hooks';
import UserItem from '@/features/users/presentation/components/UserItem.vue';

const searchUsersUseCase = provideSearchUsersUseCase();
const {
  users,
  errorFetchingUsers,
  isFetchingUsers,
  isFetchingMoreUsers,
  onSearch,
  onLoadMore,
  hasMoreToLoad,
} = useSearchUsers(searchUsersUseCase);
const searchTerm = ref('');
const scrollComponent = ref(null);

onMounted(() => {
  onSearch(searchTerm.value);
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleSearchProducts = (event) => {
  event.preventDefault();
  onSearch(searchTerm.value);
};

const handleScroll = () => {
  if (!hasMoreToLoad.value || isFetchingMoreUsers.value) {
    return;
  }
  const container = scrollComponent.value;

  if (container.getBoundingClientRect().bottom > window.innerHeight) {
    onLoadMore();
  }
};
</script>

<template>
  <section ref="scrollComponent">
    <form>
      <input v-model="searchTerm" type="text" />
      <button @click="handleSearchProducts">Search</button>
    </form>
    <br />
    <div>
      <div v-if="isFetchingUsers">Loading...</div>
      <div v-else-if="errorFetchingUsers">Something went wrong!</div>
      <div v-else>
        <div v-for="user in users" :key="user.id">
          <UserItem :user="user"></UserItem>
        </div>
      </div>
      <div v-if="isFetchingMoreUsers">Loading more...</div>
    </div>
  </section>
</template>

<style scoped></style>
