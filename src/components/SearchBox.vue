<script setup>
import { reactive, ref } from 'vue';

const users = reactive([
  { id: 1, name: 'Juan', surname: 'Pérez' },
  { id: 2, name: 'Pedro', surname: 'García' },
  { id: 3, name: 'María', surname: 'López' },
]);

const searchTerm = ref('');

const filteredUsers = computed(() => {
  return users.filter((user) => {
    return user.name.toLowerCase().includes(searchTerm.value.toLowerCase());
  });
});
</script>

<template>
  <div class="search">
    <input type="text" v-model="searchTerm" placeholder="Buscar">
    <ul>
      <li v-for="user in filteredUsers" :key="user.id">
        <a href="#">{{ user.name }} {{ user.surname }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.search {
  width: 200px;
}

input {
  width: 100%;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
