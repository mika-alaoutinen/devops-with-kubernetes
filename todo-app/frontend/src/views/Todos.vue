<template>
  <div class="todos">
    <Input @addTodo="saveTodo" />
    <TodoList :todos="todos" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Input from '@/components/Input.vue';
import TodoList from '@/components/TodoList.vue';
import service from '@/services/todoService';
import { Todo } from '@/types';

export default defineComponent({
  name: 'Todos',
  components: { Input, TodoList },
  data() {
    return {
      todos: [] as Todo[],
    };
  },
  methods: {
    async saveTodo(newTodo: Todo) {
      const saved = await service.saveTodo(newTodo);
      this.todos.push(saved);
    },
  },
  async mounted() {
    this.todos = await service.fetchAllTodos();
  },
});
</script>
