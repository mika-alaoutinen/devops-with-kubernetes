<template>
  <h2>A random image</h2>
  <span class="image-container">
    <img class="image" src="http://localhost:8081/api/image" />
  </span>
  <!-- <img src="http://todo-backend-svc/api/image" /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Image',
});
</script>

<style>
.image {
  max-width: 50%;
  max-height: 50%;
}

.image-container {
  display: block;
}
</style>
