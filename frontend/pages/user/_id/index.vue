<template>
  <v-container>
    <div>
      <PostCard v-for="p in mainPosts" :key="p.id" :post="p" />
    </div>
  </v-container>
</template>

<script>
import PostCard from '~/components/PostCard'

export default {
  components: {
    PostCard
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
