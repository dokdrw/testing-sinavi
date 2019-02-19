<template>
  <Other :picture="picture" :username="username" @mostrarProfile="mostrarProfile"/>
</template>

<script>
  import Other from '../components/Other'

  export default {
    components: {
      Other
    },
    props: [
      'picture','username'
    ],
    methods: {
      mostrarProfile (evento) {
        this.$emit("ocultar",evento)
      }
    }
  }
</script>
