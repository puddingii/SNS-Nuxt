<template>
  <div>
    <v-container>
      <v-card>
        <v-subheader>회원가입</v-subheader>
        <v-container>
          <v-form>
            <v-text-field 
              v-model="email"
              label="이메일"
              type="email"
              required
            />
            <v-text-field 
              v-model="password"
              label="비밀번호"
              type="password"
              required
            />
            <v-text-field 
              v-model="passwordCheck"
              label="비밀번호확인"
              type="password"
              required
            />
            <v-text-field 
              v-model="nickname"
              label="닉네임"
              type="nickname"
              required
            />
            <v-checkbox
              v-model="terms"
              required
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
  data() {
    return {
      name: "Sign up Page",
      valid: false,
      email: '',
      password: '',
      passwordCheck: '',
      nickname: '',
      terms: false
    }
  },
  head() {
    return {
      title: "회원가입"
    }
  }
}
</script>

<style>

</style>