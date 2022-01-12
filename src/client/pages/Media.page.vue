<template>

    <layout>

        <div slot="content">

            <media-hero/>

        </div>

    </layout>

</template>

<script>

    import Layout from "client/components/layout/SimpleLayout.vue"
    import MediaHero from "client/components/heros/Media.hero.vue";


    export default {

        name: "partner-page",

        components:{
            "layout": Layout,
            "media-hero": MediaHero,

        }

    }

</script>
