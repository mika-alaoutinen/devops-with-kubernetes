<template>
  <input v-model="todoText" class="todo-input" size="75" />
  <button @click="addTodo">Create TODO</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import service from '@/services/todoService';

export default defineComponent({
  name: 'Input',
  data() {
    return {
      todoText: '',
    };
  },
  methods: {
    async addTodo(): Promise<void> {
      if (this.isValid(this.todoText)) {
        const saved = await service.saveTodo({ message: this.todoText });
        console.log('saved todo', saved);
      } else {
        console.log('invalid todo');
      }
    },
    isValid(todo: string): boolean {
      return todo.length > 0 && todo.length <= 139;
    },
  },
});
</script>

<style>
.todo-input {
  margin-right: 1em;
}
</style>
