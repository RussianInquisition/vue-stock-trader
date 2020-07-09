<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-secondary text-white rounded-borders">
      <q-tabs>
        <q-route-tab to="/" exact class="text-subtitle1 text-white"
          >Stock trader</q-route-tab
        >
        <q-route-tab to="/portfolio">Portfolio</q-route-tab>
        <q-route-tab to="/stocks">Stocks</q-route-tab>
      </q-tabs>
      <q-toolbar-title align="right" class="text-body1 text-weight-medium">
        Funds: ${{ funds }}
      </q-toolbar-title>
      <q-btn-group flat align="right">
        <q-btn label="End day" @click="endDay"></q-btn>
        <q-btn-dropdown label="Save & Load" v-if="userIsLoggedIn">
          <q-list>
            <q-item clickable v-ripple @click="saveData">
              <q-item-section>
                <q-item-label>Save Data</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="loadData">
              <q-item-section>
                <q-item-label>Load Data</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn label="Logout" @click="logoutUser" v-if="userIsLoggedIn"></q-btn>
      </q-btn-group>
      <q-tabs v-if="!userIsLoggedIn">
        <q-route-tab to="/signup">Sign Up / Login</q-route-tab>
      </q-tabs>
    </q-toolbar>
  </div>
</template>

<script>
import axios from "axios";
import firebase from "firebase";
import { mapActions } from "vuex";
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    userIsLoggedIn() {
      return this.$store.getters.userIsLoggedIn;
    }
  },
  methods: {
    ...mapActions(["randomizeStocks", "getData"]),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      axios.put(
        "https://vue-stock-trader-ffe5f.firebaseio.com/data.json",
        data
      );
    },
    loadData() {
      this.getData();
    },
    logoutUser() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.dispatch("logoutUser");
        });
    }
  }
};
</script>
