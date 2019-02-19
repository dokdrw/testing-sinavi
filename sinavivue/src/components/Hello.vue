<template>
    <div style="padding-top: 10px;">
       <span class="headline font-weight-regular">Texto desde un componente diferente</span>
       <p style="margin: 0;">Hay actualmente {{countLinks}} links</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'countLinks'
        ])
    }
}
</script>
