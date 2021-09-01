<template>
  <div class="todo-list-container">
    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.message">{{ todo.message }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import service from '@/services/todoService';
import { Todo } from '@/types';

export default defineComponent({
  name: 'TodoList',
  data() {
    return {
      todos: [] as Todo[],
    };
  },
  async mounted() {
    this.todos = await service.fetchAllTodos();
  },
});
</script>

<style>
.todo-item {
  font-size: large;
}
.todo-list {
  color: red;
  text-align: left;
}
.todo-list-container {
  display: flex;
  justify-content: center;
}
</style>
