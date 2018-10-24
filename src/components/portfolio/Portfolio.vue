<template>
  <div>
    <Stock v-for="stock in stocks" :stock="stock"></Stock>
  </div>
</template>

<script>
  import Stock from './Stock'

  export default {
    name: 'Portfolio',
    computed: {
      stocks() {
        return this.$store.getters.stockPortfolio
      },
    },
    components: {
      Stock,
    },
  }
</script>

<style scoped>

</style>
