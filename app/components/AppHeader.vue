<template>
  <header class="flex flex-row justify-between items-center gap-2">
    <GoBackButton :class="[$route.path === '/' && 'opacity-0 pointer-events-none']"/>
    <h1>stack-memory</h1>
    <color-switcher/>
  </header>
</template>

<script setup lang="ts">
import GoBackButton from './buttons/GoBackButton.vue';

</script>