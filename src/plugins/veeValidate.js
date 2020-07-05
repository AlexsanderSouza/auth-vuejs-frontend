import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

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
        if (min != 0 && max != 0) return value.length >= min && value.length <= max
        if (max == 0) return value.length >= min
        if (min == 0) return value.length <= max
    },
    params: ['min', 'max'],
    message: (fieldName, placeholders) => {
        if (placeholders.min != 0 && placeholders.max != 0) {
            return `${fieldName} deve ter no mínimo ${placeholders.min} e no máximo ${placeholders.max} caracteres`
        } else if (placeholders.max == 0) {
            return `${fieldName} deve ter no mínimo ${placeholders.min} caracteres`
        } else if (placeholders.min == 0) {
            return `${fieldName} deve ter no máximo ${placeholders.max} caracteres`
        }
    }
})
