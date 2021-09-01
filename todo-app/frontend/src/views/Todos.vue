<template>
  <div class="todos">
    <Input />
    <TodoList :todos="todos" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Input from '@/components/Input.vue';
import TodoList from '@/components/TodoList.vue';
import service from '@/services/todoService';
import { Todo } from '@/types';

// Need to figure out how to maintain todo state here in this component.
export default defineComponent({
  name: 'Todos',
  components: { Input, TodoList },
  data() {
    return {
      todos: [] as Todo[],
    };
  },
  methods: {
    saveTodo() {
      console.log('saving todo');
    },
  },
  async mounted() {
    this.todos = await service.fetchAllTodos();
  },
});
</script>
