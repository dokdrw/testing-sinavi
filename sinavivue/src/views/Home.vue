<template>
  <HelloWorld @changeProfile="changeProfile($event)" @ocultarProfile="ocultarProfile"/>
  <!-- <HelloWorld :picture="$parent.picture" :username="$parent.username"></HelloWorld> -->
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    components: {
      HelloWorld
    },
    props: [
      'picture','username'
    ],
    // props:{
    //   picture: String,
    //   username: String,
    //   obj: {
    //     type: Object,
    //     default: ( ()=> { name: 'hola'})
    //   }
    // },
    methods: {
      ocultarProfile (evento) {
        this.$emit("ocultar",evento)
      },
      changeProfile (evento) {
        // console.log(evento)
        console.log("Picture prop: "+this.picture+"\nUsername prop: "+this.username)
        console.log("Picture evento: "+evento.img+"\nUsername evento: "+evento.nombre)
        this.$emit("change",evento)
        console.log("Picture prop: "+this.picture+"\nUsername prop: "+this.username)
        console.log("Picture evento: "+evento.img+"\nUsername evento: "+evento.nombre)

        // this.picture = evento.img
        // this.username = evento.nombre
        // console.log(this.picture)
        // console.log(this.username)
        
        // this.$parent.picture = picture
        // this.$parent.username = username
      }
    }
  }
</script>
