<template>
    <Layout>
        <Hero />
        <Campaign />
        <why-crunch-start />
        <how-it-works />
        <early-access />
    </Layout>
</template>

<script>
import Hero from '@/components/home/hero'
import Campaign from '@/components/home/campaign'
import HowItWorks from '@/components/home/howItWorks'
import EarlyAccess from '@/components/home/earlyAccess'
import WhyCrunchStart from '@/components/home/whyCrunchStart'
export default {
    metaInfo: {
        title: 'Crunchstart',

        meta: [
            {
                name: 'og:title',
                content: 'Crunchstart - Crowdfunding Platform',
            },
            {
                name: 'description',
                content:
                    'Raising funds for the best and brightest projects through successful crowdfunding campaigns..',
            },
            {
                name: 'og:description',
                content:
                    'Raising funds for the best and brightest projects through successful crowdfunding campaigns..',
            },
            {
                name: 'twitter:title',
                content: 'Crunchstart - Crowdfunding Platform',
            },
            {
                name: 'keywords',
                content: 'crowdfunding',
            },
            {
                name: 'revisit-after',
                content: '120 days',
            },
        ],
    },

    components: {
        Hero,
        Campaign,
        HowItWorks,
        EarlyAccess,
        WhyCrunchStart,
    },
}
</script>

<style>
button {
    outline: none !important;
}
</style>
