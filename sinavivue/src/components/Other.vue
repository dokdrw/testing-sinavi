<template>
    <v-content class="pa-0 ma-0">
      <!-- ////////////////////////////////////////////////////////////////////////////////////////////////// -->
      <!-- ///////////////////////////////////////////Sidebar//////////////////////////////////////////////// -->
      <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute dark temporary>
        <v-list class="pa-1">
          <v-list-tile v-if="mini" @click.stop="mini = !mini">
            <v-list-tile-action>
              <v-icon>chevron_right</v-icon>
            </v-list-tile-action>
          </v-list-tile>
  
          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
              <img :src="picture">
            </v-list-tile-avatar>
  
            <v-list-tile-content>
              <v-list-tile-title>{{username}}</v-list-tile-title>
            </v-list-tile-content>
  
            <v-list-tile-action>
              <v-btn icon @click.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
  
        <v-list class="pt-0" dense>
          <v-divider light></v-divider>

          <!-- <v-list-tile v-for="item in items" :key="item.title" @click=""> -->
          <v-list-tile v-for="item in items" :key="item.title" @click.stop="drawer = !drawer">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
  
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <!-- ////////////////////////////////////////////////////////////////////////////////////////////////// -->
      
      <v-toolbar extended class="toolbar" style="padding-top: 15px;">
        <v-toolbar-side-icon style="background-color: rgba(80,164,226,0.75);" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>
          <span class="headline font-weight-medium grey--text text--darken-3">GESTIÓN INMOBILIARIA</span>
          <hr style="width: 70px; border: 2px solid rgba(80,164,226,1);"> 
          <v-card-text class="pa-0 caption font-weight-bold grey--text text--darken-3">
            <span>Aprobación de Desarrolladores</span>
          </v-card-text>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field outline append-icon="search" name="busqueda" class="hidden-xs-only" 
          label="Búsqueda" type="text" style="text-align: -webkit-right;"></v-text-field>
        <v-spacer slot="extension"></v-spacer>
        <v-toolbar-items slot="extension" class="hidden-xs-and-down">
          <v-btn flat class="grey--text text--darken-2" v-on:click="setContentView(5)">DESARROLLADORES</v-btn>
          <v-btn flat class="grey--text text--darken-2" v-on:click="setContentView(1)">APROBADO</v-btn>
          <v-btn flat class="grey--text text--darken-2" v-on:click="setContentView(10)">RECHAZADO</v-btn>
        </v-toolbar-items>
        <v-spacer slot="extension"></v-spacer>
      </v-toolbar>
      
      <!-- <router-link to="/">Home</router-link> -->
      <v-container grid-list-md text-xs-center v-if="seen">
        <v-layout row wrap>
          <Info row wrap v-for="(view,index) in views" v-bind:key="index"/>
        </v-layout>

      </v-container>
      <v-footer class="pa-3 caption font-weight-light" style="color: rgba(255,255,255,0.75); background-color: rgba(0,116,163,1);" fixed>
        <div>Agile Business Platform Copyright&copy; All Rights Reserved {{ new Date().getFullYear() }}</div>
        <v-spacer></v-spacer>
      </v-footer>
    </v-content>
    
</template>

<script>
  import Info from './Info'
  export default {
    name: "other",
    data: () => ({
      seen: true,
      drawer: null,
      items: [
        { title: 'SINAVI', icon: 'dashboard' },
        { title: 'Acerca de', icon: 'question_answer' }
      ],
      mini: false,
      right: null,
      views: new Array(6)
    }),
    props: [
      'picture','username'
    ],
    components:{
      Info
    },
    created() {
      //////////////////////////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////Mostrando profile///////////////////////////////////////////
      this.$emit("mostrarProfile","flex")
    },
    methods: {
      setContentView (amount) {
        console.log("Antes: " + this.views.length);
        console.log(this.views);
        this.views = [].slice();
        this.views[amount] = 0;
        console.log("Despues: " + this.views.length);
        console.log(this.views);
      },
      hideContent () {
        this.seen = false
      },
      showContent () {
        this.seen = true
      }
    }
  }
</script>

<style>
  .toolbar .theme--light .v-label {
    color: rgba(0, 0, 0, 0.50) !important;
  }

  .toolbar .theme--light.v-input:not(.v-input--is-disabled) input, .theme--light.v-input:not(.v-input--is-disabled) textarea {
    color: rgba(0, 0, 0, 0.85) !important;
  }

  .toolbar .theme--light.v-text-field--outline > .v-input__control > .v-input__slot {
    width: 300px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    background-color: transparent !important;
  }
  .circle {
    width: 70px;
    border-radius: 50%;
  }
</style>
