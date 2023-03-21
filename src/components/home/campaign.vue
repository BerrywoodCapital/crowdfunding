<template>
    <div class="py-20 flex items-center justify-center flex-col text-center w-11/12 mx-auto">
        <h2 class="text-blue markazi font-medium md:w-10/12  lg:w-6/12 mx-auto text-center">{{ $static.content.title }}</h2>
        <p class="text-gray-3 mt-3 lg:mt-1 text-xl visuelt">{{ $static.content.subText }}</p>
        <!-- <div class="mt-8">
            <button class="py-4 px-12 visuelt" @click="scrollAction">{{ $static.content.buttonText }}</button>
        </div> -->
        <div class="lg:w-1/3 px-4 mt-10 relative mb-10">
            <g-image :src="$static.content.image" alt="a phone showing capaign details" />
        </div>
    </div>
</template>

<static-query>
query {
    content: campaignPage(id: 1) {
        title
        subText
        buttonText
        image
    }
}
</static-query>

<script>
export default {
    methods: {
        scrollAction() {
            if (window !== undefined) {
                const cooord = document.querySelector('#access').getBoundingClientRect().top

                window.scrollTo({ top: cooord + 1040, behavior: 'smooth' })
            }
        },
    },
}
</script>

<style scoped>
h2 {
    font-size: 3.5rem;
    line-height: 64px;
}

button {
    background: #ffffff;
    border: 1px solid #2895f0;
    border-radius: 5px;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    color: #444647;
}
</style>
