<template>
<v-container class="container">
<v-app-bar 
      app
      class="bar"
      color="grey darken-1"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true" ></v-app-bar-nav-icon>

      <v-toolbar-title><span class="title">Koehler</span> - Acessoria Jurídica</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="red lighten-2--text text--accent-1"
        >
        <router-link class="link" to="/Principal">
          <v-list-item class="btn">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Início</v-list-item-title>
          </v-list-item>
        </router-link>

<router-link class="link" to="/Contato">
          <v-list-item class="btn">
            <v-list-item-icon>
              <v-icon>mdi-email</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Contato</v-list-item-title>
          </v-list-item>
</router-link>

<router-link class="link" to="/Serviços">
          <v-list-item class="btn">
            <v-list-item-icon>
              <v-icon>mdi-briefcase</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Serviços</v-list-item-title>
          </v-list-item>
</router-link>

          <v-list-item class="btn">
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Clientes</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</v-container>
</template>

<script>
export default {
    name: 'NavBar',
    data: () => ({
      drawer: false,
      group: null,
    }),
}
</script>

<style scoped>

.title{
  color: #E57373;
}

.container{
  padding: 0;
}

.link{
    text-decoration: none;
    color: white;
}
</style>