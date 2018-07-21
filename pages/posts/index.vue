<template>
  <section class="container">
    <h1 class="title">
      POSTS
    </h1>
    <ul class="post">
      <li v-for="(post, index) in posts" :key="index" class="post">
        <nuxt-link :to="{ name: 'posts-id', params: { id: index }}">
          {{ post.title }}
          {{ post.description }}
        </nuxt-link>
      </li>
    </ul>
    <nuxt-link class="button" to="/">
      Home
    </nuxt-link>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/posts')
    return { posts: data }
  },
  head () {
    return {
      title: 'Posts'
    }
  }
}
</script>

<style scoped>
</style>
