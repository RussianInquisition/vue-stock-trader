<template>
  <div id="app">
    <app-header></app-header>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import firebase from "firebase";
import Header from "./components/Header.vue";
export default {
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch("initStocks");
    // eslint-disable-next-line prettier/prettier
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch("loginUser");
      }
    });
  }
};
</script>

<style lang="scss">
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slive-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 2;
  }
}
</style>
