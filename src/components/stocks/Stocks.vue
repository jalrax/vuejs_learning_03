<template>
  <div>
    <Stock v-for="stock in stocks" :stock="stock"></Stock>
  </div>
</template>

<script>
  import Stock from './Stock'

  export default {
    name: 'Stocks',
    components: {
      Stock,
    },
    computed: {
      stocks() {
        return this.$store.getters.stocks
      }
    }
  }
</script>

<style scoped>

</style>
