<template>
  <div class="column items-center q-gutter-md">
    <q-card class="col q-pa-md">
      <q-form class="">
        <q-card-section>
          <q-input
            v-model="email"
            label="Email"
            :error="errorMessage.length > 0"
            :error-message="errorMessage"
          ></q-input>
          <q-input
            v-model="password"
            label="Password"
            type="password"
            :rules="[
              // eslint-disable-next-line prettier/prettier
              (val) =>
                val.length >= 6 || 'Password must contain at least 6 characters'
            ]"
            lazy-rules
          ></q-input>
        </q-card-section>
        <q-card-actions>
          <q-btn
            label="Sign Up"
            type="submit"
            color="secondary"
            @click.prevent="signUp"
          ></q-btn>
          <q-btn
            label="Login"
            type="submit"
            color="primary"
            @click.prevent="login"
          ></q-btn>
        </q-card-actions>
      </q-form>
    </q-card>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: ""
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$store.dispatch("loginUser");
          this.$router.push("portfolio");
        })
        // eslint-disable-next-line prettier/prettier
        .catch((error) => {
          console.log(error);
          if (error.code === "auth/invalid-email") {
            this.errorMessage = "Invalid Email";
          }
          if (error.code === "auth/email-already-in-use") {
            this.errorMessage = "This email is taken";
          }
        });
    },
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$store.dispatch("loginUser");
          this.$router.push("portfolio");
        })
        // eslint-disable-next-line prettier/prettier
        .catch((error) => {
          if (error.code === "auth/invalid-email") {
            this.errorMessage = "Invalid Email";
          }
        });
    }
  }
};
</script>
