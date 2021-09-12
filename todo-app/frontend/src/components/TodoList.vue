<template>
  <div class="todo-list-container">
    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.message">
        {{ todo.message }}
        <input
          @click="$emit('updateTodo', todo.id)"
          :id="todo.id"
          type="checkbox"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodoList',
  emits: ['updateTodo'],
  props: ['todos'],
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
