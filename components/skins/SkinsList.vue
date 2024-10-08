<template>
  <section>
    <HomePageFilters @change="changeSortingOrder" />

    <Grid v-if="skins" :items="skins">
      <template #default>
        <SkinCard
          v-for="skin in skins"
          :key="skin.id"
          :skin
          @change="updateSelectedSkins"
        />
      </template>
    </Grid>
  </section>
</template>

<script setup lang="ts">
const { data } = await useFetch<ISkin[]>('/api/skins')

const { updateSelectedSkins } = usePaymentsStore()

const sortingOrder = ref('asc')

const skins = computed(() => {
  return (data.value ?? []).sort((a, b) => {
    if (sortingOrder.value === 'asc') {
      return a.price - b.price
    } else {
      return b.price - a.price
    }
  })
})

function changeSortingOrder (value: string) {
  sortingOrder.value = value
}
</script>
