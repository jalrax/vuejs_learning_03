<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">

      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price | currency }} | Quantity: {{ stock.quantity }})</small>
        </h3>
      </div>

      <div class="panel-body">
        <div class="pull-left">
          <label>
            <input
              type="number"
              class="form-control"
              placeholder="Quantity"
              min="0"
              :class="{danger: insufficientQuantity}"
              v-model="quantity"
            >
          </label>
        </div>

        <div class="pull-right">
          <button
            class="btn btn-info"
            @click="sellStock"
            :class="{'btn-danger': insufficientQuantity}"
            :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(+this.quantity)"
          > Sell
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Stock',
    props: ['stock'],
    data() {
      return {
        quantity: 0,
      }
    },
    methods: {
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity,
        }
        this.$store.dispatch('sellStock', order)
        this.quantity = 0
      },
    },
    computed: {
      funds() {
        return this.$store.getters.funds
      },
      insufficientQuantity() {
        return this.quantity > this.stock.quantity
      },
    },
  }
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>
