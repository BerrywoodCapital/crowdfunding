<template>
    <div class="cover py-16">
        <div class="w-11/12 xl:w-9/12  lg:px:48 mx-auto lg:flex items-center flex-col justify-center h-full">
            <h3 class="markazi text-white font-semibold text-center">Why Crunchstart?</h3>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6 w-full text-center">
                <div class="col-span-1 card" v-for="item in $static.content.list" :key="item.text">
                    <div class="w-full px-3 py-4">
                        <p class="text-gray-1 visuelt">
                            {{ item.text }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<static-query>
query{
  content: whyInfoPage (id: 1) {
    list {
      text
    }
  }
}
</static-query>

<script>
export default {}
</script>

<style scoped>
.cover {
    /* height: 75vh; */
    background: #212121;
}

h3 {
    font-size: 3.5rem;
    line-height: 66px;
}

@media screen and (max-width: 1024px) {
    .cover {
        height: auto;
    }
}

p {
    line-height: 22px;
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

.card:nth-child(2n) {
    background: #ffa000 !important;
}

.card {
    border-radius: 20px;
    background-color: #2895f1;
}
</style>
