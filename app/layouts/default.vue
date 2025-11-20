<template>
  <div id="app" class="min-h-screen px-4 py-2 sm:px-6 sm:py-4">
    <header class="flex flex-row justify-between items-center gap-2">
      <GoBackButton v-if="($route.path !== '/')"/><div v-else />
      <color-switcher/>
    </header>
    <slot />
    
  </div>
</template>

<script lang="ts" setup>
import GoBackButton from '~/components/buttons/GoBackButton.vue';

</script>