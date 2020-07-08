<template>
  <div class="q-pa-md row items-start q-gutter-xl">
    <app-stock
      v-for="stock in stocks"
      :key="stock.id"
      :stock="stock"
    ></app-stock>
  </div>
</template>

<script>
import Stocks from "../components/stocks/Stock";
export default {
  components: {
    appStock: Stocks
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>
