<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm-3></v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <v-form ref="form" v-model="form" class="pa-3 pt-4">
          <v-text-field
            v-model="password"
            :rules="[rules.password, rules.length(6)]"
            box
            color="deep-purple"
            counter="6"
            label="Password"
            style="min-height: 96px"
            type="password"
          ></v-text-field>
          <v-text-field v-model="phone" box color="deep-purple" label="Phone number" mask="phone"></v-text-field>
          <v-text-field
            v-model="email"
            :rules="[rules.email]"
            box
            color="deep-purple"
            label="Email address"
            type="email"
          ></v-text-field>
          <v-textarea v-model="bio" auto-grow box color="deep-purple" label="Bio" rows="1"></v-textarea>
          <v-checkbox v-model="agreement" :rules="[rules.required]" color="deep-purple">
            <template slot="label">
              I agree to the&nbsp;
              <a href="#" @click.stop.prevent="dialog = true">Terms of Service</a>
              &nbsp;and&nbsp;
              <a
                href="#"
                @click.stop.prevent="dialog = true"
              >Privacy Policy</a>*
            </template>
          </v-checkbox>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
