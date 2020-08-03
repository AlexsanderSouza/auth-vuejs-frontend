import Vue from 'vue'

export default {
    toastTopEnd(icon, title, position = 'top-end') {
        Vue.swal({
            toast: true,
            position: position,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            icon: icon,
            title: title,
            onOpen: toast => {
                /* ERRO */
                toast.addEventListener('mouseenter', () => {
                    Vue.swal.stopTimer()
                })
                toast.addEventListener('mouseleave', Vue.swal.resumeTimer)
            }
        })
    }
}
