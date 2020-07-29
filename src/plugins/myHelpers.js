const myHelpers = {
    methods: {
        toastTopEnd(icon, title, position = 'top-end') {
            this.$swal({
                toast: true,
                position: position,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                icon: icon,
                title: title,
                onOpen: toast => {
                    /* ERRO */
                    toast.addEventListener('mouseenter', this.$swal.stopTimer)
                    toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                }
            })
        }
    }
}

export default myHelpers
