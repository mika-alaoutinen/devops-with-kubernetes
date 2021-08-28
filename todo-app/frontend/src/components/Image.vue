<template>
  <h1>A random image</h1>
  <img src="http://localhost:8081/api/image" />
  <!-- <img src="http://todo-backend-svc/api/image" /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Image',
});
</script>
