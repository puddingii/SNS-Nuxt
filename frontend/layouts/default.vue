<template>
  <v-app>
    <div>
      <v-toolbar dark color="green">
        <v-toolbar-title>
          <NuxtLink to="/">눈누난나</NuxtLink>
        </v-toolbar-title>

        <v-spacer />
        <v-toolbar-items>
          <v-text-field label="검색" hide-details prepend-icon="mdi-magnify" :style="{ display: 'flex', alignItems: 'center' }" />
          <v-btn text nuxt to="/profile" :style="{ display: 'flex', alignItems: 'center' }">
            <div>프로필</div>
          </v-btn>
          <v-btn text nuxt to="/signup" :style="{ display: 'flex', alignItems: 'center' }">
            <div>회원가입</div>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <v-row no-gutters>
      <v-col cols="12" md="4">
        <LoginForm />
      </v-col>
      <v-col cols="12" md="8">
        <Nuxt />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import LoginForm from '~/components/LoginForm'

export default {
  components: {
    LoginForm
  }
}
</script>
