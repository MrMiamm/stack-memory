<template>
  <ContentRenderer
    v-if="selectedPage"
    id="markdown"
    :value="selectedPage"
    class="mx-auto flex flex-col gap-2 w-full sm:w-150"
  />
</template>

<script lang="ts" setup>
import type { typeCollectionsName } from '~/types/collectionsName';

const route = useRoute()
const collection = route.params.collection as typeCollectionsName

const { data: selectedPage } = await useAsyncData(route.path, () => {
  return queryCollection(collection).path(route.path).first()
})
</script>