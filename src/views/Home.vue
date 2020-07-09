<template>
  <div class="row">
    <q-card class="q-ma-md .col-12 .col-4">
      <q-card-section class="text-h3">
        Trade or view your Portfolio
      </q-card-section>
      <q-card-section>
        <h5>The "Portfolio" tab displays your stocks.</h5>
        <h5>The "Stocks" tab displays all available stocks.</h5>
        <h5>Click on "End Day" to begin a new day and randomize the prices.</h5>
        <h5>
          Sign up or Login to be able to save & load the current day.
        </h5>
        <h5>Your funds: ${{ funds }}.</h5>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>
