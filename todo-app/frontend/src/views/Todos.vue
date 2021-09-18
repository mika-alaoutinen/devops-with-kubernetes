<template>
  <div class="errors">
    <span v-for="error in errors" :key="error">{{ error }}</span>
  </div>

  <div class="todos">
    <Input @addTodo="saveTodo" />
    <TodoList @updateTodo="updateTodo" :todos="todos" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Input from '@/components/Input.vue';
import TodoList from '@/components/TodoList.vue';
import service from '@/services/todoService';
import { Todo } from '../../../todo-types';

export default defineComponent({
  name: 'Todos',
  components: { Input, TodoList },

  data() {
    return {
      errors: [] as string[],
      todos: [] as Todo[],
    };
  },

  methods: {
    async saveTodo(newTodo: Todo): Promise<void> {
      const response = await service.saveTodo(newTodo);
      if (typeof response === 'string') {
        this.errors.push(response);
      } else {
        this.todos.push(response);
      }
    },

    async updateTodo(id: number): Promise<void> {
      const todo = this.todos.filter((t) => t.id === id).shift();
      if (!todo) {
        this.errors.push('Tried to update Todo with invalid ID');
        return;
      }

      const response = await service.updateDone(todo);
      if (typeof response === 'string') {
        this.errors.push(response);
      } else {
        this.todos = this.todos.map((t) => (t.id === response.id ? response : t));
      }
    },
  },

  async mounted() {
    this.todos = await service.fetchAllTodos();
  },
});
</script>
