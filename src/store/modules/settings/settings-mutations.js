export default {

    setDark(state, value ){

        state.dark = value;
        if (value) {
            document.getElementsByTagName("html")[0].classList.remove('light');
            localStorage.setItem('dark', 'true' )
        } else {
            document.getElementsByTagName("html")[0].classList.add('light');
            localStorage.setItem('dark', 'false')
        }

    },

    readLocalStorage(state){
        state.dark = ( localStorage.getItem('dark') || 'false' ) === 'true'
        if (state.dark) {
            document.getElementsByTagName("html")[0].classList.remove('light');
        } else {
            document.getElementsByTagName("html")[0].classList.add('light');
        }

    },

}
