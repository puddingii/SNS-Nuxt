<template>
  <v-list>
    <v-list-item v-for="(nickname, cnt) in list" :key="cnt">
      <span>{{ nickname }}</span>
      <v-icon>mdi-minus-circle-outline</v-icon>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>
