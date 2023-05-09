<template>
    <appHeader></appHeader>
    <div class="bg-main-color2 py-10 md:px-20 px-5">
        <div class="flex justify-center items-center bg-main-color rounded-2xl md:p-20 p-10">
            <div class="carousel flex-1 rounded-tl-2xl rounded-bl-2xl" @mouseenter="stopInterval"
                @mouseleave="startInterval">
                <div class="slide" v-bind:class="{ active: currentIndex === index }" v-for="(image, index) in images"
                    :key="index">
                    <img :src="image" alt="" class="fotos">
                </div>
            </div>
            <div
                class="flex-1 md:rounded-tr-2xl md:rounded-br-2xl bg-white w-full md:p-10 p-5 rounded-2xl md:rounded-tl-none md:rounded-bl-none ">
                <div>
                    <h1 class="text-2xl font-bold py-5 ">Herzlich Willkommen</h1>
                    <p>Sie können auch als <strong class="underline text-xl px-2">GAST</strong> bestellen </p>
                    <div class="orteil flex justify-center px-10 text-center items-center">
                        <hr class="w-20 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
                        <span class="p-5">ODER</span>
                        <hr class="w-20 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
                    </div>
                </div>
                <div class="mb-6 flex flex-col gap-1">
                    <label for="logemail">Ihre Email</label>
                    <input type="email" placeholder="Ihre Email" id="logemail" class="rounded-lg" required
                        v-model="userData.email">
                </div>
                <div class="mb-6 flex flex-col gap-1">
                    <label for="password">Ihre Password</label>
                    <input type="password" placeholder="Ihre Password" class="rounded-lg" required
                        v-model="userData.password">
                </div>
                <div class="w-full text-right font-semibold pr-5 pb-5 text-blue-700">
                    <router-link to="/">
                        <a href="#">
                            Password vergessen ?
                        </a>
                    </router-link>
                </div>
                <button type="submit" @click="onSubmit"
                    class=" w-full mb-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Senden</button>
                <div>
                    Du hast noch keinen Account.
                    <router-link to="/Register">
                        <a href="#" class="text-blue-700 font-semibold">
                            Hier registieren.
                        </a>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <appFooter></appFooter>
</template>
  
<script>
import CryptoJS from "crypto-js"
export default {
    data() {
        return {
            images: [
                '../src/img/herrenportmonieee.jpeg',
                '../src/img/Women-backbag.webp',
                '../src/img/Arbeitstasche.jpeg',
                '../src/img/KinderSchoolbagback.jpeg',
            ],
            currentIndex: 0,
            intervalId: null,
            userData: {
                email: null,
                password: null,
            }
        }
    },
    mounted() {
        this.startInterval();
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
    },
    methods: {
        prevSlide() {
            this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
        },
        nextSlide() {
            this.currentIndex = this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
        },
        startInterval() {
            this.intervalId = setTimeout(() => {
                this.nextSlide();
                this.startInterval();
            }, 3000);
        },
        stopInterval() {
            clearTimeout(this.intervalId);
        },
        onSubmit() {
            const password = CryptoJS.HmacSHA1(this.userData.password, this.$store.getters._saltKey).toString();
            this.$appAxios
                .get(`/users?email=${this.userData.email}&password=${password}`)
                .then(login_response => {
                    if(login_response?.data?.length>0){ 
                        //burda bi bak var birden fazla kullanici sorgulamasi yapilmasi lazim aslinda 
                        this.$store.commit("setUser",login_response?.data[0])
                        this.$router.push({name :'HomePage'})
                    }else{
                        alert("Passwort oder Email falsch.")
                    }
                })
                .catch(e => console.log(e));

        }
    }
}
</script>
  
<style>
.carousel {
    position: relative;
    width: 800px;
    height: 600px;
    overflow: hidden;
}

.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.slide.active {
    opacity: 1;
}

.fotos {
    width: 100%;
    height: 100%;
    max-width: 720px;
    min-width: 520px;

}
</style>
  