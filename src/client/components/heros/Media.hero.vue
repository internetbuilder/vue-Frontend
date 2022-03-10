<template>

    <div id="knowUsSection" class="backgroundSection">

        <h1 class="alignCenter">{{ $i18n.t('heroes.media.media') }}</h1>

        <div id="mediaContainer">

            <div class="mediaContentBox">
                <a href="https://www.youtube.com/watch?v=AO67T4jip3k" :title="$i18n.t('heroes.media.wedollarPresentationInSaudiArabia')" rel="noopener" target="_blank">

                    <img :alt="$i18n.t('heroes.media.alexandruBudisteanuSaudiArabia')" :title="$i18n.t('heroes.media.alexandruBudisteanuSaudiArabia')" src="/public/assets/images/media/webdollar-alexandru-budisteanu-human-machine-future.jpg">
                    <h3>{{ $i18n.t('heroes.media.wedollarPresentationInSaudiArabia') }}</h3>
                    <span>{{ $i18n.t('heroes.media.humanMachineFuture') }}</span>

                </a>
            </div>

            <div class="mediaContentBox">
                <a href="https://web.ep.streamovations.be/index.php/event/stream/20180602-1200-eye22" :title="$i18n.t('heroes.media.technologySummitInStrasbourg')" rel="noopener" target="_blank">

                    <img :alt="$i18n.t('heroes.media.webDollarEUParliamentBudisteanu')" :title="$i18n.t('heroes.media.webDollarEUParliamentBudisteanu')" src="/public/assets/images/media/WebDollar-Eu-Parliament.jpeg">
                    <h3>{{ $i18n.t('heroes.media.technologySummitInStrasbourg') }}</h3>
                    <span>{{ $i18n.t('heroes.media.ueParliament') }}</span>

                </a>
            </div>

            <div class="mediaContentBox">
                <a href="https://www.facebook.com/webdollar.io/videos/131800187541413/" rel="noopener" :title="$i18n.t('heroes.media.cryptoEventPresentation')" target="_blank">

                    <img :alt="$i18n.t('heroes.media.webDollarOmegaCryptoPresentation')" :title="$i18n.t('heroes.media.webDollarOmegaCryptoPresentation')" src="/public/assets/images/media/omega.jpg">
                    <h3>{{ $i18n.t('heroes.media.technologyPresentation') }}</h3>
                    <span>{{ $i18n.t('heroes.media.omegaCrypto') }}</span>

                </a>
            </div>

            <div class="mediaContentBox">
                <a href="https://www.youtube.com/watch?v=6YAEtqtL_So" :title="$i18n.t('heroes.media.webDollarAwardWinningPresentation')" rel="noopener" target="_blank">

                    <img :alt="$i18n.t('heroes.media.webDollarAlexandruBudisteanu')" :title="$i18n.t('heroes.media.webDollarAlexandruBudisteanu')" src="/public/assets/images/media/webdollar-alexandru-budisteanu-d10e.jpg">
                    <h3>{{ $i18n.t('heroes.media.webDollarAwardWinningPresentation') }}</h3>
                    <span>d10e</span>

                </a>
            </div>

            <div class="mediaContentBox">
                <a href="https://www.digi24.ro/stiri/sci-tech/lumea-digitala/prima-moneda-virtuala-romaneasca-860158" :title="$i18n.t('heroes.media.founderOfTheRomanianCryptocurrency')" rel="noopener" target="_blank">

                    <img :alt="$i18n.t('heroes.media.webDollarAlexandruPanait')" :title="$i18n.t('heroes.media.webDollarAlexandruPanait')" src="/public/assets/images/media/webdollar-alexandru-panait-digi24.jpg">
                    <h3>{{ $i18n.t('heroes.media.firstRomanianCryptocurrencyInterview') }}</h3>
                    <span>Digi 24 TV</span>

                </a>
            </div>

            <div class="mediaContentBox">
                <a href="https://www.startupcafe.ro/idei-si-antreprenori/bitcoin-romanesc-webdollar-castigi-bani-pierzi-timp-net.htm" :title="$i18n.t('heroes.media.developersTeam')" rel="noopener" target="_blank">

                    <img :alt="$i18n.t('heroes.media.webDollarTeamAlexandruPanaitCosminOpreaAdrianStratulat')" :title="$i18n.t('heroes.media.webDollarTeamAlexandruPanaitCosminOpreaAdrianStratulat')" src="/public/assets/images/media/webdollar-alexandru-panait-adrian-stratulat-oprea-cosmin.jpg">
                    <h3>{{ $i18n.t('heroes.media.webDollarConceptInterview') }}</h3>
                    <span>Startup cafe</span>

                </a>
            </div>

            <div class="mediaContentBox">
                <a href="https://youtu.be/vOt4HmL36gg" :title="$i18n.t('heroes.media.founderCryptocurrencyInterview')" rel="noopener" target="_blank">

                    <img :alt="$i18n.t('heroes.media.webDollarAlexandruBudisteanu')" :title="$i18n.t('heroes.media.webDollarAlexandruBudisteanu')" src="/public/assets/images/media/webdollar-alexandru-budisteanu-kanal33.jpg">
                    <h3>{{ $i18n.t('heroes.media.interviewWithBudisteanu') }}</h3>
                    <span>Kanal 33</span>

                </a>
            </div>

            <div class="mediaContentBox">
                <a href="https://medium.com/@adrianmihaistratulat/why-webdollar-can-be-everything-that-bitcoin-failed-to-be-49ad5c7d51ed" :title="$i18n.t('heroes.media.bitcoinAlternative')" rel="noopener" target="_blank">

                    <img :alt="$i18n.t('heroes.media.bitcoinAlternative')" :title="$i18n.t('heroes.media.bitcoinAlternative')" src="/public/assets/images/media/medium1.jpg">
                    <h3>{{ $i18n.t('heroes.media.whyWebDollarCanBeEverythingBitcoinFailedToBe') }}</h3>
                    <span>Medium</span>

                </a>
            </div>

            <div class="mediaContentBox">
                <a href="https://medium.com/@adrianmihaistratulat/not-another-ico-56cd4c6fe0c4" rel="noopener" :title="$i18n.t('heroes.media.cryptocurrencyWithoutICO')" target="_blank">

                    <img :alt="$i18n.t('heroes.media.cryptocurrencyWithoutICO')" :title="$i18n.t('heroes.media.cryptocurrencyWithoutICO')" src="/public/assets/images/media/icofail.jpg">
                    <h3>{{ $i18n.t('heroes.media.whyWebDollarWillNotHaveAnICO') }}</h3>
                    <span>Medium</span>

                </a>
            </div>

            <div class="mediaContentBox">
                <a href="https://medium.com/@adrianmihaistratulat/how-webdollar-will-reinvent-mining-aafde32d943" rel="noopener" :title="$i18n.t('heroes.media.reinventingCryptocurrencyMining')" target="_blank">

                    <img :alt="$i18n.t('heroes.media.reinventingCryptocurrencyMining')" :title="$i18n.t('heroes.media.reinventingCryptocurrencyMining')" src="/public/assets/images/media/mining.jpg">
                    <h3>{{ $i18n.t('heroes.media.howWebDollarIsReinventingMining') }}</h3>
                    <span>Medium</span>

                </a>
            </div>

            <div class="mediaContentBox">
                <a href="" rel="noopener" target="_blank">

                    <img alt="community meetup" title="community meetup" src="/public/assets/images/media/meetup.jpg">
                    <h3>{{ $i18n.t('heroes.media.firstWebDollarCommunityMeetup') }}</h3>
                    <span>{{ $i18n.t('heroes.media.romaniaBucharest') }}</span>

                </a>
            </div>

            <div class="mediaContentBox">
                <a href="https://www.facebook.com/webdollar.io/videos/127222761332489/" rel="noopener" :title="$i18n.t('heroes.media.videoTechnicalPresentation')" target="_blank">

                    <img :alt="$i18n.t('heroes.media.videoTechnicalPresentation')" :title="$i18n.t('heroes.media.videoTechnicalPresentation')" src="/public/assets/images/media/techhub.jpg">
                    <h3>{{ $i18n.t('heroes.media.videoTechnicalPresentation') }}</h3>
                    <span>Javascript Bucharest TechHub</span>

                </a>
            </div>

            <div class="mediaContentBox">
                <a href="https://medium.com/@adrianmihaistratulat/get-ready-for-the-pool-party-d497049c6db4" rel="noopener" :title="$i18n.t('heroes.media.poolMining')" target="_blank">

                    <img :alt="$i18n.t('heroes.media.poolMining')" :title="$i18n.t('heroes.media.poolMining')" src="/public/assets/images/media/poolparty.jpeg">
                    <h3>{{ $i18n.t('heroes.media.getReadyForThePoolParty') }}</h3>
                    <span>Medium</span>

                </a>
            </div>

            <div class="mediaContentBox">
                <a href="https://youtu.be/oPP-b4cFFqw" :title="$i18n.t('heroes.media.alexandruPanaitAppearanceOnTVAntena3')" rel="noopener" target="_blank">

                    <img :alt="$i18n.t('heroes.media.alexandruPanaitAppearanceOnTVAntena3')" :title="$i18n.t('heroes.media.alexandruPanaitAppearanceOnTVAntena3')" src="/public/assets/images/media/webdollar-alexandru-panait-antena3.jpg">
                    <h3>{{ $i18n.t('heroes.media.firstRomanianCryptocurrency') }}</h3>
                    <span>Antena 3</span>

                </a>
            </div>

            <div class="mediaContentBox">
                <a href="https://aipss.ro/digitalizarea-romaniei/" :title="$i18n.t('heroes.media.romanianDigitization')" rel="noopener" target="_blank">

                    <img :alt="$i18n.t('heroes.media.alexandruPanait')" :title="$i18n.t('heroes.media.alexandruPanait')" src="https://aipss.ro/wp-content/uploads/2020/03/AIPSS_Bluegreen2.png">
                    <h3>{{ $i18n.t('heroes.media.romanianDigitization') }}</h3>
                    <span>AIPSS</span>

                </a>
            </div>

        </div>

    </div>

</template>
