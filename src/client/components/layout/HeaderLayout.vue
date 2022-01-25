<template>
<div id="header" :style="{marginTop: this.alertsHeight}" :ref="'header'">

  <div class="topnav" id="menu">

    <router-link to="/#mainSection" id="logoBox" class="logoMenu" :class="this.mobileMenuOpened && this.isMobile ? 'openedMenuLink' : '' ">
      <img v-on:click="this.collapseMenuBack" src="/public/assets/images/WebDollar-logo-white.png" class="darkTheme" alt="Cryptocurrency of the future" id="logo" title="Cryptocurrency of the future" />
      <img v-on:click="this.collapseMenuBack" src="/public/assets/images/WebDollar-logo-black.png" class="lightTheme" alt="Cryptocurrency of the future" id="logo" title="Cryptocurrency of the future" />
    </router-link>

    <a v-on:click="this.handleToggleDark" :class="this.mobileMenuOpened && this.isMobile ? 'openedMenuLink' : '' "><div><span :class="`fas fa-${$store.state.settings.dark ?'sun':'moon'} nav-item-icon `" title="Switch theme" /></div></a>

    <a href="https://webdollar.network/" :class="this.mobileMenuOpened && this.isMobile ? 'openedMenuLink' : '' " rel="noopener" target="_blank">
      <div v-on:click="this.collapseMenuBack">Explorer</div>
    </a>

    <router-link to="/partners/businesses" :class="this.mobileMenuOpened && this.isMobile ? 'openedMenuLink' : '' ">
      <div v-on:click="this.collapseMenuBack">Partners</div>
    </router-link>

    <router-link to="/partners/exchanges" :class="this.mobileMenuOpened && this.isMobile ? 'openedMenuLink' : '' ">
      <div v-on:click="this.collapseMenuBack">Exchanges</div>
    </router-link>

    <router-link to="/faq" :class="this.mobileMenuOpened && this.isMobile ? 'openedMenuLink' : '' ">
      <div v-on:click="this.collapseMenuBack">FAQ</div>
    </router-link>

    <router-link to="/media" :class="this.mobileMenuOpened && this.isMobile ? 'openedMenuLink' : '' ">
      <div v-on:click="this.collapseMenuBack">Media</div>
    </router-link>

    <router-link to="/#community" :class="this.mobileMenuOpened && this.isMobile ? 'openedMenuLink' : '' ">
      <div v-on:click="this.collapseMenuBack">Community</div>
    </router-link>

    <router-link to="/#coinDistributionSection" :class="mobileMenuOpened && this.isMobile ? 'openedMenuLink' : '' ">
      <div v-on:click="this.collapseMenuBack">Network</div>
    </router-link>

    <router-link to="/#get-started" :class="mobileMenuOpened && this.isMobile ? 'openedMenuLink' : '' ">
      <div v-on:click="this.collapseMenuBack">Get Started</div>
    </router-link>

    <router-link to="/#what-is-WebDollar" :class="mobileMenuOpened && this.isMobile ? 'openedMenuLink' : '' ">
      <div v-on:click="this.collapseMenuBack">About</div>
    </router-link>

    <a href="javascript:void(0);" style="font-size:15px;" :style="{display: (mobileMenuOpened || isMobile==false) ? 'none':'block'}" class="icon showMenu" @click="this.showMobileMenu" :class="mobileMenuOpened ? 'openedMenuLink' : '' ">&#9776;</a>

  </div>
  <div id="WebDollarAlertsStickyBar"></div>
</div>
</template>

<script>
export default {

  name: "HeaderLayout",

  components: {},

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
