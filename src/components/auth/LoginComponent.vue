<template>
    <div class="div-body">
        <div :class="'login-reg-panel' + classMobile">
            <div v-if="!loginOrRegister" :class="'login-info-box' + classMobile">
                <h2>Tenho uma conta?</h2>
                <b-button class="w-100" @click="loginOrRegister_f()" variant="info">Entrar</b-button>
            </div>
            <div v-else :class="'register-info-box' + classMobile">
                <h2>Não tenho uma conta?</h2>
                <b-button class="w-100" @click="loginOrRegister_f()" variant="info">Registrar</b-button>
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
                                        v-model="form.confPassword"
                                        :state="getValidationState(validationPassword)"
                                        aria-describedby="password-login-feedback"
                                    ></b-form-input>

                                    <b-form-invalid-feedback id="password-login-feedback">{{
                                        validationPassword.errors[0]
                                    }}</b-form-invalid-feedback>
                                </b-form-group>
                            </validation-provider>
                            <b-row>
                                <b-button v-if="loginOrRegister" variant="outline-info">Esqueceu a senha?</b-button>
                                <div class="float-right">
                                    <b-button v-if="loginOrRegister" type="submit">Entrar</b-button>
                                    <b-button v-else type="submit">Registrar</b-button>
                                </div>
                            </b-row>
                        </b-form>
                    </validation-observer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: null,
                password: null,
                confPassword: null
            },
            loginOrRegister: true
        }
    },
    methods: {
        getValidationState({ dirty, validated, valid = null }) {
            return dirty || validated ? valid : null
        },
        resetForm() {
            this.form = {
                email: null,
                password: null
            }

            this.$nextTick(() => {
                this.$refs.observer.reset()
            })
        },
        loginOrRegister_f() {
            this.loginOrRegister = !this.loginOrRegister
        },
        onSubmit() {
            alert('Form submitted!')
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Mukta');

.right-log {
    right: 50px !important;
}
.login-info-box {
    width: 30%;
    padding: 0 50px;
    top: 20%;
    left: 0;
    position: absolute;
    text-align: left;
    color: RGB(85, 138, 146);
}
.register-info-box {
    width: 30%;
    padding: 0 50px;
    top: 20%;
    right: 0;
    position: absolute;
    text-align: left;
    color: RGB(85, 138, 146);
}

.login-info-box-mobile {
    width: 30%;
    padding: 0 50px;
    top: 20%;
    left: 0;
    position: absolute;
    text-align: left;
    color: RGB(85, 138, 146);
}
.register-info-box-mobile {
    width: 30%;
    padding: 0 50px;
    top: 60%;
    align-content: center;
    position: absolute;
    text-align: center;
    color: RGB(85, 138, 146);
}

b-button {
    background-color: rgba(120, 114, 98, 0.9);
}

.login-reg-panel-mobile {
    position: relative;
    transform: translateY(30%);
    text-align: center;
    width: 100%;
    right: 0;
    left: 0;
    margin: auto;
    height: 500px;
    background-color: RGBA(42, 41, 47, 0.9);
}
.login-reg-panel {
    position: relative;
    transform: translateY(30%);
    text-align: center;
    width: 70%;
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
    height: 450px;
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
