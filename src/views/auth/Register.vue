<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-toolbar dark color="primary">
            <v-toolbar-title>Register</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Password"
                id="password"
                type="password"
              ></v-text-field>
                <v-text-field
                prepend-icon="lock"
                name="password"
                label="Confirm Password"
                id="password"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { VForm, VTextField, VAlert } from "vuetify";

export default {
  components: {
    VForm,
    VTextField,
    VAlert
  },
  data() {
    return {
      passwordShow: false,
      username: "teacher1@example.com",
      password: "secret"
    };
  },
  destroyed() {
    this.$store.dispatch("auth/setErrors");
  },
  methods: {
    submitForm() {
      // this.$store.dispatch('auth/testLogin');
      // this.$router.replace('dashboard');

      this.$store
        .dispatch("auth/login", {
          username: this.username,
          password: this.password
        })
        .then(
          res => {
            // todo: add redirect to referrer url
            this.$router.replace("dashboard");
          },
          () => {
            // scroll to errors
            document.getElementById("errors").scrollIntoView();
          }
        );
    }
  }
};
</script>
