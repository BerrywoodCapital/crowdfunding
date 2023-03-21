// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Crowdfunding Platform',
    plugins: [
        {
            use: 'gridsome-plugin-tailwindcss',
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: './_pages/Hero/*.md',
                typeName: 'HeroPage',
            },
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: './_pages/Campaign/*.md',
                typeName: 'CampaignPage',
            },
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: './_pages/How-It-Works/*.md',
                typeName: 'HowItWorksPage',
            },
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: './_pages/Privacy-Policy/*.md',
                typeName: 'PrivacyPolicyPage',
            },
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: './_pages/MetaData/*.md',
                typeName: 'MetaDataPage',
            },
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: './_pages/WhyCrunchStart/*.md',
                typeName: 'WhyInfoPage',
            },
        },
    ],
}
