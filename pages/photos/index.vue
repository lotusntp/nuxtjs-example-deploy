<template>
  <div class="container">
    <h1>Photos</h1>

    <div class="photos">
      <n-link
        :to="`/photos/${photo.id}`"
        v-for="photo in photos"
        :key="photo.id"
      >
        <h2>{{ photo.id }}</h2>
        <p>{{ photo.author }}</p>
      </n-link>
    </div>

    <nuxt-link to="/">Back to home</nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const photos = await $axios.$get('/v2/list')

    return { photos }
  },
}
</script>

<style scoped>
.container {
  padding: 1em;
  width: 1220px;
  margin: 0 auto;
}
.photos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 1em;
  text-align: center;
}
.photo-item {
  width: 100%;
  height: 256px;
  object-fit: cover;
}
</style>
