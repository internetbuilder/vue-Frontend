<template>

    <div id="coinDistributionSection" class="fullSection">

        <div class="verticalAlignMiddle">

            <span class="pageTitle alignCenter bigMarginBottom">{{ $i18n.t('heroes.blockchainDistribution.coinSupply') }}</span>

            <div class="distributionContainer maxWidthSection">

                <div class="distributionGrid">
                    <div class="webdCoin spinCoin">
                        <img data-src="/public/assets/images/logo-coin.png" alt="webDollar logo black" title="webDollar black logo" class="coinLogo lazy">
                    </div>
                </div>
                <div class="distributionGrid">

                    <div class="stats">
                        <div>
                            <span v-show="!this.loaded" class="value">
                                <loading-spinner />
                            </span>
                            <span v-show="this.loaded" class="value">
                                {{this.distributionAmount}}
                                <span class='networkDifficulty'>{{this.getNumberSign(this.totalAmountCoins)}}</span>
                            </span>
                            <span class="description">{{ $i18n.t('heroes.blockchainDistribution.currentDistribution') }}</span>
                        </div>
                        <div>
                            <span v-show="!this.loaded" class="value">
                                 <loading-spinner />
                            </span>
                            <span v-show="this.loaded" class="value">
                                {{this.distributionBlocks}}
                            </span>
                            <span class="description">{{ $i18n.t('heroes.blockchainDistribution.minedBlocks') }}</span>
                        </div>
                        <div>
                            <span v-show="!this.loaded" class="value">
                                <loading-spinner />
                            </span>
                            <span v-show="this.loaded" class="value">
                                ~{{this.getNetworkHashrate}}
                                <span class='networkDifficulty'>{{this.getNetworkHashrateSign}}</span>
                            </span>
                            <span class="description">{{ $i18n.t('heroes.blockchainDistribution.stakingCoins') }}</span>
                        </div>
                    </div>

                    <div id="myRound">
                        <div id="myRoundBar" :style="{width: this.roundBarValue===100 ? 0 : this.roundBarValue + '%' }"></div>
                    </div>

                    <div id="myProgress">
                        <div id="myBar" :style="{width: this.totalAmountCoins / this.distributionProgressBarMax * 100  + '%' }"></div>
                    </div>
                    <span class="minValue">{{this.distributionProgressBarMinString}} WEBD</span>
                    <span class="maxValue">{{this.distributionProgressBarMaxString}} WEBD</span>

                  <div class="footer" v-show="this.currentPriceLoaded">
                    <div>
                      <span class="value">{{currentPriceSymbol}} {{currentPrice}}</span>
                      <span class="description">{{ $i18n.t('heroes.blockchainDistribution.currentPrice') }}</span>
                    </div>
                    <div>
                      <span class="value">{{change24hrSign}}{{change24hr}} %</span>
                      <span class="description">{{ $i18n.t('heroes.blockchainDistribution.change24hr') }}</span>
                    </div>
                    <div class="hideOnMobile">
                      <span class="value">{{volume24hr}}</span>
                      <span class="description">{{ $i18n.t('heroes.blockchainDistribution.volume24hr') }}</span>
                    </div>
                    <div class="hideOnMobile">
                      <span class="value">{{marketCap}}</span>
                      <span class="description">{{ $i18n.t('heroes.blockchainDistribution.marketCap') }}</span>
                    </div>
                    <div class="bottom-gutter">
                      <div>
                      <span class="description">{{ $i18n.t('heroes.blockchainDistribution.allPricesShownIn') }} USD</span>
                      <span class="description-smaller"><sup>*</sup>{{ $i18n.t('heroes.blockchainDistribution.poweredCoinAPI') }}</span>
                      <span class="description-smaller">{{ $i18n.t('heroes.blockchainDistribution.lastUpdatedAt') }} {{lastUpdatedCoinAPI}}</span>
                      </div>
                    </div>
                  </div>

                </div>

            </div>

        </div>

    </div>
</template>

