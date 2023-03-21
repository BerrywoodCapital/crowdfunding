<template>
    <div>
        <div class="flex items-center justify-between w-10/12 mx-auto h-20">
            <div>
                <g-image :src="$page.footer.footer_logo" class="w-48" alt="logo" />
            </div>
            <div class="pt-1">
                <g-link to="/" class="visuelt font-medium text-xl">Home</g-link>
            </div>
        </div>
        <div class="my-16 w-10/12 lg:w-8/12 xl:w-7/12 xl:px-8 mx-auto">
            <div v-html="$page.content.content"></div>
        </div>
        <footer class=" border-t">
            <!-- <p class="text-grey-100 w-11/12 px-6 mx-auto text-xs">
                <span style=“text-align:center;”>Investing through an online portal involves risk. Investment is speculative and investors risk losing
                investments. Ask questions and read all information carefully before investing or seek independent
                financial advise.</span>
            </p> -->
            <div
                class="flex md:flex-row flex-col md:h-20 items-center justify-center md:justify-between lg:w-11/12 px-6 lg:px-10 mx-auto py-5 md:py-0"
            >
                <div>
                    <p class="font-normal text-sm text-center visuelt p-0">&copy; {{ $page.footer.copyright_text }}</p>
                </div>
                <div class="mx-auto md:pr-16">
                    <p class="text-grey text-sm visuelt">{{ $page.footer.address }}</p>
                </div>
                <div>
                    <g-link to="/privacy-policy" class="text-gray-1 font-normal text-sm visuelt mt-5 md:mt-0 py-3"
                        >Terms & Conditions</g-link
                    >
                </div>
            </div>
        </footer>
    </div>
</template>

<page-query>
query {
  content: privacyPolicyPage(id: 1){
    id
    content
  }

  footer: metaDataPage(id: 1){
        footer_logo
        logo
        copyright_text
        address
        extra_info
    }
}
</page-query>

<script>
export default {
    mounted() {
        const lis = this.$el.querySelectorAll('li')

        for (let i = 0; i < lis.length; i += 1) {
            const img = document.createElement('img')
            const span = document.createElement('span')
            span.classList.add('ml-6')
            img.src = require('../assets/img/bullet.svg')
            img.classList.add('mt-2')
            const text = lis[i].innerText
            lis[i].innerText = ''
            span.innerText = text
            lis[i].appendChild(img)
            lis[i].appendChild(span)
        }
    },
}
</script>

<style>
li {
    display: flex;
    align-items: flex-start;
}
</style>
