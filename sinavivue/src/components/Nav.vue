<template>
    <v-toolbar app>
      <v-icon medium>home</v-icon>
      <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
      <v-toolbar-title class="grey--text text--darken-2">SINAVI</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only hidden-sm-only grey--text text--darken-2">
        <v-btn flat>NOSOTROS</v-btn>
        <v-btn flat>PROCESO</v-btn>
        <v-btn flat>CONTACTO</v-btn>
        <v-btn flat>HISTORIAS</v-btn>
        <v-btn flat>INICIAR SESIÓN</v-btn>
        <v-layout row wrap align-center :style="`width: 175px; display: ${visible};`">
        <!-- <v-layout row wrap align-center style="width: 175px; display: none;"> -->
          <v-flex xs4 class="ma-0"><img :src="picture" style="width: 50px; border-radius: 50%;"></v-flex>
          <v-flex xs8 class="ma-0">
              <span class="body-1 font-weight-black" style="float:left">{{username}}</span><br>
              <span class="caption font-weight-medium" style="float:left">Perfil de Usuario</span>
          </v-flex>
        </v-layout>
      </v-toolbar-items>
      
    </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    // visible: "flex"
    //picture: "../assets/user_.jpg",
    // picture: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1200x1200.jpg",
    // username: "Luis Salgado"
  }),
  props: [
    'picture', 'username', 'visible'
  ]
}
</script>

<style>

</style>
