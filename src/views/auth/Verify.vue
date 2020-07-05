<template>
    <div class="verify">
        <div class="alert alert-danger" role="alert" v-if="error">
            {{ error }}
        </div>
        <h1 v-show="!error">Please wait..</h1>
        <router-link to="/workarea" v-slot="{ href, navigate }">
            <b-button :href="href" @click="navigate">Workarea</b-button>
        </router-link>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    props: ['hash'],

    data() {
        return {
            error: null
        }
    },

    mounted() {
        this.sendVerifyRequest(this.hash)
            .then(() => {
                this.$router.push({ name: 'Workarea' })
            })
            .catch(error => {
                console.log(error.response)
                this.error = 'Error verifying email'
            })
    },

    computed: {
        ...mapGetters('auth', ['user'])
    },

    methods: {
        ...mapActions('auth', ['sendVerifyRequest'])
    }
}
</script>
