<template>
  <h2>A random image</h2>
  <span class="image-container">
    <img class="image" :src="imageSrc" />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { backendUrl } from '@/environment';

export default defineComponent({
  name: 'Image',
  computed: {
    imageSrc: () => `${backendUrl}/image`,
  },
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
