<template>

    <div id="what-is-WebDollar">

        <div id="aboutSection" class="fullSection backgroundSection">
            <div class="verticalAlignMiddle sectionCenteredWidth">

                <span class="pageTitle alignCenter titleMarginBottom removeBackground aboutTitle">{{ $i18n.t('heroes.about.whatIsWebdollar') }}</span>
                <div id="whatContainer">
                    <div>
                        <img class="lazy" data-src="/public/assets/images/WebDollar-ming.png" :alt="$i18n.t('heroes.about.startStakingInSecondsTitle')" :title="$i18n.t('heroes.about.startStakingInSecondsTitle')">
                        <h4>{{ $i18n.t('heroes.about.startStakingInSecondsTitle') }}</h4>
                        <p>{{ $i18n.t('heroes.about.startStakingInSecondsDetails') }}</p>
                    </div>
                    <div>
                        <img class="lazy" data-src="/public/assets/images/WebDollar-Security.png" :alt="$i18n.t('heroes.about.secureAndPrivateTitle')" :title="$i18n.t('heroes.about.secureAndPrivateTitle')">
                        <h4>{{ $i18n.t('heroes.about.secureAndPrivateTitle') }}</h4>
                        <p>{{ $i18n.t('heroes.about.secureAndPrivateDetails') }}</p>
                    </div>
                    <div>
                        <img class="lazy" data-src="/public/assets/images/WebDollar-wallet.png" :alt="$i18n.t('heroes.about.simpleWebPaymentsTitle')" :title="$i18n.t('heroes.about.simpleWebPaymentsTitle')">
                        <h4>{{ $i18n.t('heroes.about.simpleWebPaymentsTitle') }}</h4>
                        <p>{{ $i18n.t('heroes.about.simpleWebPaymentsDetails') }}</p>
                    </div>
                </div>

            </div>
        </div>

    </div>

</template>
