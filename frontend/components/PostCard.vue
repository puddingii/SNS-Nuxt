<template>
  <div style="margin-bottom: 20px">
    <v-card>
      <v-img />
      <v-card-text>
        <div>
          <h3>{{ post.User.nickname }}</h3>
          <NuxtLink :to="`/post/${ post.id }`">{{ post.content }}</NuxtLink>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="orange">
          <v-icon>mdi-repeat-variant</v-icon>
        </v-btn>
        <v-btn text color="orange">
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
        <v-btn text color="orange" @click="handleCommentToggle">
          <v-icon>mdi-comment-outline</v-icon>
        </v-btn>
        <v-menu offset-y open-on-hover>
          <template #activator="{ on }">
            <v-btn text color="orange" v-on="on">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
          <div style="background: white">
            <v-btn dark color="red" @click="handlePostRemove">삭제</v-btn>
            <v-btn text color="orange" @click="handlePostEdit">수정</v-btn>
          </div>
        </v-menu>
      </v-card-actions>
    </v-card>
    <template v-if="commentOpened">
      <CommentForm :post-id="post.id" />
      <v-list>
        <v-list-item v-for="c in post.Comments" :key="c.id">
          <v-list-item-avatar color="teal">
            <span>{{ c.User.nickname[0] }}</span>
          </v-list-item-avatar>
          <v-list-item-content>
            <h3>{{ c.User.nickname }}</h3>
            <div>{{ c.content }}</div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </div>
</template>

<script>
import CommentForm from '~/components/CommentForm'

export default {
  components: {
    CommentForm
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      commentOpened: false
    }
  },
  methods: {
    handlePostRemove () {
      this.$store.dispatch('posts/remove', {
        id: this.post.id
      })
    },
    handlePostEdit () {
      console.log('hello')
    },
    handleCommentToggle () {
      this.commentOpened = !this.commentOpened
    }
  }
}
</script>

<style>

</style>
