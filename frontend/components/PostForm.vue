<template>
  <v-card style="margin-bottom: 20px">
    <v-container>
      <v-form ref="form" v-model="valid" @submit.prevent="handleFormSubmit">
        <v-textarea
          v-model="content"
          outlined
          auto-grow
          clearable
          label="두둥탁!"
          :hide-details="hideDetails"
          :success-messages="successMessages"
          :success="success"
          :rules="[v => !!v.trim() || '내용을 입력하세요.']"
          @input="handleTextareaChange"
        />
        <v-btn type="submit" color="green" absolute right>ㄱㄱ</v-btn>
        <input ref="imageInput" type="file" multiple hidden @change="handleImagesChange">
        <v-btn type="button" @click="handleImageUploadClick">이미지 업로드</v-btn>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      content: '',
      hideDetails: true,
      successMessages: '',
      success: false,
      valid: false
    }
  },
  computed: {
    ...mapState('users', ['me'])
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
          await this.$store.dispatch('posts/add', {
            content: this.content,
            User: {
              nickname: this.me.nickname
            },
            Comments: [],
            Images: [],
            id: Date.now(),
            createdAt: Date.now()
          })
          this.content = ''
          this.successMessages = '게시글 등록 성공!'
          this.success = true
          this.hideDetails = false
        }
      } catch (e) {

      }
    },
    handleImageUploadClick () {
      this.$refs.imageInput.click()
    },
    handleImagesChange (e) {
      console.log(e.target.files)
    }
  }
}
</script>
