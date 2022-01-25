<template>

    <div id="get-started">

        <div id="getStartedSection" class="fullSection backgroundSection">
            <div class="textContainer">

                <h1 class="pageTitle bigMarginTop"> <center>Get Started</center></h1>

                <div id="getStartedContainer">
                    <div>
                        <img class="lazy" data-src="/public/assets/images/WebDollar-wallet.png" alt="WebDollar Wallet" title="WebDollar Wallet">
                        <h4>Get and backup your Wallet</h4>
                        <p>A WebDollar wallet is automatically created in your Browser.</p>
                        <p>Export it and keep it in a safe place.</p>
                        <p>You can use <a href="https://t.me/webdollar_tip_bot">Telegram Tip Bot</a> and connect it to your wallet.</p>
                    </div>
                    <div>
                        <img class="lazy" data-src="/public/assets/images/logo-coin.png" alt="Get WebDollar" title="Get WebDollar">
                        <h4>Get WebDollars</h4>
                        <p>Buy WebDollars from an <a href="/partners/exchanges">exchange</a>.</p>
                        <p>Or use <a href="https://t.me/webdollar_tip_bot">Telegram Tip Bot</a> top up feature.</p>
                        <p>Get tips and rewards from the <a href="/#community">Community</a> with <a href="https://t.me/WebDollar">Telegram</a>.</p>
                    </div>
                    <div>
                        <img class="lazy" data-src="/public/assets/images/WebDollar-ming.png" alt="WebDollar Staking" title="WebDollar Staking">
                        <h4>Stake WebDollars</h4>
                        <p>Stake from your browser with your wallet (from 100 WEBD).</p>
                        <p>Stake using <a href="https://t.me/webdollar_tip_bot">Telegram Tip Bot</a> (from 1 WEBD).</p>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<style>

    #getStartedContainer {
        display: grid;
        margin-left: 20px;
        margin-right: 20px;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 20px;
        text-align: center;
    }

    @media only screen and (max-width: 768px) {
        #getStartedContainer {
            grid-template-columns: 1fr;
        }
    }

    @media only screen and (max-width: 992px) {
        #getStartedContainer div {
            padding-bottom: 50px;
        }
    }

    #getStartedContainer img {
        width: 170px;
        height: 170px;
        margin-bottom: 20px;
        border-radius: 100%;
    }

    #getStartedContainer h4 {
        font-size: 24px;
        margin-bottom: 30px;
        height: 55px;
    }

    #getStartedContainer p {
        font-size: 18px;
        line-height: 28px;
    }

    @media only screen and (max-width : 831px) {
        #getStartedSection {
            height: auto!important;
        }
    }

    @media only screen and (max-width: 768px) {
        #getStartedSection .bigMarginTop {
            margin-bottom: 0;
            margin-top: 50px;
        }
    }

</style>
