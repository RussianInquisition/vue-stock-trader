<template>
  <q-card>
    <q-card-section class="bg-secondary text-white">
      <div class="text-h6">
        {{ stock.name }}
        <span class="text-caption q-ml-sm"
          >(Price: ${{ stock.price }} | Quantity: {{ stock.quantity }})</span
        >
      </div>
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section class="row">
      <q-input v-model="quantity" type="number" label="Quantity"></q-input>
      <q-btn
        align="right"
        color="secondary"
        class="q-ma-md q-ml-xl"
        @click="sellStock"
        :disable="quantity <= 0 || insufficientQuantity"
        >Sell</q-btn
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
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  props: {
    stock: {
      type: Object
    }
  },
  methods: {
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("sellStock", order);
      this.quantity = 0;
    }
  }
};
</script>
