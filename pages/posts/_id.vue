<template>
  <section class="container">
    <h1 class="title">
      Post
    </h1>
    <h2 class="info">
      {{ post.title }}
      {{ post.description }}
    </h2>
    <nuxt-link class="button" to="/posts">
      Posts
    </nuxt-link>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'id',
  asyncData ({ params, error }) {
    return axios.get('/api/posts/' + params.id)
      .then((res) => {
        return { post: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'post not found' })
      })
  },
  head () {
    return {
      title: `post: ${this.post.title}`
    }
  }
}
</script>

<style scoped>
</style>
