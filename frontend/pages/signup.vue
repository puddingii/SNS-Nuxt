<template>
  <div>
    <v-container>
      <v-card>
        <v-subheader>회원가입</v-subheader>
        <v-container>
          <v-form ref="form" v-model="valid" @submit.prevent="handleFormSubmit">
            <v-text-field
              v-model="email"
              label="이메일"
              type="email"
              :rules="emailRules"
              required
            />
            <v-text-field
              v-model="password"
              label="비밀번호"
              type="password"
              :rules="passwordRules"
              required
            />
            <v-text-field
              v-model="passwordCheck"
              label="비밀번호확인"
              type="password"
              :rules="passwordCheckRules"
              required
            />
            <v-text-field
              v-model="nickname"
              label="닉네임"
              type="nickname"
              :rules="nicknameRules"
              required
            />
            <v-checkbox
              v-model="terms"
              required
              :rules="termsRules"
              label="체크하는 곳인데 뭘 체크하는지 모르는 체크 박스이다. ㅋㅋ루삥뽕"
            />
            <v-btn color="green" type="submit">제출하기</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  middleware: 'anonymous',
  data () {
    return {
      valid: false,
      email: '',
      password: '',
      passwordCheck: '',
      nickname: '',
      terms: false,
      emailRules: [
        v => !!v || '이메일은 필수입니다.',
        v => /.+@.+/.test(v) || '이메일이 유효하지 않습니다.'
      ],
      nicknameRules: [
        v => !!v || '닉네임은 필수입니다.'
      ],
      passwordRules: [
        v => !!v || '비밀번호는 필수입니다.'
      ],
      passwordCheckRules: [
        v => !!v || '비밀번호 확인은 필수입니다.',
        v => v === this.password || '비밀번호가 일치하지 않습니다.'
      ],
      termsRules: [
        v => !!v || '약관에 동의 해야함.'
      ]
    }
  },
  head () {
    return {
      title: '회원가입'
    }
  },
  computed: {
    me () {
      return this.$store.state.users.me
    }
  },
  watch: {
    me (newValue) {
      if (newValue) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    handleFormSubmit () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('users/signUp', {
          nickname: this.nickname,
          email: this.email,
          password: this.password
        })
      }
    }
  }
}
</script>

<style>

</style>
