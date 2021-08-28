<template>
  <input v-model="todoText" class="todo-input" size="75" />
  <button @click="addTodo">Create TODO</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Input',
  data() {
    return {
      todoText: '',
    };
  },
  methods: {
    addTodo(): void {
      if (this.isValid(this.todoText)) {
        console.log('Adding a todo', this.todoText);
      } else {
        console.log('Invalid todo');
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
