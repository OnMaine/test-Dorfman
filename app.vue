<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const metaConfig = {
  titleTemplate: (title: any) => ['Many Skins', title].filter(Boolean).join(' - '),
  meta: []
}

useHead(metaConfig)
</script>
