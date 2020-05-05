import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import { email } from 'vee-validate/dist/rules'

// Register it globally
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('required', {
    ...required,
    message: 'Campo obrigatório'
})

extend('email', {
    ...email,
    message: 'Email invalido'
})

extend('minmax', {
    validate(value, { min, max }) {
        return value.length >= min && value.length <= max
    },
    params: ['min', 'max'],
    message: '{_field_} deve ter no mínimo {min} e no máximo {max} caracteres'
})
