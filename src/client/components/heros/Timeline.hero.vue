
<template>

    <div id="timelineSection" >

        <span class='alignCenter pageTitle'>{{ $i18n.t('heroes.timeline.roadmap') }}</span>
        <h3>{{ $i18n.t('heroes.timeline.fastestDevelopmentOfBrowserBasedCrypto') }}</h3>

        <div id="timeline" class="backgroundSection">
            <div class="sectionCenteredWidth">
                <div class="main-timeline">
                    <div class="timeline">
                        <div class="timeline-icon"><i class="fa fa-file-text2"></i></div>
                        <span class="year">{{ $i18n.t('heroes.timeline.q42017') }}</span>
                        <div class="timeline-content">
                            <h5 class="title">{{ $i18n.t('heroes.timeline.whitePaperDraft') }}</h5>
                            <p class="description">
                                {{ $i18n.t('heroes.timeline.whitePaperDraftDescription') }}
                            </p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline-icon"><i class="fa fa-trophy"></i></div>
                        <span class="year">{{ $i18n.t('heroes.timeline.q42017') }}</span>
                        <div class="timeline-content">
                            <h5 class="title">{{ $i18n.t('heroes.timeline.techHubJSHackathon') }}</h5>
                            <p class="description">
                                {{ $i18n.t('heroes.timeline.techHubJSHackathonDescription') }}
                            </p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline-icon"><i class="fa fa-earth"></i></div>
                        <span class="year">{{ $i18n.t('heroes.timeline.q42017') }}</span>
                        <div class="timeline-content">
                            <h5 class="title">{{ $i18n.t('heroes.timeline.p2pAndMiniBlockchain') }}</h5>
                            <p class="description">
                                {{ $i18n.t('heroes.timeline.p2pAndMiniBlockchainDescription') }}
                            </p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline-icon"><i class="fa fa-flask"></i></div>
                        <span class="year">{{ $i18n.t('heroes.timeline.q12018') }}</span>
                        <div class="timeline-content">
                            <h5 class="title">{{ $i18n.t('heroes.timeline.launchTestNet') }}</h5>
                            <p class="description">
                                {{ $i18n.t('heroes.timeline.launchTestNetDescription') }}
                            </p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline-icon"><i class="fas fa-trophy"></i></div>
                        <span class="year">{{ $i18n.t('heroes.timeline.q12018') }}</span>
                        <div class="timeline-content">
                            <h5 class="title">{{ $i18n.t('heroes.timeline.buildInBountyProgram') }}</h5>
                            <p class="description">
                                {{ $i18n.t('heroes.timeline.buildInBountyProgramDescription') }}
                            </p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline-icon"><i class="fa fa-rocket"></i></div>
                        <span class="year">{{ $i18n.t('heroes.timeline.q22018') }}</span>
                        <div class="timeline-content">
                            <h5 class="title">{{ $i18n.t('heroes.timeline.securityAndLanchMainNet') }}</h5>
                            <p class="description">
                                {{ $i18n.t('heroes.timeline.securityAndLanchMainNetDescription') }}
                            </p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline-icon"><i class="fas fa-hammer"></i></div>
                        <span class="year">{{ $i18n.t('heroes.timeline.q32018') }}</span>
                        <div class="timeline-content">
                            <h5 class="title">{{ $i18n.t('heroes.timeline.miningPoolsAndReferralSystem') }}</h5>
                            <p class="description">
                                {{ $i18n.t('heroes.timeline.miningPoolsAndReferralSystemDescription') }}
                            </p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline-icon"><i class="fa fa-rocket"></i></div>
                        <span class="year">{{ $i18n.t('heroes.timeline.q32018') }}</span>
                        <div class="timeline-content">
                            <h5 class="title">{{ $i18n.t('heroes.timeline.offlineTransactions') }}</h5>
                            <p class="description">
                                {{ $i18n.t('heroes.timeline.offlineTransactionsDescription') }}
                            </p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline-icon"><i class="fa fa-rocket"></i></div>
                        <span class="year">{{ $i18n.t('heroes.timeline.q12019') }}</span>
                        <div class="timeline-content">
                            <h5 class="title">{{ $i18n.t('heroes.timeline.hybridMining') }}</h5>
                            <p class="description">
                                {{ $i18n.t('heroes.timeline.hybridMining6633') }}
                            </p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline-icon"><i class="fa fa-coin-dollar"></i></div>
                        <span class="year">{{ $i18n.t('heroes.timeline.q12019') }}</span>
                        <div class="timeline-content">
                            <h5 class="title">{{ $i18n.t('heroes.timeline.exchangeListing') }}</h5>
                            <p class="description">
                                {{ $i18n.t('heroes.timeline.exchangeListingDescription') }}
                            </p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline-icon"><i class="fa fa-rocket"></i></div>
                        <span class="year">{{ $i18n.t('heroes.timeline.q32020') }}</span>
                        <div class="timeline-content">
                            <h5 class="title">{{ $i18n.t('heroes.timeline.hybridMining') }}</h5>
                            <p class="description">
                                {{ $i18n.t('heroes.timeline.hybridMining9010') }}
                            </p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline-icon"><i class="fa fa-rocket"></i></div>
                        <span class="year">{{ $i18n.t('heroes.timeline.q32021') }}</span>
                        <div class="timeline-content">
                            <h5 class="title">{{ $i18n.t('heroes.timeline.pos100') }}</h5>
                            <p class="description">
                                {{ $i18n.t('heroes.timeline.pos100Description') }}
                            </p>
                        </div>
                    </div>

                    <div class="timeline timelineUnfinishedMilestones">
                        <div class="timeline-icon"><i class="fa fa-gift"></i></div>
                        <span class="year">{{ $i18n.t('heroes.timeline.ongoing') }}</span>
                        <div class="timeline-content">
                            <h5 class="title">{{ $i18n.t('heroes.timeline.evangelismAndMarketing') }}</h5>
                            <p class="description">
                                {{ $i18n.t('heroes.timeline.evangelismAndMarketingDescription') }}
                            </p>
                        </div>
                    </div>
                    <div class="timeline timelineUnfinishedMilestones">
                        <div class="timeline-icon"><i class="fa fa-code"></i></div>
                        <span class="year">{{ $i18n.t('heroes.timeline.planned') }}</span>
                        <div class="timeline-content">
                            <h5 class="title">{{ $i18n.t('heroes.timeline.webdollar20') }}</h5>
                            <p class="description">
                                {{ $i18n.t('heroes.timeline.webdollar20Description') }}
                            </p>
                        </div>
                    </div>
                    <div class="timeline timelineUnfinishedMilestones">
                        <div class="timeline-icon"><i class="fa fa-coin-dollar"></i></div>
                        <span class="year">{{ $i18n.t('heroes.timeline.planned') }}</span>
                        <div class="timeline-content">
                            <h5 class="title">{{ $i18n.t('heroes.timeline.integrationWithPandoraPay') }}</h5>
                            <p class="description">
                                {{ $i18n.t('heroes.timeline.integrationWithPandoraPayDescription') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>