<script>

    import LoadingSpinner   from './../UI/elements/Loading-Spinner.vue';
    import Utils            from './../../../utils/util-functions';
    import WebDollarEmitter from './../../../utils/WebDollarEmitter';
    import moment from 'moment';

    const axios = require('axios').default;

    export default{

        name: "BlockchainDistribution",

        components:{
            LoadingSpinner,
        },

        data() {
            return {
                totalAmountCoins: 0,
                blocksLength: 0,
                blocksLastRoundChange: 0,
                roundJustChanged: null,
                loaded:false,
                isPos: false,
                roundBarValue: 0,

                distributionProgressBarMax : 42000000000,
                distributionProgressBarMin : 0,

                networkHashRate: 0,
                connected: false,
                // price will be pulled by Coinmarketcap.
                coinInfo: {
                  price: 0,
                  currency: "usd",
                  symbol: "$",
                  marketCap: 0,
                  volume24h: 0,
                  change24h: 0,
                  lastUpdatedAt: 0,
                  loaded: false,
                  timer: '',
                  availableCurrencies: [],
                },
                // For symbols with a textual representation, map here. Otherwise use the ticker.
                symbols: {
                  usd: '$',
                }
            }
        },

        computed:{
            distributionProgressBarMinString(){
                return this.formatMoneyNumber(this.distributionProgressBarMin, 0)
            },

            distributionProgressBarMaxString(){
                return this.formatMoneyNumber(this.distributionProgressBarMax, 0)
            },
            distributionAmount(){
                return Utils.processHashesPoW(this.totalAmountCoins)
            },

            distributionBlocks(){
                return this.formatMoneyNumber(this.blocksLength,0)
            },

            getNetworkHashrate(){
                return Utils.showHashes(this.networkHashRate,this.isPos,this.roundJustChanged,this.totalAmountCoins);
            },

            getNetworkHashrateSign(){
                return Utils.showHashesSign(this.networkHashRate,this.isPos,this.roundJustChanged);
            },

            selectedCurrency() {
              return this.coinInfo.currency;
            },

            currentPriceLoaded() {
              return this.coinInfo.loaded;
            },

            currentPriceSymbol() {
              return this.coinInfo.symbol;
            },

            currentPrice() {
              return this.coinInfo.price;
            },

            volume24hr() {
              return this.coinInfo.volume24h ? Math.round(this.coinInfo.volume24h).toLocaleString() : 0;
            },

            change24hr() {
              return this.coinInfo.change24h ? this.coinInfo.change24h.toFixed(2).toLocaleString() : 0;
            },

            change24hrSign() {
              // if it's down, coinmarketcap adds a '-', so when it's up, insert a '+' for clarity.
              return this.change24hr > 0 ? '+' : '';
            },

            marketCap() {
              return this.coinInfo.marketCap.toLocaleString();
            },

            lastUpdatedCoinAPI() {
              moment.locale(this.$store.state.settings.language)
              // date and time w/ seconds in current browser locale.
              return moment(this.coinInfo.lastUpdatedAt).format('L LTS');
            },

            changeRound(){
                if (this.isPos)
                {
                    if (this.roundJustChanged)
                        return false;
                    else
                        return true;
                } else
                {
                    if (this.roundJustChanged)
                        return true;
                    else
                        return false;
                }
            }

        },

        mounted() {
            const self = this;

            this.retrievePriceFromAPI();

            this.$nextTick(() => {
                if (WebDollar.Blockchain.synchronized) {

                    self.verifyIfContainData(WebDollar.Blockchain.Chain.accountantTree.calculateNodeCoins() / 10000 );

                    self.blocksLength    = WebDollar.Blockchain.Chain.blocks.length;
                    self.networkHashRate = WebDollar.Blockchain.Chain.blocks.networkHashRate;
                }

                WebDollarEmitter.on('blockchain/blocks-count-changed',  self._blockchainBlocksCountChanged);
                WebDollarEmitter.on('blockchain/new-network-hash-rate', self._blockchainNewNetworkHashRate);
            });
        },

        created() {
          this.initiateCoinAPIRefreshTimer();
        },

        destroyed() {
            WebDollarEmitter.off('blockchain/blocks-count-changed',  this._blockchainBlocksCountChanged);
            WebDollarEmitter.off('blockchain/new-network-hash-rate', this._blockchainNewNetworkHashRate);

            this.clearCoinAPIRefreshTimer();
        },

        watch: {
              selectedCurrency() {
                this.retrievePriceFromAPI();
              }
          },

        methods: {
            _blockchainBlocksCountChanged(blocksLength) {
                this.verifyIfContainData( WebDollar.Blockchain.Chain.accountantTree.calculateNodeCoins() / 10000 );
                this.blocksLength = blocksLength;

                if (WebDollar.Blockchain.blockchainGenesis.isPoSActivated(blocksLength)) {
                    if (!this.isPos) {
                        if (this.roundJustChanged !== null && this.blocksLength % 10 === 0) {
                            this.roundJustChanged=true;
                        }

                        if (this.blocksLastRoundChange!==0) {
                            this.blocksLastRoundChange = this.blocksLength;
                        }
                    } else {
                        if (this.blocksLength % 10 !== 0) {
                            this.roundJustChanged=false;
                        }
                    }

                    this.isPos = true;

                }
                else {
                    if (this.isPos) {
                        if (this.roundJustChanged !== null && this.blocksLength % 10 === 0) {
                            this.roundJustChanged=true;
                        }

                        if(this.blocksLastRoundChange!==0) {
                            this.blocksLastRoundChange = this.blocksLength;
                        }
                    } else {
                        if (this.blocksLength%10!==0) {
                            this.roundJustChanged=false;
                        }
                    }

                    this.isPos = false;
                }

                if (this.blocksLastRoundChange===0) {
                    this.blocksLastRoundChange = this.blocksLength - this.blocksLength%10;

                    if (WebDollar.Blockchain.blockchainGenesis.isPoSActivated(blocksLength - 10)) {
                        this.blocksLastRoundChange -= 10;
                    }
                }

                if (this.roundJustChanged)
                    this.roundBarValue = 0;
                else
                    this.roundBarValue = (this.blocksLength-this.blocksLastRoundChange) / (this.isPos ? 20 : 10) * 100;

                if (this.roundJustChanged === null && this.blocksLength%10===0)
                    this.roundBarValue = 0;

                if (this.isPos)
                    this.roundBarValue+=1;
                else
                    this.roundBarValue-=1;

                console.log("RoundBar - hashrate",this.networkHashRate);
                console.log("RoundBar - blocksLastRoundChange",this.blocksLastRoundChange);
                console.log("RoundBar - blocksLength",this.blocksLength);
                console.log("RoundBar - isPos",this.isPos);
                console.log("RoundBar - roundJustChanged",this.roundJustChanged);
            },

            _blockchainNewNetworkHashRate(networkHashRate) {
                if (networkHashRate !== 0 && !this.roundJustChanged) {
                    this.networkHashRate = networkHashRate;
                }
            },

            formatMoneyNumber(n, decimals=2) {
                if (typeof n === 'undefined') return '';

                return n.toFixed(decimals).replace(/./g, function(c, i, a) {
                    return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
                });
            },

            verifyIfContainData(amount){

                this.totalAmountCoins = amount;

                if (amount!==0)
                    this.loaded=true;
                else
                    this.loaded = false;

            },

            getNumberSign(value){
                return Utils.processHashesSignPoW(value);
            },

            updateCoinInfoDataFromAPIResponse(apiResponse){
                try {
                    const webdollarUSDInfoData = apiResponse.quote.USD
                    const currency = "usd";

                    this.coinInfo.loaded = true;

                    this.coinInfo.currency = currency
                    this.coinInfo.price = parseFloat(webdollarUSDInfoData.price.toFixed(8));
                    this.coinInfo.marketCap = apiResponse.self_reported_market_cap;
                    this.coinInfo.volume24h = webdollarUSDInfoData.volume_24h;
                    this.coinInfo.change24h = webdollarUSDInfoData.percent_change_24h;
                    this.coinInfo.lastUpdatedAt = new Date(webdollarUSDInfoData.last_updated).getTime();
                    this.coinInfo.symbol = this.symbols[currency] || currency.toLocaleUpperCase();
                } catch (error) {
                    console.log(error)
                    return false
                }
                return true
            },

            retrievePriceFromAPI() {

                console.log("retrievePriceFromAPI")
                // Manage cached data to avoid API call for coin info update
                const coinInfoExpirationTimestamp = localStorage.getItem("coinInfoExpirationTimestamp") || 0

                if (Date.now() <= coinInfoExpirationTimestamp) {
                    const webdollar = localStorage.getItem("coinInfoApiResponse") || "{}"
                    if (this.updateCoinInfoDataFromAPIResponse(JSON.parse(webdollar))) {
                        return
                    }
                }

                return axios
                  .get(`https://webdollar.network/api/coinmarketcap/quotes/latest`)
                  .then(response => {
                    const webdollarData = response.data.data.WEBD;
                    this.updateCoinInfoDataFromAPIResponse(webdollarData);

                    // Cache response and expiration in local storage using cache-control max age value and last update date
                    const cacheControl = response.headers['cache-control'] || "";
                    const cacheControlMaxAgeParse = cacheControl.match(/max-age=([0-9]*)/);
                    const maxAge = cacheControlMaxAgeParse.length > 1 ? Number(cacheControlMaxAgeParse[1]) : 86400;
                    const apiResponseExpiration = this.coinInfo.lastUpdatedAt + maxAge * 1000;
                    localStorage.setItem("coinInfoExpirationTimestamp", apiResponseExpiration);
                    localStorage.setItem("coinInfoApiResponse", JSON.stringify(webdollarData));
                  });
            },

            initiateCoinAPIRefreshTimer() {
              this.coinInfo.timer = setInterval(this.retrievePriceFromAPI, 3600 * 1000 /* Refresh every hour */);
            },

            clearCoinAPIRefreshTimer() {
              clearInterval(this.coinInfo.timer);
            },

        }
    }
</script>
