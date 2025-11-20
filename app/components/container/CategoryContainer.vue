<template>
  <div class="flex flex-col gap-2 w-full sm:w-fit">
    <h1>{{ title }}</h1>
    
    <nav v-if="pages && pages.length > 0" class="flex flex-col gap-1">
      <NuxtLink
        v-for="page in pages"
        :key="page.path"
        :to="page.path"
        class="flex-col gap-2 text-lg w-full sm:w-150 p-2 hover:bg-app-dark/5 hover:dark:bg-app-light/5"
      >
        <div class="flex flex-row gap-1">
          <img v-if="page.imgSrc" :src="page.imgSrc" alt="Logo" width="32" height="32" />
          <h3>{{ page.title }}</h3>
        </div>
        
        <p v-if="page.description">{{ page.description }}</p>
        
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
    description?: string
    imgSrc?: string
  }>
}>()
</script>