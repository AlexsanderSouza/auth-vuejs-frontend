<template>
    <div class="login-reg-panel">
        <div class="white-panel show-log-panel">
            <div class="login-show">
                <validation-observer ref="observer" v-slot="{ handleSubmit }">
                    <b-form @submit.stop.prevent="handleSubmit(onSubmit)">
                        <validation-provider
                            name="Email"
                            rules="required|email"
                            v-slot="validationEmail"
                        >
                            <b-form-group>
                                <b-form-input
                                    type="text"
                                    name="email-login"
                                    placeholder="Email"
                                    v-model="form.email"
                                    :state="getValidationState(validationEmail)"
                                    aria-describedby="email-login-feedback"
                                ></b-form-input>

                                <b-form-invalid-feedback
                                    id="email-login-feedback"
                                    >{{
                                        validationEmail.errors[0]
                                    }}</b-form-invalid-feedback
                                >
                            </b-form-group>
                        </validation-provider>
                        <validation-provider
                            name="Senha"
                            rules="required|minmax:8,14"
                            v-slot="validationPassword"
                        >
                            <b-form-group>
                                <b-form-input
                                    type="password"
                                    name="password-login"
                                    placeholder="Senha"
                                    v-model="form.password"
                                    :state="
                                        getValidationState(validationPassword)
                                    "
                                    aria-describedby="password-login-feedback"
                                ></b-form-input>

                                <b-form-invalid-feedback
                                    id="password-login-feedback"
                                    >{{
                                        validationPassword.errors[0]
                                    }}</b-form-invalid-feedback
                                >
                            </b-form-group>
                        </validation-provider>
                        <b-button type="submit" variant="primary"
                            >Entrar</b-button
                        >
                    </b-form>
                </validation-observer>
            </div>
        </div>
        <!-- <ValidationProvider
      vid="email"
      name="E-mail Address"
      rules="required|email"
      v-slot="{ errors }"
    >
      <input type="text" v-model="value" />
      <span>{{ errors[0] }}</span>
    </ValidationProvider> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: null,
                password: null
            }
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
        onSubmit() {
            alert('Form submitted!')
        }
    }
}
</script>

<style>
.login-reg-panel {
    position: relative;
    transform: translateY(30%);
    text-align: center;
    width: 70%;
    right: 0;
    left: 0;
    margin: auto;
    height: 400px;
    background-color: rgba(236, 48, 20, 0.9);
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
</style>
