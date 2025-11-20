<template>
  <ContentRenderer
    v-if="selectedPage"
    :value="selectedPage"
    class="mx-auto flex flex-col gap-2 w-150 min-w-fit"
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