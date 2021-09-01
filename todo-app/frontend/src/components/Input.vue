<template>
  <input v-model="todoText" class="todo-input" size="75" />
  <button @click="addTodo">Create TODO</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Todo } from '@/types';

export default defineComponent({
  name: 'Input',
  data() {
    return {
      todoText: '',
    };
  },
  emits: ['addTodo'],
  methods: {
    async addTodo(): Promise<void> {
      if (this.isValid(this.todoText)) {
        const newTodo: Todo = { message: this.todoText };
        this.$emit('addTodo', newTodo);
        this.todoText = '';
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
