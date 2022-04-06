export default {

    localizationStoreSelectedLanguage: async function  ({ commit, dispatch, state }, {language} ) {

        commit('setLocalizationSelectedLanguage', {language});

        localStorage.setItem('language', language);

    },



}