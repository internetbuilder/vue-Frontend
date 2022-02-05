<template>

    <div id="" class="p2pNetwork">


        <div id="" class="createPoolSection">

            <h1 class="alignCenter">POOL Staking</h1>

            <div class="distributionContainer">

                <pool-statistics ref="poolStatistics"
                                 :poolName="poolName" :poolWebsite="poolWebsite"
                                 :poolURL="poolURL" :poolFee="poolFee"
                                 :poolServers="poolServers"
                                 :poolStatus="poolStatus"
                                 :poolHashes="poolHashes" :poolMinersOnline="poolMinersOnline"
                                 :poolBlocksConfirmed="poolBlocksConfirmed" :poolBlocksConfirmedAnPaid="poolBlocksConfirmedAndPaid" :poolBlocksUnconfirmed="poolBlocksUnconfirmed"
                                 :poolTimeRemaining="poolTimeRemaining" :poolBlocksBeingConfirmed="poolBlocksBeingConfirmed"> </pool-statistics>

            </div>


            <div class="dataStatisticsItem" v-for="(poolServer, index) in this.poolServers" :key="index">
                <span class="titlePool serverPool" >{{poolServer.name}}</span>
                <span class="minerData serverPoolStatus" >{{poolServer.connected ? 'connected - '  + (poolServer.established ? 'established' : 'not established' )  : 'not connected'}} </span>
            </div>

        </div>

    </div>

</template>

<script>

    import PoolStatistics from './components/Pool-Statistics.vue'
    import WebDollarEmitter from "../../../../../utils/WebDollarEmitter";

    export default{

        name: 'pool',

        components:{ PoolStatistics },

        data: () => {
            return {

                poolName: '',
                poolWebsite: '',
                poolURL: '',
                poolFee: '',
                poolServers: {},
                poolsList: {},
                poolsListSelected: '',
                poolStatus: '',

                poolHashes: 0,
                poolMinersOnline: 0,
                poolBlocksConfirmed: 0,
                poolBlocksConfirmedAndPaid: 0,
                poolBlocksUnconfirmed: 0,
                poolBlocksBeingConfirmed: 0,
                poolTimeRemaining: 0,

                subscribedPoolStatistics: false,
            }
        },

        methods: {

            async handleChangePoolFee(fee){
                this.poolFee = fee;

                if (typeof WebDollar.Blockchain.PoolManagement !== 'undefined') {
                    await WebDollar.Blockchain.PoolManagement.poolSettings.setPoolFee(this.poolFee/100);
                }
            },

            loadPoolData(){

                if (typeof WebDollar.Blockchain.PoolManagement === 'undefined') {
                    this.poolStatus = "not initialized";
                }
                else {

                    if (WebDollar.Blockchain.PoolManagement.poolInitialized) this.poolStatus = "Initialized";
                    if (WebDollar.Blockchain.PoolManagement.poolOpened) this.poolStatus = "Configured";
                    if (WebDollar.Blockchain.PoolManagement.poolStarted) this.poolStatus = "Started";

                    this.poolURL = WebDollar.Blockchain.PoolManagement.poolSettings.poolURL;

                    this.getPoolServers();

                    this.poolFee = Math.floor( WebDollar.Blockchain.PoolManagement.poolSettings.poolFee*100 , 2 );
                    this.poolReferralFee = Math.floor( WebDollar.Blockchain.PoolManagement.poolSettings.poolReferralFee*100 , 2 );
                    this.poolURL = WebDollar.Blockchain.PoolManagement.poolSettings.poolURL;
                    this.poolName = WebDollar.Blockchain.PoolManagement.poolSettings.poolName;
                    this.poolWebsite = WebDollar.Blockchain.PoolManagement.poolSettings.poolWebsite;

                    this.subscribePoolStatistics();
                }
            },

            getPoolServers(){
                let poolServers = WebDollar.Blockchain.PoolManagement.poolSettings.poolServers;
                this.poolServers = WebDollar.Applications.PoolsUtilsHelper.getPoolServersStatus(poolServers);
            },

            subscribePoolStatistics(){

                if (this.subscribedPoolStatistics) return ;

                this.subscribedPoolStatistics = true;

                this.poolHashes = WebDollar.Blockchain.PoolManagement.poolStatistics.poolHashes;
                this.poolMinersOnline = WebDollar.Blockchain.PoolManagement.poolStatistics.poolMinersOnline.length;
                this.poolBlocksConfirmed = WebDollar.Blockchain.PoolManagement.poolStatistics.poolBlocksConfirmed;
                this.poolBlocksConfirmedAndPaid = WebDollar.Blockchain.PoolManagement.poolStatistics.poolBlocksConfirmedAndPaid;
                this.poolBlocksUnconfirmed = WebDollar.Blockchain.PoolManagement.poolStatistics.poolBlocksUnconfirmed;
                this.poolBlocksBeingConfirmed = WebDollar.Blockchain.PoolManagement.poolStatistics.poolBlocksBeingConfirmed;
                this.poolTimeRemaining = WebDollar.Blockchain.PoolManagement.poolStatistics.poolTimeRemaining;

                WebDollar.Blockchain.PoolManagement.poolStatistics.emitter.on("pools/statistics/update",(data)=>{

                    this.poolHashes = data.poolHashes;
                    this.poolMinersOnline = data.poolMinersOnline.length;
                    this.poolBlocksConfirmed = data.poolBlocksConfirmed;
                    this.poolBlocksConfirmedAndPaid = data.poolBlocksConfirmedAndPaid;
                    this.poolBlocksUnconfirmed = data.poolBlocksUnconfirmed;
                    this.poolBlocksBeingConfirmed = data.poolBlocksBeingConfirmed;
                    this.poolTimeRemaining = data.poolTimeRemaining;

                });

            }

        },

        mounted() {
            const self = this;
            this.$nextTick(() => {
                WebDollarEmitter.on('pools/status',              self.loadPoolData);
                WebDollarEmitter.on('pools/settings',            self.loadPoolData);
                WebDollarEmitter.on('pools/servers-connections', self.getPoolServers);

                self.loadPoolData();
            });
        },

        destroyed() {
            WebDollarEmitter.off('pools/status',              this.loadPoolData);
            WebDollarEmitter.off('pools/settings',            this.loadPoolData);
            WebDollarEmitter.off('pools/servers-connections', this.getPoolServers);
        }
    }

</script>

<style>

    .serverPool{
        display: inline;
        padding-right: 20px ;
    }

    .serverPoolStatus{
        display: inline;
    }

    .twoButtons{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

</style>
