<template>
  <div>
    <CategoryContainer title="Languages" :pages="pagesLanguages" />
    <CategoryContainer title="Framework" :pages="pageFrameworks" />
    <CategoryContainer title="Tools" :pages="pagesTools" />
  </div>
</template>

<script lang="ts" setup>
import CategoryContainer from '~/components/container/CategoryContainer.vue';

const { data: pagesLanguages } = await useAsyncData('languages-pages', () => {
  return queryCollection('languages').all()
})

const { data: pageFrameworks } = await useAsyncData('frameworks-pages', () => {
  return queryCollection('frameworks').all()
})

const { data: pagesTools } = await useAsyncData('tools-pages', () => {
  return queryCollection('tools').all()
})
</script>