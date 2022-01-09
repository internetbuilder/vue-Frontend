<template>

    <div id="community">

        <div id="teamSection">

            <div class="">

                <h1 class="pageTitle bigMarginTop"> <center>COMMUNITY</center></h1>

                <h4>
                    <center>
                        Just like Bitcoin, there is <strong>NO OFFICIAL team</strong> and everybody is welcomed to contribute. <br/> The project is decentralized and maintained by a community.
                    </center>
                </h4>

                <h4>
                    <center>
                        Join the WebDollar community or ask us questions on <a href="https://t.me/WebDollar" rel="noopener" target="_blank">Telegram</a>.
                    </center>
                </h4>

                <span class="pageTitle alignCenter titleMarginBottom removeBackground">Follow us</span>

                <div class="socialLinksNewsletter">
                    <a href="https://facebook.com/webdollar.io" rel="noopener" target="_blank" class="linkIconSocial">
                        <img data-src="/public/assets/images/SocialMedia/facebook_white.png" alt="Facebook CryptoCurrency WebDollar" title="Facebook CryptoCurrency WebDollar" class="linkIconSocialNormal lazy">
                        <img data-src="/public/assets/images/SocialMedia/facebook_yellow.png" alt="Facebook CryptoCurrency WebDollar" title="Facebook CryptoCurrency WebDollar" class="linkIconSocialHover lazy">
                    </a>
                    <a href="https://twitter.com/webdollar_io" rel="noopener" target="_blank" class="linkIconSocial">
                        <img data-src="/public/assets/images/SocialMedia/twitter_white.png" alt="Twitter WebDollar" title="Twitter WebDollar" class="linkIconSocialNormal lazy">
                        <img data-src="/public/assets/images/SocialMedia/twitter_yellow.png" alt="Twitter WebDollar" title="Twitter WebDollar" class="linkIconSocialHover lazy">
                    </a>
                    <a href="https://t.me/WebDollar" rel="noopener" target="_blank" class="linkIconSocial">
                        <img data-src="/public/assets/images/SocialMedia/telegram_white.png" alt="Telegram WebDollar" title="Telegram WebDollar" class="linkIconSocialNormal lazy">
                        <img data-src="/public/assets/images/SocialMedia/telegram_yellow.png" alt="Telegram WebDollar" title="Telegram WebDollar" class="linkIconSocialHover lazy">
                    </a>
                    <a href="https://github.com/WebDollar" rel="noopener" target="_blank" class="linkIconSocial">
                        <img data-src="/public/assets/images/SocialMedia/github_white.png" alt="Github CryptoCurrency WebDollar" title="Github CryptoCurrency WebDollar" class="linkIconSocialNormal lazy">
                        <img data-src="/public/assets/images/SocialMedia/github_yellow.png" alt="Github CryptoCurrency WebDollar" title="Github CryptoCurrency WebDollar" class="linkIconSocialHover lazy">
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

                <div id="newsletterContainer">

                    <label for="newsletterInput">
                        <span class="newsletterText">Subscribe to our newsletter for the latest news</span>
                    </label>

                    <div v-if="this.success === ''" >
                        <input v-model="email" placeholder="Email" id="newsletterInput" />

                        <span class="error">
                            {{this.error}}
                        </span>

                        <span class="websiteButton" @click="subscribeEmail">Subscribe</span>
                    </div>

                    <div class="success" v-if="this.success !== ''">
                        {{this.success}}
                    </div>

                </div>

                <h1 class="pageTitle bigMarginTop"> <center>Creators</center></h1>

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
                        <span class="teamRole">Founder & Protocol Dev.</span>
                        <p class="description">
                            Alexandru is a Forbes Europe 30 under 30 nominee in industry category. In 2013, he was nominated by Time Magazine as one of the most influential teens of the world. MIT named an asteroid with his name.</a>
                        </p>
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
                        <span class="teamRole">General Manager & Platform Dev.</span>
                        <p>Alexandru is a young entrepreneur interested in technology and business. Founder of a digitization movement in Romania, called <a href="https://e-primariata.ro/auth/login-page">E-PrimariaTa.ro</a></p>
                    </div>

                </div>

            </div>
        </div>


        <div class="">

            <span class="pageTitle alignCenter bigMarginTop" >Former developers</span>

            <div class="teamWrapper threeTeamColums">

                <div class="our-team ">
                    <div class="team-pic">
                        <img class="lazy" data-src="/public/assets/images/team/RazvanCeana.jpg" alt="Razvan Ceana" title="Razvan Ceana">
                        <div class="over-layer">
                            <ul class="social-link">
                                <li><a href="https://twitter.com/razvanceana" rel="noopener" target="_blank" class="fa fa-twitter" aria-label="twitter"/></li>
                            </ul>
                        </div>
                    </div>
                    <span class="teamName">Razvan Ceana</span>
                    <span class="teamRole">Senior Technical Manager</span>
                    <p class="description">
                        Răzvan is a software engineer with extensive experience in developing high scalability and high availability applications. He is part of a team that develops software for public procurement involving real time data processing and Blockchain research integrations.
                    </p>
                </div>

                <div class="our-team ">
                    <div class="team-pic">
                        <img class="lazy" data-src="/public/assets/images/team/IonutMoraru.jpeg" alt="Ionut Moraru" title="Ionut Moraru">
                        <div class="over-layer">
                            <ul class="social-link">
                                <li><a href="https://twitter.com/morion4000" rel="noopener" target="_blank" class="fa fa-twitter" aria-label="twitter"></a></li>
                            </ul>
                        </div>
                    </div>
                    <span class="teamName">Ionut Moraru</span>
                    <span class="teamRole">Automation Specialist</span>
                    <p class="description">
                        Ionut is a software developer with over 10 years of experience working with web and mobile technologies. He is a Consensys certified developer and founder of <a href="https://www.hostero.eu" target="_blank">Hostero.eu</a>, a mining software for cryptocurrencies.
                    </p>
                </div>

                <div class="our-team ">
                    <div class="team-pic">
                        <img class="lazy" data-src="/public/assets/images/team/AdrianVladu.jpeg" alt="Adrian Vladu" title="Adrian Vladu">
                        <div class="over-layer">
                            <ul class="social-link">
                                <li><a href="https://github.com/ader1990" rel="noopener" target="_blank" class="fa fa-github" aria-label="github"></a></li>
                            </ul>
                        </div>
                    </div>
                    <span class="teamName">Adrian Vladu</span>
                    <span class="teamRole">Blockchain Developer</span>
                    <p class="description">
                        With more than 6 years of open source activity, Adrian Vladu is a seasoned full stack developer with multiple contributions for projects under the OpenStack umbrella. He manages webdollar.network, an open source blockchain explorer for WebDollar.
                    </p>
                </div>
    </div>
    <div class="teamWrapper threeTeamColums">

                <div class="our-team ">
                    <div class="team-pic">
                        <img class="lazy" data-src="/public/assets/images/team/dani.jpg" alt="Dani WebDollar" title="Dani WebDollar">
                        <div class="over-layer">
                            <ul class="social-link">
                            </ul>
                        </div>
                    </div>
                    <span class="teamName">Daniel</span>
                    <span class="teamRole">Network Engineer</span>
                    <p class="description">
                        Daniel is a network engineer with over 20 years of experience in networking, servers, routing and firewall, he is highly passionate about technologies, cryptocurrency/blockchain, system monitoring.
                    </p>
                </div>


                <div class="our-team ">
                    <div class="team-pic">
                        <img class="lazy" data-src="/public/assets/images/team/ConstantinBusuioceanu.jpeg" alt="Constantin Busuioceanu" title="Constantin Busuioceanu">
                            <div class="over-layer">
                                <ul class="social-link">
                                    <li><a href="https://www.linkedin.com/in/busuioceanu-constantin/" class="fa fa-linkedin2" rel="noopener" target="_blank" aria-label="linkedin"></a></li>
                                    <li><a href="https://www.facebook.com/cbusuioceanu" class="fa fa-facebook" rel="noopener" target="_blank" aria-label="facebook"></a></li>
                                    <li><a href="https://github.com/cbusuioceanu" class="fa fa-github" rel="noopener" target="_blank" aria-label="github"></a></li>
                                </ul>
                            </div>
                    </div>
                    <span class="teamName">Constantin Busuioceanu</span>
                    <span class="teamRole">System Engineer</span>
                    <p class="description">
                        Constantin has 20 years experience in Information Technology and Communications. He brought 8192bit data encryption over the Internet in Romania and it's the president of an NGO that stands for the Freedom of the Internet.
                    </p>
                </div>

                <div class="our-team ">
                    <div class="team-pic">
                        <img class="lazy" data-src="/public/assets/images/team/CristianAntal.jpg" alt="Cristian Antal" title="Cristian Antal">
                        <div class="over-layer">
                            <ul class="social-link">
                                <li><a href="https://github.com/xkidro" rel="noopener" target="_blank"  class="fa fa-github" aria-label="github"></a></li>
                                <li><a href="https://twitter.com/xkidu" rel="noopener" target="_blank" class="fa fa-twitter" aria-label="twitter"></a></li>
                            </ul>
                        </div>
                    </div>
                    <span class="teamName">Cristian Antal</span>
                    <span class="teamRole">DevOps</span>
                    <p class="description">
                        Cristian is a web developer turned crypto enthusiast, with over 10 years of development skills and working on mining platforms he aims to bring crypto closer to mass use.
                    </p>
                </div>

            </div>

        </div>

    </div>

</template>

<script>

    const axios = require('axios');
    import consts from "consts/constants";

    export default{
        name: "Community",

        data:()=>{
            return {
                email: '',
                error:'',
                success: '',
            }
        },

        methods:{

            async subscribeEmail(){

                let answer;
                try {
                    answer = await axios.post(consts.SERVER_API + "subscribe-newsletter", {email: this.email});
                } catch (exception){

                    this.error = "There is a problem subscribing to newsletter";
                    return false;

                }

                answer = answer.data;

                if (answer.result === false){
                    this.error = answer.message;
                    this.success = '';
                } else {
                    this.error = '';
                    this.success = answer.message;
                }

            }

        }

    }

</script>

<style>

    .socialLinksNewsletter{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        max-width: 500px;
        margin: 0 auto;
        margin-bottom: 50px;
        padding: 20px;
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

    #newsletterContainer input{
        transition: all 0.5s ease;
    }

    #newsletterContainer input:focus{
        border: solid 1px #8c8c8c;
        background-color: #000000;
        transition: all 0.5s ease;
    }

</style>
