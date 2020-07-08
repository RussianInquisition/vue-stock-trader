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
import Stock from "../components/portfolio/Stock";
export default {
  computed: {
    stocks() {
      return this.$store.getters.stockPortfolio;
    }
  },
  components: {
    appStock: Stock
  }
};
</script>
