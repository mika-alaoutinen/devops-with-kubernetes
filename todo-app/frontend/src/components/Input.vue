<template>
  <input v-model="message" class="todo-input" size="75" />
  <button @click="addTodo">Create TODO</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NewTodo } from '../../../todo-types';

export default defineComponent({
  name: 'Input',
  data() {
    return {
      message: '',
    };
  },
  emits: ['addTodo'],
  methods: {
    async addTodo(): Promise<void> {
      if (this.isValid(this.message)) {
        const todo: NewTodo = { message: this.message };
        this.$emit('addTodo', todo);
        this.message = '';
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
