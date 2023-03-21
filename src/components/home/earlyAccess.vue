<template>
    <div :class="`py-16 md:py-24 duration-500 ${form ? 'lg-height' : 'sm-height'}`" id="access">
        <p class="text markazi text-center">Get early access</p>
        <template v-if="!form">
            <div class="flex md:flex-row flex-col items-center justify-center mt-10">
                <button class="button" @click="select('browseProjects')">Browse Project</button>
                <button class=" button md:ml-5 mt-6 md:mt-0" @click="select('getFunded')">Get funded</button>
            </div>
        </template>
        <template v-else>
            <div
                :class="
                    `flex flex-col justify-center w-11/12 md:w-6/12 xl:w-2/5 xl:px-10 mx-auto mt-10 duration-500 ${
                        form ? 'opacity-100' : 'opacity-0 absolute inset-x-0 top-0 -z-1'
                    }`
                "
            >
                <div>
                    <button
                        class="mb-3 text-blue hover:text-blue-dark duration-500 flex items-center"
                        @click="form = false"
                    >
                        <svg
                            width="8"
                            height="13"
                            viewBox="0 0 8 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="mr-2"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M6.66637 8.37085e-07C7.00769 8.66924e-07 7.34902 0.127411 7.60901 0.380929C8.13033 0.889266 8.13033 1.71093 7.60901 2.21926L3.20246 6.51607L7.44235 10.7973C7.953 11.3147 7.93834 12.1377 7.40902 12.6356C6.87836 13.1336 6.03439 13.1193 5.52373 12.6044L0.374537 7.40404C-0.130784 6.8931 -0.124116 6.08314 0.390536 5.58131L5.72373 0.380929C5.98372 0.127411 6.32505 8.07245e-07 6.66637 8.37085e-07Z"
                                fill="#2895F0"
                            />
                        </svg>
                        Go Back
                    </button>
                </div>
                <form class="grid gap-8 w-full" @submit.prevent="submit">
                    <div>
                        <input
                            type="text"
                            placeholder="Enter your fullname"
                            class="text-sm h-18 rounded-lg bg-snow w-full border border-smoke-dark px-6"
                            v-model="fullname"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Business name"
                            class="text-sm h-18 rounded-lg bg-snow w-full border border-smoke-dark px-6"
                            v-model="businessName"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Enter email"
                            class="text-sm h-18 rounded-lg bg-snow w-full border border-smoke-dark px-6"
                            v-model="email"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="emanumberil"
                            placeholder="Enter your phone number"
                            class="text-sm h-18 rounded-lg bg-snow w-full border border-smoke-dark px-6"
                            v-model="phoneNumber"
                            required
                        />
                    </div>
                    <div>
                        <button class="bg-blue text-light rounded-lg text-sm w-full h-18">
                            Notify me
                        </button>
                    </div>
                </form>
            </div>
            <template v-if="isSuccess !== ''">
                <template v-if="isSuccess">
                    <p class="text-blue text-center mt-4">We have recevied your email</p>
                </template>
                <template v-else>
                    <p class="text-red text-center mt-4">Something is wrong, please try again</p>
                </template>
            </template>
            <template v-if="loading">
                <div class="flex justify-center mt-4">
                    <img src="@/assets/img/load.svg" class="w-10 " />
                </div>
            </template>
        </template>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            form: false,
            fullname: '',
            businessName: '',
            email: '',
            phoneNumber: '',
            loading: false,
            isSuccess: '',
            getFunded: 'https://getform.io/f/0cff35be-4571-4fb0-9966-ae77a893d7d9',
            browseProjects: 'https://getform.io/f/ade9b5e2-0e80-4755-a763-4e047943ecfe',
            active: '',
        }
    },

    methods: {
        submit() {
            const { fullname, businessName, email, active, phoneNumber } = this
            this.loading = true
            axios
                .post(
                    this[active],
                    {
                        fullname,
                        businessName,
                        email,
                        phoneNumber,
                    },
                    {
                        headers: {
                            Accept: 'application/json',
                        },
                    }
                )
                .then((data) => {
                    this.isSuccess = data.data.success ? 'true' : 'false'
                    ;(this.fullname = ''), (this.businessName = ''), (this.email = '')
                    this.loading = false

                    setTimeout(() => {
                        this.form = false
                        this.isSuccess = ''
                    }, 3000)
                })
        },

        select(val) {
            this.active = val
            this.form = true
        },
    },
}
</script>

<style scoped>
.text {
    color: #303d46;
    font-size: 3.125rem;
    line-height: 120%;
}

.button {
    background: #2895f0;
    border-radius: 5px;
    height: 68px;
    font-family: Visuelt Pro;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    width: 200px;
    outline: none !important;
}

.sm-height {
    height: 400px;
}
.lg-height {
    height: 800px;
}

.h-18 {
    height: 4.5rem;
}

input,
textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
}

input::placeholder textarea::placeholder {
    color: #303d46;
}

.rounded-lg {
    border-radius: 5px !important;
}

input:focus,
textarea:focus {
    border-color: #0568bb;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type='number'] {
    -moz-appearance: textfield;
}
</style>
