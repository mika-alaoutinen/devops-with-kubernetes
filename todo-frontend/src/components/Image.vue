<template>
  <h1>A random image</h1>
  <img src="http://localhost:8080/image" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Greeting',
});
</script>
