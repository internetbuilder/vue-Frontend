<template>
<div id="footer">

  <div id="footerSection">
    <div class="textContainer sectionCenteredWidth">

      <div class="footerContainer">
        <div>
          <h2>Follow us</h2>

          <div class="footerItem followUsLinks">
              <a href="https://facebook.com/webdollar.io" rel="noopener" target="_blank" class="linkIconSocial">
                  <img data-src="/public/assets/images/SocialMedia/facebook_white.png" alt="Facebook WebDollar" title="Facebook CryptoCurrency WebDollar" class="linkIconSocialNormal lazy">
                  <img data-src="/public/assets/images/SocialMedia/facebook_yellow.png" alt="Facebook WebDollar" title="Facebook CryptoCurrency WebDollar" class="linkIconSocialHover lazy">
              </a>
              <a href="https://twitter.com/webdollar_io" rel="noopener" target="_blank" class="linkIconSocial">
                  <img data-src="/public/assets/images/SocialMedia/twitter_white.png" alt="Twitter WebDollar" title="Twitter WebDollar" class="linkIconSocialNormal lazy">
                  <img data-src="/public/assets/images/SocialMedia/twitter_yellow.png" alt="Twitter WebDollar" title="Twitter WebDollar" class="linkIconSocialHover lazy">
              </a>
              <a href="https://t.me/WebDollar" rel="noopener" target="_blank" class="linkIconSocial">
                  <img data-src="/public/assets/images/SocialMedia/telegram_white.png" alt="Telegram WebDollar" title="Telegram WebDollar" class="linkIconSocialNormal lazy">
                  <img data-src="/public/assets/images/SocialMedia/telegram_yellow.png" alt="Telegram WebDollar" title="Telegram WebDollar" class="linkIconSocialHover lazy">
              </a>
              <a href="https://www.reddit.com/r/webdollar/" rel="noopener" target="_blank"  class="linkIconSocial lazy">
                  <img data-src="/public/assets/images/SocialMedia/reddit_white.png" alt="Reddit WebDollar" title="Reddit WebDollar" class="linkIconSocialNormal lazy">
                  <img data-src="/public/assets/images/SocialMedia/reddit_yellow.png" alt="Reddit WebDollar" title="Reddit WebDollar" class="linkIconSocialHover lazy">
              </a>
              <a href="https://medium.com/@webdollar" rel="noopener" target="_blank" class="linkIconSocial">
                  <img data-src="/public/assets/images/SocialMedia/medium_white.png" alt="Medium WebDollar" title="Medium WebDollar" class="linkIconSocialNormal lazy">
                  <img data-src="/public/assets/images/SocialMedia/medium_yellow.png" alt="Medium WebDollar" title="Medium WebDollar" class="linkIconSocialHover lazy">
              </a>
              <a href="https://shang.qq.com/wpa/qunwpa?idkey=7021906277b183cdedb6567ea96d2170cef9b24b8bba09807570b0b5bf04da43" rel="noopener" target="_blank" class="linkIconSocial">
                  <img data-src="/public/assets/images/SocialMedia/qq_white.png" alt="QQ WebDollar" title="QQ WebDollar" class="linkIconSocialNormal lazy">
                  <img data-src="/public/assets/images/SocialMedia/qq_yellow.png" alt="QQ WebDollar" title="QQ WebDollar" class="linkIconSocialHover lazy">
              </a>
          </div>

        </div>
        <div>
          <h2>Powered by</h2>

          <div class="footerItem">
            <a href="http://bit-technologies.net" rel="noopener" target="_blank">
              <img class="footer-poweredBy" src="/public/assets/images/poweredby/BIT-TECHNOLOGIES-RO-SRL-Logo.png" alt="bit-technologies">
            </a>
            <span class="newCryptoText">BitTechnologies</span>
          </div>

          <div class="footerItem">
            <a href="https://aipss.ro" rel="noopener" target="_blank">
              <img class="footer-poweredBy" src="/public/assets/images/poweredby/aipss-white-logo-2-1.png" alt="aipss">
            </a>
            <span class="newCryptoText">AIPSS</span>
          </div>

        </div>
      </div>
      <div class="newCryptoText">Copyright © 2022 WebDollar.io - All rights reserved.</div>
    </div>
  </div>
</div>
</template>

<script>
export default {

  name: "FooterLayout"

}
</script>

<style>

    .followUsLinks{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        margin: 0 auto;
    }

    @media only screen and (max-width: 600px) {
      .followUsLinks{
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          margin: 0 auto;
      }
    }

    .linkIconSocial img{
        width: 40px;
        display: block;
        margin: 0 auto;
        margin-top: 20px;
    }

    .linkIconSocial .linkIconSocialHover{
        display: none;
    }

    .linkIconSocial:hover .linkIconSocialHover{
        display: block;
    }

    .linkIconSocial:hover .linkIconSocialNormal{
        display: none;
    }

</style>
