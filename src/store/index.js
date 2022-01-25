/*
        I USE VUEX SAGA for ASYNC actions
 */

import Vue from 'vue'
import Vuex from 'vuex'

import GlobalModule from './modules/Global/Global-module'
import PageSettings from "./modules/settings/settings-store"

Vue.use(Vuex);

export function createStore () {
    return new Vuex.Store({
        modules: {

            global: GlobalModule,
            settings: PageSettings,

        }
    });
}
