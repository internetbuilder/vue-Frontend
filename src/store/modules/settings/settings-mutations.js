import i18n from 'src/utils/languages/i18n'

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


    setLocalizationSelectedLanguage: (state, {  language }) => {

        if ( ['ro', 'en', 'it', 'es', 'de', 'fr'].indexOf(language) < 0){
            language = 'en';
        }

        state.language = language;
        i18n.i18n.locale = language;
        document.getElementsByTagName("html")[0].lang = language
    },

    readLocalStorage(state){
        var language = ""
        if (localStorage.getItem('language') !== null) {
            language = localStorage.getItem('language')
        } else {
            var browserLanguage = navigator.language || navigator.userLanguage
            if (browserLanguage.length >= 2) {
                browserLanguage = browserLanguage.substring(0, 2)
            }
            if ( ['ro', 'en', 'it', 'es', 'de', 'fr'].indexOf(browserLanguage) < 0){
                language = 'en';
            } else {
                language = browserLanguage
            }
        }
        i18n.i18n.locale = language
        state.language = language
        document.getElementsByTagName("html")[0].lang = language
        if (localStorage.getItem('dark') === null) {
          state.dark = true
        } else {
          state.dark = localStorage.getItem('dark') === 'true'
        }
        if (state.dark) {
            document.getElementsByTagName("html")[0].classList.remove('light');
        } else {
            document.getElementsByTagName("html")[0].classList.add('light');
        }

    },

}
