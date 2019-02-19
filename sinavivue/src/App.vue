<template>
  <v-app  id="app">
    <Nav :picture="picture" :username="username" :visible="visible"></Nav>
    <v-content app>
      <v-container fluid class="ma-0 pa-0 main-container">
      <router-view :picture="picture" :username="username" @change="change" @ocultar="ocultar"></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Nav from './components/Nav'
export default {
  data: () => ({
    picture: "https://www.octagon.com.ro/wp-content/uploads/2017/12/default-female-user-profile-image.jpg",
    username: "Usuario",
    visible: "none"
  }),
  components:{
    Nav,
  },
  methods:{
    ocultar (event) {
      this.visible = event
    },
    change (event) {
      this.picture = event.img
      this.username = event.nombre
      this.visible = event.view
    }
  }
}
</script>
<style>
html{
  overflow-y: auto;
}
.main-container{
  height: 100%;
}
</style>
