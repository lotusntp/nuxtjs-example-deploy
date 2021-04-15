<template>
  <div>
    <h1>Photo Detail</h1>

    <img class="image" :src="photo.download_url" alt="photo" />

    <p>Author : {{ photo.author }}</p>

    <nuxt-link to="/photos">Back</nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const photo = await $axios.$get(`/id/${params.id}/info`)

    return {
      photo,
    }
  },
}
</script>

<style scoped>
.image {
  width: 300px;
}
</style>
