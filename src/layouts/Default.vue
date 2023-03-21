<template>
    <div class="relative overflow-hidden">
        <header class="flex justify-center py-8 absolute w-full inset-x-0">
            <g-link to="/"><g-image :src="$static.content.logo"/></g-link>
        </header>
        <slot />
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
                    <p class="font-normal text-sm text-center visuelt p-0">&copy; {{ $static.content.copyright_text }}</p>
                </div>
                <div class="mx-auto">
                    <p class="text-grey text-sm visuelt">{{ $static.content.address }}</p>
                </div>
                <div>
                    <g-link to="/privacy-policy" class="text-gray-1 font-normal text-sm visuelt mt-5 md:mt-0 py-3"
                        >Terms & Conditions</g-link
                    >
                </div>
            </div>
        </footer>

        <!-- <div class="flex justify-center mb-8 w-11/12 mx-auto px-8">
            <g-image :src="$static.content.footer_logo" />
        </div> -->
    </div>
</template>

<static-query>
query{
    content: metaDataPage(id: 1){
        footer_logo
        logo
        copyright_text
        address
        extra_info
    }
}
</static-query>

<style>
@import url('../assets/styles/font.css');
footer {
    border-top: 1px solid #d3dce6;
}

h1 {
    font-family: 'Markazi Text';
    color: #2895f0;
    font-size: 32px;
    margin-top: 20px;
}

p {
    font-family: 'Visuelt Pro';
    font-size: 18px;
    line-height: 35px;
    color: #111111;
    padding: 10px 0px;
}

ul {
    margin: 0;
    padding: 0;
    margin-bottom: 20px !important;
}

li {
    font-family: 'Visuelt Pro';
    font-size: 18px;
    line-height: 35px;
    color: #111111;
    margin-bottom: 26px;
}
@media screen and (min-width: 800px) {
    .address {
        margin-top: -10px;
    }
}
</style>
