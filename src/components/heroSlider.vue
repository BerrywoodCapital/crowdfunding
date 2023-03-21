<template>
    <div>
        <div class="flex relative">
            <div
                :class="`w-screen slide fadeInRight duration-500 custom-height ${i > 0 ? 'hidden' : ''}`"
                v-for="(item, i) in data"
                :key="item.header.large_text"
            >
                <h1 class="text-white markazi font-bold mt-4">{{ item.header.large_text }}</h1>
                <h2 class="text-white opacity-50 mt-2 lg:w-full w-8/12 xl:w-8/12 md:pr-16">
                    {{ item.header.sub_text }}
                </h2>
            </div>
        </div>
        <!-- <div class="flex items-center mt-8">
            <div
                :class="`h-1 bg-white w-12 mr-3 duration-500 ${i === current ? '' : 'opacity-25'}`"
                v-for="i in items.length"
                :key="i"
            ></div>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    title: 'Discover the best and brightest projects',
                    text: 'Back the projects and causes you believe in.',
                },
                {
                    title: 'Invest for Impact',
                    text: 'Support creative ideas.',
                },
            ],

            current: 1,
            slides: null,
        }
    },

    props: {
        data: {
            type: Array,
        },
    },

    mounted() {
        this.handleSlideChange()
    },

    methods: {
        handleSlideChange() {
            this.slides = this.$el.querySelectorAll('.slide')

            this.slideTimer = setInterval(() => {
                this.current < this.slides.length ? (this.current += 1) : (this.current = 1)
                this.nextSlide()
            }, 5000)
        },

        nextSlide() {
            this.slides.forEach((slide, i) => {
                if (i + 1 == this.current) {
                    setTimeout(() => {
                        slide.classList.remove('fadeOut')
                        slide.style.display = 'block'
                    }, 700)
                } else {
                    slide.classList.add('fadeOut')
                    slide.classList.add('-z-1')
                    setTimeout(() => {
                        slide.style.display = 'none'
                    }, 700)
                }
            })
        },
    },
}
</script>

<style scoped>
h1 {
    font-size: 4.6rem;
    line-height: 76px;
}

h2 {
    font-size: 1.5rem;
}

.fadeInRight {
    animation: fadeInRight 1s ease-in-out 1 normal both;
}

.fadeOut {
    animation: fadeOut 1s ease-in 1 normal both;
}

@keyframes fadeInRight {
    from {
        transform: translateX(50%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(-50%);
        opacity: 0;
    }
}

.custom-height {
    height: 400px;
}

@media screen and (min-width: 640px) {
    .custom-height {
        height: 14rem;
    }
}

@media screen and (min-width: 1024px) {
    .custom-height {
        height: 24rem;
    }
}
@media screen and (min-width: 1034px) {
    .custom-height {
        height: 20rem;
    }
}

@media screen and (min-width: 1200px) {
    .custom-height {
        height: 19rem;
    }
}

@media screen and (min-width: 1350px) {
    .custom-height {
        height: 16rem;
    }
}
</style>
