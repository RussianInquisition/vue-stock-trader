<template>
  <q-card>
    <q-card-section class="bg-secondary text-white">
      <div class="text-h6">
        {{ stock.name }}
        <span class="text-caption q-ml-sm">(Price: ${{ stock.price }})</span>
      </div>
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section class="row">
      <q-input v-model="quantity" type="number" label="Quantity"></q-input>
      <q-btn
        align="right"
        color="secondary"
        class="q-ma-md q-ml-xl"
        @click="buyStock"
        :disabled="insufficientFunds || quantity <= 0"
        >Purchase</q-btn
      >
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      quantity: ""
    };
  },
  props: {
    stock: {
      type: Object
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockName: this.stock.name,
        stockPrice: this.stock.price,
        quantity: parseInt(this.quantity)
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>
