<template>
    <div class="lg:h-screen w-full bg-dark-blue duration-500">
        <div class="h-32 w-full lg:hidden"></div>
        <div class="w-11/12 lg:w-10/12 mx-auto lg:flex items-center h-full">
            <div class="lg:w-1/2 duration-500 custom">
                <p class="text-light-blue opacity-50 markazi coming-soon">{{ $static.content.coming_soon }}</p>
                <hero-slider :data="$static.content.slidetext" />
                <div class="mt-12">
                    <button
                        class="text-white bg-blue visuelt border border-white text-base font-medium px-12 py-4"
                        style="border-width: 1.5px; border-radius: 5px"
                        @click="scrollAction"
                    >
                        Get started
                    </button>
                </div>
            </div>
            <div class="lg:w-1/2 relative pt-24 lg:pl-10 md:block hidden">
                <div class="lg:w-11/12 mx-auto">
                    <g-image :src="$static.content.featured_image" />
                </div>
            </div>
        </div>
        <div class="h-16 w-full lg:hidden"></div>
    </div>
</template>

<static-query>
query {
    content: heroPage(id: 1){
        id
        coming_soon
        slidetext {
            header {
                large_text,
                sub_text
            }
        }
        featured_image
    }
}
</static-query>

<script>
import HeroSlider from '../heroSlider'
export default {
    components: {
        HeroSlider,
    },

    mounted() {
        console.log(this.$static.content.slidetext[0])
    },
    methods: {
        scrollAction() {
            if (window !== undefined) {
                const cooord = document.querySelector('#access').getBoundingClientRect().top

                window.scrollTo({ top: cooord, behavior: 'smooth' })
            }
        },
    },
}
</script>

<style scoped>
.coming-soon {
    font-size: 2.5rem;
}

@media screen and (max-width: 640px) {
    .screen-size {
        height: 100vh;
    }
}

@media screen and (max-width: 370px) {
    .screen-size {
        height: 120vh;
    }
}
</style>
