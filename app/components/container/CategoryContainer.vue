<template>
  <div class="flex flex-col gap-2">
    <h1>{{ title }}</h1>
    
    <nav v-if="pages && pages.length > 0" class="flex flex-col gap-1">
      <NuxtLink
        v-for="page in pages"
        :key="page.path"
        :to="page.path"
        class="flex-row gap-2 text-lg text-blue-600 hover:text-blue-800 transition-colors"
      >
        {{ page.title || page.path }}
      </NuxtLink>
    </nav>

    <p v-else>Aucune page trouvée</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  pages?: Array<{
    title: string
    path: string
  }>
}>()
</script>