<template>
  <v-container>
    <PostForm v-if="me" />
    <div>
      <PostCard v-for="p in mainPosts" :key="p.id" :post="p" />
    </div>
  </v-container>
</template>

<script>
import PostCard from '~/components/PostCard'
import PostForm from '~/components/PostForm'

export default {
  components: {
    PostCard,
    PostForm
  },
  computed: {
    me () {
      return this.$store.state.users.me
    },
    mainPosts () {
      return this.$store.state.posts.mainPosts
    }
  },
  mounted () {
    this.$store.dispatch('posts/loadPosts')
  }
}
</script>

<style>

</style>
