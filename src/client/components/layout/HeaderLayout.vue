<template>
<div id="header" :style="{marginTop: this.alertsHeight}" :ref="'header'">

  <div class="topnav" id="menu">

    <router-link to="/#mainSection" id="logoBox" class="logoMenu" :class="this.mobileMenuOpened && this.isMobile ? 'openedMenuLink' : '' ">
      <img v-on:click="this.collapseMenuBack" src="/public/assets/images/WebDollar-logo-white.png" class="darkTheme" :alt="$i18n.t('global.currencyOfTheInternet')" id="logo" :title="$i18n.t('global.currencyOfTheInternet')" />
      <img v-on:click="this.collapseMenuBack" src="/public/assets/images/WebDollar-logo-black.png" class="lightTheme" :alt="$i18n.t('global.currencyOfTheInternet')" id="logo" :title="$i18n.t('global.currencyOfTheInternet')" />
    </router-link>

    <a href="javascript:void(0);" v-on:click="this.handleToggleDark" :class="this.mobileMenuOpened && this.isMobile ? 'openedMenuLink' : '' ">
      <div><span :class="`fas fa-${$store.state.settings.dark ?'sun':'moon'} nav-item-icon `" :title="$i18n.t('layout.navbar.switchTheme')" /></div>
    </a>

    <a href="javascript:void(0);" id="language" :class="this.mobileMenuOpened && this.isMobile ? 'openedMenuLink' : '' ">
      <language-select class="nav-link"/>
    </a>

    <a href="https://webdollar.network/" :class="this.mobileMenuOpened && this.isMobile ? 'openedMenuLink' : '' " rel="noopener" target="_blank">
      <div v-on:click="this.collapseMenuBack">{{ $i18n.t('layout.navbar.explorer') }}</div>
    </a>

    <router-link to="/partners/businesses" :class="this.mobileMenuOpened && this.isMobile ? 'openedMenuLink' : '' ">
      <div v-on:click="this.collapseMenuBack">{{ $i18n.t('layout.navbar.partners') }}</div>
    </router-link>

    <router-link to="/partners/exchanges" :class="this.mobileMenuOpened && this.isMobile ? 'openedMenuLink' : '' ">
      <div v-on:click="this.collapseMenuBack">{{ $i18n.t('layout.navbar.exchanges') }}</div>
    </router-link>

    <router-link to="/faq" :class="this.mobileMenuOpened && this.isMobile ? 'openedMenuLink' : '' ">
      <div v-on:click="this.collapseMenuBack">{{ $i18n.t('layout.navbar.faq') }}</div>
    </router-link>

    <router-link to="/media" :class="this.mobileMenuOpened && this.isMobile ? 'openedMenuLink' : '' ">
      <div v-on:click="this.collapseMenuBack">{{ $i18n.t('layout.navbar.media') }}</div>
    </router-link>

    <router-link to="/#community" :class="this.mobileMenuOpened && this.isMobile ? 'openedMenuLink' : '' ">
      <div v-on:click="this.collapseMenuBack">{{ $i18n.t('layout.navbar.community') }}</div>
    </router-link>

    <router-link to="/#coinDistributionSection" :class="mobileMenuOpened && this.isMobile ? 'openedMenuLink' : '' ">
      <div v-on:click="this.collapseMenuBack">{{ $i18n.t('layout.navbar.network') }}</div>
    </router-link>

    <router-link to="/#get-started" :class="mobileMenuOpened && this.isMobile ? 'openedMenuLink' : '' ">
      <div v-on:click="this.collapseMenuBack">{{ $i18n.t('layout.navbar.getStarted') }}</div>
    </router-link>

    <router-link to="/#what-is-WebDollar" :class="mobileMenuOpened && this.isMobile ? 'openedMenuLink' : '' ">
      <div v-on:click="this.collapseMenuBack">{{ $i18n.t('layout.navbar.about') }}</div>
    </router-link>

    <a href="javascript:void(0);" style="font-size:15px;" :style="{display: (mobileMenuOpened || isMobile==false) ? 'none':'block'}" class="icon showMenu" @click="this.showMobileMenu" :class="mobileMenuOpened ? 'openedMenuLink' : '' ">&#9776;</a>

  </div>
  <div id="WebDollarAlertsStickyBar"></div>
</div>
</template>

<script>
import LanguageSelect from "../UI/elements/language-select.vue"

export default {

  name: "HeaderLayout",

  components: {LanguageSelect},

  data() {
    return {
      screenWidth: 0,
      alertsHeight: 0,
      mobileMenuOpened: false,
      isMobile: false,
      alerts: [{
        message: 'test text'
      }, {
        message: 'test text 2'
      }]
    }
  },

  methods: {

    collapseMenuBack() {
      this.$refs['header'].style.zIndex = 10;
      this.mobileMenuOpened = false;
    },

    handleToggleDark(){
       this.$store.commit('setDark', !this.$store.state.settings.dark)
    },

    showMobileMenu() {
      this.$refs['header'].style.zIndex = 20;
      this.mobileMenuOpened = true;

    },

    verifyIfIsMobile() {

      if (this.screenWidth < 768) {

        this.isMobile = true;

      } else {

        this.isMobile = false;

      }

    },

    addEvent(object, type, callback) {
      if (object === null || typeof(object) === 'undefined') return;
      if (object.addEventListener) {
        object.addEventListener(type, callback, false);
      } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
      } else {
        object["on" + type] = callback;
      }
    }

  },

  mounted() {

    if (typeof window === 'undefined') return;

    this.addEvent(window, "resize", (event) => {

      this.screenWidth = window.innerWidth;
      this.verifyIfIsMobile();

    });

    this.addEvent(window, "scroll", (event) => {

      if (this.mobileMenuOpened == true) {
        this.collapseMenuBack();
      }

    });

    this.screenWidth = window.innerWidth;
    this.verifyIfIsMobile();

  }

}

</script>
