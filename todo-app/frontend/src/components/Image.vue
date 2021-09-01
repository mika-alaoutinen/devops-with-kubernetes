<template>
  <h2>A random image</h2>
  <span class="image-container">
    <!-- With cluster-internal routing the URL would be this: http://todo-backend-svc/api/image -->
    <img class="image" src="http://localhost:8081/api/image" />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Image',
});
</script>

<style>
.image {
  max-width: 35%;
  max-height: 35%;
}

.image-container {
  display: block;
}
</style>
