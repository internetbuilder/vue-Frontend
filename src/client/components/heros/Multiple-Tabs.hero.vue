<template>

    <div id="browserError" class="verticalAlignMiddle">

        <h3>{{ $i18n.t('heroes.multipleTabs.cantMineOnMultipleTabs') }}</h3>

        <h4>{{ $i18n.t('heroes.multipleTabs.pleaseMakeSureNotMiningOnOtherTab') }}</h4>

        <img data-src="/public/assets/images/darkBrowser.png" alt="webDollar-browser" title="webDollar-browser" class="browserPng lazy">

    </div>

</template>

<style>

    #browserError h3{
        font-size: 30px;
        color: #c54444;
        line-height: 35px;
        text-align: center;
        text-transform: uppercase;
        width: 90%!important;
        margin: 0 auto;
        margin-bottom: 10px;
    }

    #browserError h4{
        text-align: center;
        color: #fec02c;
        font-size: 18px;
        width: 90%!important;
        margin: 0 auto;
        margin-bottom: 20px;
    }

    #browserError{
        position: absolute;
    }

    .browserPng{
        margin: 0 auto;
        display: block;
        max-width: 90%;
    }

</style>