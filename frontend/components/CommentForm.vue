<template>
  <v-form ref="form" v-model="valid" style="position: relative" @submit.prevent="handleFormSubmit">
    <v-textarea
      v-model="content"
      filled
      label="댓글 달기"
      :hide-details="hideDetails"
      :success="success"
      :success-message="successMessages"
      @input="handleTextareaChange"
    />
    <v-btn color="green" dark absolute top right type="submit ">두둥</v-btn>
  </v-form>
</template>

<script>
export default {
  props: {
    postId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      valid: false,
      content: '',
      success: false,
      successMessages: '',
      hideDetails: true
    }
  },
  computed: {
    me () {
      return this.$store.state.users.me
    }
  },
  methods: {
    handleTextareaChange (value) {
      if (value.length) {
        this.hideDetails = true
        this.success = false
        this.successMessages = ''
      }
    },
    async handleFormSubmit () {
      try {
        if (this.$refs.form.validate()) {
          await this.$store.dispatch('posts/addComment', {
            id: Date.now(),
            postId: this.postId,
            content: this.content,
            User: {
              nickname: this.me.nickname
            }
          })
          this.content = ''
          this.success = true
          this.successMessages = '댓글이 작성되었습니다.'
        }
      } catch (e) {

      }
    }
  }
}
</script>

<style>

</style>
