<template>
    <div class="cover">
        <div class="h-12 lg:hidden"></div>
        <div class="w-11/12  lg:px:48 mx-auto lg:flex items-center h-full">
            <div class="lg:w-1/2">
                <h3 class="markazi text-white font-semibold">{{ $static.content.title }}</h3>
                <p class="text-white lg:w-9/12 visuelt mt-2 sub-text">
                    {{ $static.content.subTitle }}
                </p>
            </div>
            <div class="lg:w-1/2 py-10 lg:py-0">
                <div class="grid grid-cols-1 md:grid-cols-2 col-gap-16 row-gap-12 lg:grid jusitfy-center w-full">
                    <div class="col-span-1" v-for="{ step } in $static.content.steps" :key="step.text">
                        <g-image :src="step.icon" alt="clock" />
                        <p class="mt-5 info font-medium text-white markazi xl:w-10/12">{{ step.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<static-query>
query{
    content: howItWorksPage (id: 1){
        title
        subTitle
        steps{
            step{
                icon,
                text
            }
        }
    }
}
</static-query>

<script>
export default {}
</script>

<style scoped>
.cover {
    height: 75vh;
    background: #052c4c;
}

h3 {
    font-size: 3.5rem;
    line-height: 66px;
    color: #ffa000;
}

@media screen and (max-width: 1024px) {
    .cover {
        height: auto;
    }
}

.sub-text {
    line-height: 30px;
    font-size: 1.25rem;
}

.info {
    font-size: 2.1rem;
    opacity: 0.9;
    line-height: 46px;
}
</style>
