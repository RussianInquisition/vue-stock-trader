<template>
  <div class="row">
    <q-card class="q-ma-md .col-12 .col-4">
      <q-card-section class="text-h3"
        >Trade or view your Portfolio
      </q-card-section>
      <q-card-section>
        <h4>Click on "Save Data" to save the current day.</h4>
        <h4>Click on "Load Data" to load the saved day.</h4>
        <h4>Click on "End Day" to begin a new day and randomize the prices</h4>
        <h4>Your funds: ${{ funds }}</h4>
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
