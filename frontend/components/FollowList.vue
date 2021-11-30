<template>
  <v-list>
    <v-list-item v-for="(item, cnt) in list" :key="cnt">
      <span>{{ item.nickname }}</span>
      <v-icon>mdi-minus-circle-outline</v-icon>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data () {
    return {
      list: [{ nickname: 'HI1' }, { nickname: 'HI2' }, { nickname: 'HI3' }]
    }
  }
}
</script>

<style>

</style>
