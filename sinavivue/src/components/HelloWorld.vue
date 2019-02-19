<template>
  <v-container class="pa-0" style="background-color: rgba(51, 143, 181, 1); z-index: -1; height: 100%;" fluid>

    <div class="backgroundImage">
      <img src="../assets/background_.png" style="width: 650px;">
    </div>

    <section class="pa-0" style="z-index: 1; padding:0;">
      <v-alert :value="alertaE" type="error">
        Error!! Las credenciales no coinciden, pruebe nuevamente.
      </v-alert>
      
      <v-layout>
        <v-flex xs12 sm7 md6 lg5 xl5>
          <v-card-text>
            <span class="font-weight-regular display-1 grey--text text--lighten-3">
              BIENVENIDO AL
            </span><br>
            <span class="font-weight-medium display-2 yellow--text text--darken-2">
              SISTEMA <br> NACIONAL <br> DE VIVIENDA
            </span>
          </v-card-text>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex xs12 sm7 md5 lg4 xl4>
          <v-card-text class="subheading grey--text text--lighten-3">
            <span>
              Inicie sesión y descubra las <br> oportunidades que el programa de asistencia social de vivienda le ofrece
            </span>
            <v-form>
              <v-text-field outline append-icon="mail" v-model="correo" name="login" 
                v-on:keyup.enter="redirect" label="Correo" type="text"></v-text-field>
              <v-text-field outline append-icon="lock" v-model="contrasena" name="password" 
                v-on:keyup.enter="redirect" label="Contraseña" id="password" type="password"></v-text-field>
              <v-layout row>
                <v-flex xs6>
                  <v-checkbox v-model="checkbox" label="Recordar usuario" class="white--text styleCheckbox"></v-checkbox>
                </v-flex>
                <v-flex xs6>

                  <!-- ///////////////////////////////////////////////////////////////////////// -->
                  <!-- ////////////////////////////////Dialogo////////////////////////////////// -->
                  <div class="text-xs-center">
                    <v-dialog v-model="dialog" width="500">
                      <a slot="activator" style="margin: 0; color: rgba(255,255,255,0.85);">Olvide mi contraseña</a>
                      <!-- <v-btn slot="activator" color="red lighten-2" dark>Abrir diálogo</v-btn> -->

                      <v-card>
                        <v-card-title class="headline grey lighten-2" primary-title>{{title}}</v-card-title>
                        
                        <v-card-text>
                          <!-- <form @submit.prevent="addLinks"> -->
                          <input class="link-input" type="text" placeholder="Agrega un link" v-model="newLink">
                          <!-- </form> -->
                          <ul>
                            <li v-for="(link,index) in links" v-bind:key="index">
                              {{link}}
                              <button v-on:click="removeLinks(index)">Borrar</button>
                            </li>
                          </ul>
                          <Hello/>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="primary" flat @click="addLinks">Agregar Link</v-btn>
                          <v-btn color="primary" flat @click="dialog = false">Correcto</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </div>
                  <!-- ///////////////////////////////////////////////////////////////////////// -->
                  
                </v-flex>
              </v-layout>
            
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="white" class="styleIniciar" @click="redirect()" :loading="loading">INICIAR</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-flex>
      </v-layout>
    </section>

  </v-container>
</template>

<script>
  import Hello from './Hello'
  import { mapState,mapMutations,mapActions } from 'vuex'
  export default {
    name: "Holamundo",
    data: () => ({
      drawer: null,
      checkbox: false,
      loading: false,
      correo: "",
      contrasena: "",
      alertaE: false,
      newLink: "",
      dialog: false
    }),
    components: {
      Hello
    },
    // props: [
    //   'picture','username'
    // ],
    props: {
      source: String
    },
    computed: {
      ...mapState([
        'title','links'
      ]),
      //Other Stuff
    },
    watch: {
      
    },
  //////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////
    beforeCreate(){
      //
    },
    created(){
      //////////////////////////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////Ocultando profile///////////////////////////////////////////
      this.$emit("ocultarProfile","none")

      this.messageService = this.$feathers.service('message');
      this.messageService.find({
        query: {}
      }).then( response => {
        this.response = response;
        
        ////////////////////////////////Obteniendo datos desde archivo.db/////////////////////////////////////////
        console.log(response)
        console.log(response.data[0].text)
      }).catch( err =>{
        console.log(err)
      })
    },
    mounted(){
      // 
    },
    methods: {
      ...mapMutations([
        'ADD_LINK'
      ]),
      ...mapActions([
        'removeLink'
      ]),
      addLinks () {
        this.ADD_LINK(this.newLink)
        this.newLink = ""
      },
      removeLinks (link) {
        this.removeLink(link)
      },
      save () {
        /////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////Creando mensaje////////////////////////////////////

        this.messageService.create({
          text: "Hola mundo"
        }).then( created =>{
          console.log(created)
        }).catch( err =>{
          
        })
        
        /////////////////////////////////////////////////////////////////////////////////////
      },
      redirect(){
        /////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////Verificando credenciales////////////////////////////////
        this.messageService = this.$feathers.service('message');
        this.messageService.find({
          query: {}
        }).then( response => {
          this.response = response;
          this.loading = true;

          for(var k=0;k<response.data.length;k++){
            if(response.data[k].text.correo == this.correo && response.data[k].text.contrasena == this.contrasena){
              var img = response.data[k].text.img
              var nombre = response.data[k].text.nombre
              var view = "flex"

              setTimeout( () =>{
                // this.$parent.changeProfile();
                this.$emit('changeProfile', {img,nombre,view})
                this.$router.push('/about');
              },3000 )
            }else{
              setTimeout( () =>{
                this.correo = ""
                this.contrasena = ""
                this.loading = false;
                this.alertaE = true
              },3000 )
            }
          }

          console.log(response)
          console.log(response.data[0].text)
        }).catch( err =>{
          console.log(err)
        })

        /////////////////////////////////////////////////////////////////////////////////////////
      }
    }
  }
</script>

<style>

.backgroundImage {
    position: absolute;
    bottom: 0px;
    left: 600px;
    z-index: 0;
    /* transition: all .6s; */
    opacity: .8;
    filter: blur(8px);
}

.theme--light .v-label {
  color: rgba(255, 255, 255, 0.85) !important;
}

.v-form .theme--light .v-icon {
  color: rgba(255, 255, 255, 0.50) !important;
}

.theme--light.v-input:not(.v-input--is-disabled) input, .theme--light.v-input:not(.v-input--is-disabled) textarea {
  color: rgba(255, 255, 255, 0.85) !important;
}

.v-form .theme--light.v-text-field--outline > .v-input__control > .v-input__slot {
  border: none;
  background-color: rgba(255, 255, 255, 0.15) !important;
}

.styleCheckbox {
  padding: 0;
  margin: 0;
}

.styleIniciar {
  padding: 0;
  margin: 0;
  border-radius: 25px;
  width: 125px;
}

/* .backgoundContainer {
  z-index: 10;
  overflow-y:auto;
  height: 100%;
  background-color: rgba(51, 143, 181, 1);
  background-image: url('../assets/background_.png');
  
  background-position: 650px bottom;
  background-size: 45%;
  background-repeat: no-repeat;

  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  
  -webkit-filter: blur(3px);
  -moz-filter: blur(3px);
  -o-filter: blur(3px);
  -ms-filter: blur(3px);
  filter: blur(3px);
} */

</style>
