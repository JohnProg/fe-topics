<template>
  <div>
    <p>ID: {{ props.user.id }}</p>
    <p>Name: {{ props.user.name }}</p>
    <p>Email: {{ props.user.email }}</p>
    <p>Phone: {{ props.user.phone }}</p>
    <br />
  </div>
</template>

<script setup lang="ts">
interface Props {
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
  };
}
const props = defineProps<Props>();
</script>
