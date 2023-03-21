// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)

    head.meta.push({
        name: 'twitter:site',
        content: '@crunchstart',
    })

    head.meta.push({
        name: 'og:image',
        content: '/assets/graph-img.png',
    })

    head.meta.push({
        name: 'og:image:secure_url',
        content: '/assets/graph-img.png',
    })

    head.meta.push({
        name: 'og:image:type',
        content: 'image/png',
    })

    head.meta.push({
        name: 'og:image:width',
        content: '500',
    })

    head.meta.push({
        name: 'og:image:height',
        content: '500',
    })

    head.meta.push({
        name: 'og:locale',
        content: 'en_US',
    })

    head.meta.push({
        name: 'twitter:image:alt',
        content: 'Crunchstart logo on a black background',
    })

    head.meta.push({
        name: 'robots',
        content: 'index, follow',
    })
}
