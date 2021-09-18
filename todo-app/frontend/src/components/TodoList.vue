<template>
  <div class="todo-list-container">
    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id" class="todo-item" :style="todoStyle(todo)">
        {{ todo.message }}
        <input
          @click="$emit('updateTodo', todo.id)"
          :id="todo.id"
          :checked="todo.done"
          type="checkbox"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Todo } from '../../../todo-types';

export default defineComponent({
  name: 'TodoList',
  emits: ['updateTodo'],
  props: ['todos'],
  methods: {
    todoStyle(todo: Todo): string {
      return todo.done ? 'color: green' : 'color: red';
    },
  },
});
</script>

<style>
.todo-item {
  font-size: large;
}
.todo-list {
  text-align: left;
}
.todo-list-container {
  display: flex;
  justify-content: center;
}
</style>
