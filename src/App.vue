<template>
  <v-app>
    <v-navigation-drawer :clipped="$vuetify.breakpoint.mdAndUp" app v-model="drawer">
      <v-list dense>
        <v-list-tile v-for="(item, i) in menuItems" :key="i" route :to="item.link">
          <v-list-tile-action>
            <v-icon left>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue darken-3" dark app :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
      <v-toolbar-title>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>        
        <router-link tag="span" style="cursor: pointer" to="/">Tech Meetups ZA</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat v-for="(item,i) in menuItems" :key="i" route :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.text}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    dialog: false,
    drawer: false,
    menuItems: [
      { icon: "supervisor_account", text: "View Meetups", link: "/meetups" },
      { icon: "room", text: "Organize Meetup", link: "/new-meetup" },
      { icon: "person", text: "Profile", link: "/" },
      { icon: "face", text: "Register", link: "/register" },
      { icon: "lock_open", text: "Login", link: "/login" }
    ]
  }),
  props: {
    source: String
  }
};
</script>
