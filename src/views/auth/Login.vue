<template>
    <div class="div-body">
        <div :class="'login-reg-panel' + classMobile">
            <div v-if="!loginOrRegister && !isMobile" class="login-info-box">
                <h2>Tenho uma conta?</h2>
                <b-button class="w-200" @click="loginOrRegister_f()" variant="info">Entrar</b-button>
            </div>
            <div v-else-if="!isMobile" class="register-info-box">
                <h2>Não tenho uma conta?</h2>
                <b-button class="w-200" @click="loginOrRegister_f()" variant="info">Registrar</b-button>
            </div>
            <div
                class="show-log-panel"
                :class="['white-panel' + classMobile, loginOrRegister || isMobile ? '' : 'right-log']"
            >
                <div class="login-show">
                    <validation-observer ref="observer" v-slot="{ handleSubmit }">
                        <b-form @submit.stop.prevent="handleSubmit(onSubmit)">
                            <validation-provider name="Email" rules="required|email" v-slot="validationEmail">
                                <b-form-group>
                                    <b-form-input
                                        squared
                                        type="text"
                                        name="email-login"
                                        placeholder="Email"
                                        v-model="form.email"
                                        :state="getValidationState(validationEmail)"
                                        aria-describedby="email-login-feedback"
                                    ></b-form-input>

                                    <b-form-invalid-feedback id="email-login-feedback">{{
                                        validationEmail.errors[0]
                                    }}</b-form-invalid-feedback>
                                </b-form-group>
                            </validation-provider>
                            <validation-provider name="Senha" rules="required|minmax:8,14" v-slot="validationPassword">
                                <b-form-group>
                                    <b-form-input
                                        squared
                                        type="password"
                                        name="password-login"
                                        placeholder="Senha"
                                        v-model="form.password"
                                        :state="getValidationState(validationPassword)"
                                        aria-describedby="password-login-feedback"
                                    ></b-form-input>

                                    <b-form-invalid-feedback id="password-login-feedback">{{
                                        validationPassword.errors[0]
                                    }}</b-form-invalid-feedback>
                                </b-form-group>
                            </validation-provider>

                            <validation-provider
                                v-if="!loginOrRegister"
                                name="Confirmar senha"
                                rules="required|minmax:8,14"
                                v-slot="validationPassword"
                            >
                                <b-form-group>
                                    <b-form-input
                                        squared
                                        type="password"
                                        name="password-login"
                                        placeholder="Confirmar senha"
                                        v-model="form.password_confirmation"
                                        :state="getValidationState(validationPassword)"
                                        aria-describedby="password-login-feedback"
                                    ></b-form-input>
                                    <b-form-invalid-feedback id="password-login-feedback">{{
                                        validationPassword.errors[0]
                                    }}</b-form-invalid-feedback>
                                </b-form-group>
                            </validation-provider>
                            <div class="d-flex justify-content-between">
                                <b-button v-if="loginOrRegister && !isMobile" variant="outline-info">
                                    Esqueceu a senha?
                                </b-button>
                                <a v-if="loginOrRegister && isMobile" class="pass-recover">Esqueceu a senha?</a>
                                <div>
                                    <b-button style="margin-left: 20px" v-if="loginOrRegister" type="submit">
                                        Entrar
                                    </b-button>
                                    <b-button v-else type="submit">Registrar</b-button>
                                </div>
                            </div>
                            <div v-if="isMobile" class="mobile-info-box">
                                <a v-if="!loginOrRegister" @click="loginOrRegister_f()">Tenho uma conta !</a>
                                <a v-else @click="loginOrRegister_f()">Não tenho uma conta !</a>
                            </div>
                        </b-form>
                    </validation-observer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            form: {
                name: 'Alexsander',
                email: null,
                password: null,
                password_confirmation: null
            },
            loginOrRegister: true
        }
    },
    computed: {
        ...mapGetters(['errors'])
    },
    mounted() {
        this.$store.commit('setErrors', {})
    },
    methods: {
        getValidationState({ dirty, validated, valid = null }) {
            return dirty || validated ? valid : null
        },
        resetForm() {
            this.form = {
                name: 'Alexsander',
                email: null,
                password: null,
                password_confirmation: null
            }

            this.$nextTick(() => {
                this.$refs.observer.reset()
            })
        },
        loginOrRegister_f() {
            this.loginOrRegister = !this.loginOrRegister
        },
        ...mapActions('auth', ['sendLoginRequest', 'sendRegisterRequest']),
        onSubmit() {
            if (this.loginOrRegister) {
                this.sendLoginRequest(this.form).then(() => {
                    this.$router.push({ name: 'Workarea' })
                })
            } else {
                this.sendRegisterRequest(this.form).then(() => {
                    this.$router.push({ name: 'Workarea' })
                })
            }
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Mukta');

.right-log {
    right: 50px !important;
}
.pass-recover {
    color: RGB(6, 101, 115);
    max-width: 100px;
}
.mobile-info-box {
    position: absolute;
    bottom: 0;
    text-align: center;
    height: 35px;
    right: 0;
    left: 0;
    color: RGB(6, 101, 115);
}
.login-info-box {
    width: 30%;
    padding: 0 50px;
    top: 20%;
    left: 0;
    position: absolute;
    text-align: left;
    color: RGB(6, 101, 115);
}
.register-info-box {
    width: 30%;
    padding: 0 50px;
    top: 20%;
    right: 0;
    position: absolute;
    text-align: left;
    color: RGB(6, 101, 115);
}

b-button {
    background-color: rgba(120, 114, 98, 0.9);
}

.login-reg-panel-mobile {
    position: relative;
    top: 20%;
    text-align: center;
    width: 100%;
    right: 0;
    left: 0;
    margin: auto;
    height: 400px;
    background-color: RGBA(42, 41, 47, 0.9);
}
.login-reg-panel {
    position: relative;
    transform: translateY(30%);
    text-align: center;
    width: 70%;
    min-width: 500px;
    right: 0;
    left: 0;
    margin: auto;
    height: 400px;
    background-color: RGBA(42, 41, 47, 0.9);
}

.white-panel {
    background-color: rgba(255, 255, 255, 1);
    height: 500px;
    position: absolute;
    top: -50px;
    width: 50%;
    right: calc(50% - 50px);
    transition: 0.3s ease-in-out;
    z-index: 0;
    box-shadow: 0 0 15px 9px #00000096;
}

.white-panel-mobile {
    background-color: rgba(255, 255, 255, 1);
    height: 500px;
    position: absolute;
    top: -50px;
    width: 80%;
    right: 10%;
    transition: 0.3s ease-in-out;
    z-index: 0;
    box-shadow: 0 0 15px 9px #00000096;
}

.show-log-panel {
    display: block;
    opacity: 1;
}

.login-show input[type='text'],
.login-show input[type='password'] {
    width: 100%;
    display: block;
    margin: 20px 0;
    padding: 15px;
    border: 1px solid #b5b5b5;
    outline: none;
}

.login-show,
.register-show {
    z-index: 1;
    display: block; /* none */
    opacity: 1;
    transition: 0.3s ease-in-out;
    color: #242424;
    text-align: left;
    padding: 50px;
}

.div-body {
    font-family: 'Mukta', sans-serif;
    height: 100vh;
    min-height: 550px;
    background-image: url(../../assets/login/402142285.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    overflow-y: hidden;
}
</style>
