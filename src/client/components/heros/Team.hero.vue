<template>

    <div id="community">

        <div id="teamSection">

            <div class="">

                <h1 class="pageTitle bigMarginTop"> <center>{{ $i18n.t('heroes.team.community') }}</center></h1>

                <h4><center v-html="$i18n.t('heroes.team.noOfficialTeam')" /></h4>
                <h4><center>{{ $i18n.t('heroes.team.thankYouForConsideringContributing') }}</center></h4>
                <h4><center>{{ $i18n.t('heroes.team.justFollowInstructions') }}</center></h4>

                <div class="communityWrapper twoTeamColums">
                    <div class="communityItem">
                        <a href="https://t.me/WebDollar" rel="noopener" target="_blank">
                            <img data-src="/public/assets/images/SocialMedia/telegram_yellow.png" alt="Telegram WebDollar" title="Telegram WebDollar" class="communityImg lazy">
                        </a>
                        <span v-html="$i18n.t('heroes.team.joinTheCommunityTelegram')" />
                    </div>
                    <div class="communityItem">
                        <a href="https://github.com/webdollar" rel="noopener" target="_blank">
                            <img data-src="/public/assets/images/SocialMedia/github_yellow.png" alt="GitHub WebDollar" title="GitHub WebDollar" class="communityImg lazy">
                        </a>
                        <span v-html="$i18n.t('heroes.team.webdollarOpenSourceGithub')" />
                    </div>
                </div>
                <div class="communityWrapper twoTeamColums">
                    <div class="communityItem">
                        <a href="https://twitter.com/webdollar_io" rel="noopener" target="_blank">
                            <img data-src="/public/assets/images/SocialMedia/twitter_yellow.png" alt="Twitter WebDollar" title="Twitter WebDollar" class="communityImg lazy">
                        </a>
                        <span v-html="$i18n.t('heroes.team.followUsTwitter')" />
                    </div>
                    <div class="communityItem">
                        <a href="https://www.reddit.com/r/webdollar/" rel="noopener" target="_blank">
                            <img data-src="/public/assets/images/SocialMedia/reddit_yellow.png" alt="Reddit WebDollar" title="Reddit WebDollar" class="communityImg lazy">
                        </a>
                        <span v-html="$i18n.t('heroes.team.shareAndGetInvolvedReddit')" />
                    </div>
                </div>

                <h1 class="pageTitle bigMarginTopOnly"> <center>{{ $i18n.t('heroes.team.creators') }}</center></h1>

                <div class="teamWrapper twoTeamColums">

                    <div class="our-team budisteanu">

                        <div class="team-pic">
                            <img class="lazy" data-src="/public/assets/images/team/Alexandru-Ionut-Budisteanu.jpg" alt="Budisteanu Ionut Alexandru" title="Budisteanu Ionut Alexandru">

                            <div class="over-layer">
                                <ul class="social-link social-link-4">
                                    <li><a href="https://facebook.com/budisteanu.ionut" class="fa fa-facebook" rel="noopener" target="_blank" aria-label="facebook"></a></li>
                                    <li><a href="https://github.com/ibudisteanu" class="fa fa-github" rel="noopener" target="_blank" aria-label="github"></a></li>
                                    <li><a href="https://budisteanu.net" class="fa fa-earth" rel="noopener" target="_blank" aria-label="website"></a></li>
                                    <li><a href="https://ro.wikipedia.org/wiki/Ionu%C8%9B_Budi%C8%99teanu" class="fa fa-wikipedia" rel="noopener" target="_blank" aria-label="wikipedia"></a></li>
                                </ul>
                            </div>

                        </div>

                        <span class="teamName">Alexandru Ionut Budisteanu</span>
                        <span class="teamRole">{{ $i18n.t('heroes.team.founderAndProtocolDev') }}</span>
                        <p class="description">{{ $i18n.t('heroes.team.creatorBudisteanuDescription') }}</p>
                    </div>

                    <div class="our-team panait">
                        <div class="team-pic">
                            <img class="lazy" data-src="/public/assets/images/team/PanaitAlexandru.jpg" alt="Alexandru Ionut Panait" title="Alexandru Ionut Panait">
                            <div class="over-layer">
                                <ul class="social-link social-link-4">
                                    <li><a href="https://www.facebook.com/Ionut.Alex.Panait" rel="noopener" target="_blank"  class="fa fa-facebook" aria-label="facebook"></a></li>
                                    <li><a href="https://www.linkedin.com/in/alexandru-panait-64181ba7/" rel="noopener" target="_blank" class="fa fa-linkedin2" aria-label="linkedin"></a></li>
                                    <li><a href="https://twitter.com/AlexandruPanai" rel="noopener" target="_blank" class="fa fa-twitter" aria-label="twitter"/></li>
                                    <li><a href="https://t.me/WebDollar_alexandruPanait" rel="noopener" target="_blank" class="fa fa-telegram" aria-label="telegram"/></li>
                                </ul>
                            </div>
                        </div>
                        <span class="teamName">Alexandru Ionut Panait</span>
                        <span class="teamRole">{{ $i18n.t('heroes.team.generalManagerAndPlatformDev') }}</span>
                        <p v-html="$i18n.t('heroes.team.creatorPanaitDescription')" />
                    </div>

                </div>

            </div>
        </div>

        <div class="contributorsSection">
            <span class="pageTitle alignCenter bigMarginTopOnly" >{{ $i18n.t('heroes.team.contributors') }}</span>
            <span class="contributorsItem" v-html="$i18n.t('heroes.team.webdollarProtocolContributors')" />
            <span class="contributorsItem" v-html="$i18n.t('heroes.team.webdollarWebsiteContributors')" />
            <span class="contributorsItem">{{ $i18n.t('heroes.team.moreContributors') }}</span>
        </div>

    </div>

</template>

<script>

</script>

<style>
  .bigMarginTopOnly {
    margin-top: 100px;
    margin-bottom : 0px;
  }

  .communityWrapper {
      margin-top: 30px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: center;
  }

  .communityWrapper span {
      font-size: 18px;
      line-height: 30px;
  }

  .communityImg {
      width: 60px;
      margin: 20px 0 10px 0;
  }

  .contributorsSection {
      text-align: center;
  }

  .contributorWrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      text-align: center;
      margin-top: 20px;
      grid-gap: 30px;
      margin-left: 10%;
      margin-right: 10%;
      margin-bottom: 20px;
  }
  @media only screen and (max-width: 800px) {
      .contributorWrapper {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          text-align: center;
          margin-top: 20px;
          grid-gap: 30px;
          margin-left: 20px;
          margin-right: 20px;
          margin-bottom: 30px;
      }
  }
  @media only screen and (max-width: 600px) {
      .contributorWrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          text-align: center;
          margin-top: 20px;
          grid-gap: 30px;
          margin-left: 20px;
          margin-right: 20px;
          margin-bottom: 30px;
      }
  }

  .contributorsItem {
      font-size: 18px;
      margin-top: 30px;
      margin-bottom: 30px;
  }

</style>
