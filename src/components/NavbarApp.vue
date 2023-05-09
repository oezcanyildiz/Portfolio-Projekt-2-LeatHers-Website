<template>
    <div class="relative">
        <header>
            <nav class="flex items-center justify-around w-full h-20 text-2xl text-center bg-main-color2 text-white">
                <button @click="showMenü = !showMenü">
                    <i class="fa-solid fa-bars cursor-pointer hover:bg-slate-300 hover:text-black p-2 rounded-lg"></i>
                </button>
                <router-link to="/">
                    <h1 class="eigeneFont text-4xl cursor-pointer">Leat & Her`s</h1>
                </router-link>
                <div class="flex gap-5 text-3xl">
                    <router-link to="/liked">
                        <div v-if="_isAuthenticated">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                    </router-link>
                    <router-link to="/buy">
                        <div class="relative">
                            <i class="fa-solid fa-bag-shopping">
                            </i>
                            <div class="absolute w-5 h-5 bg-red-800 rounded-full text-sm z-20 -bottom-2 -right-2">1</div>
                        </div>
                    </router-link>
                </div>
            </nav>
        </header>
        <div class="bg-slate-50 w-80 flex z-50 flex-col h-full asideHeight absolute top-0" v-show="showMenü">
            <div class="fixed top-0 w-80">
                <div class="flex justify-between p-5">
                    <h2 class="text-xl underline pl-1">Menü</h2>
                    <button @click="showMenü = !showMenü">
                        <i
                            class="fa-solid fa-x cursor-pointer p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"></i>
                    </button>
                </div>
                <ul class="pl-5 bg-slate-50">
                    <li class="p-4 cursor-pointer">
                        <div>
                            <button @click="showList = !showList" class="text-2xl font-bold hover:bg-slate-200 ">
                                Damen
                                <i class="fa-solid fa-caret-down"></i>
                            </button>
                            <ul class="text-sm flex flex-col text-left pl-6 pt-2 gap-2" v-show="showList">
                                <li class="hover:scale-105 hover:font-semibold" v-for="category in categorieListDamen" @click="toDamenShop"
                                    :key="category.id" :value="category.id">{{ category.name }}</li>
                            </ul>
                        </div>
                    </li>
                    <li class="p-4 cursor-pointer">
                        <div>
                            <button @click="showListHerr = !showListHerr" class="text-2xl font-bold hover:bg-slate-200 ">
                                Herren
                                <i class="fa-solid fa-caret-down"></i>
                            </button>
                            <ul class="text-sm flex flex-col text-left pl-6 pt-2 gap-2" v-show="showListHerr">
                                <li class="hover:scale-105 hover:font-semibold" v-for="category in categorieListHerren" @click="toHerrenShop"
                                    :key="category.id" :value="category.id">{{ category.name }}</li>
                            </ul>
                        </div>
                    </li>
                    <li class="text-2xl font-bold p-4 hover:bg-slate-200 cursor-pointer">
                        <button @click="toKinderShop" >Kinder</button>
                    </li>
                    <router-link to="/Shopsale">
                        <li class="text-2xl font-bold p-4 hover:bg-red-800 bg-red-600 text-white cursor-pointer">
                            <button>Sale%
                            </button>
                        </li>
                    </router-link>
                </ul>
                <div class="flex w-full h-10 text-center items-center pt-20 px-2 bg-slate-50">
                    <div @click="toggleContactDrawer(); toggleShowMenu()"
                        class="flex-1 text-xl p-2 cursor-pointer  text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                        <a href="#">
                            <i class="fa-solid fa-pen"></i>
                            <span class="flex-1 ml-3 whitespace-nowrap">Kontakt</span>
                        </a>
                    </div>
                    <router-link to="/login" v-if="!_isAuthenticated"
                        class="flex-1 w-full text-xl p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                        <a href="#">
                            <i class="fa-solid fa-right-to-bracket"></i>
                            <span class="flex-1 ml-3 whitespace-nowrap">Login</span>
                        </a>
                    </router-link>
                    <button v-if="_isAuthenticated" @click="onLogout"
                        class="flex-1 w-full text-xl p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                        <i class="fa-solid fa-right-to-bracket"></i>
                        <span class="flex-1 ml-3 whitespace-nowrap">Logout</span>
                    </button>
                </div>
            </div>

        </div>
        <!-- son ekledigim bölüm -->
        <div class="absolute right-0 top-0 bg-slate-100 px-10 py-2 z-30 kontaktdrawner " v-show="contactDrawner">
            <button @click=" contactDrawner = !contactDrawner">
                <i
                    class="fa-solid fa-x cursor-pointer p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"></i>
            </button>
            <div class="p-10">
                <p class="text-2xl text-black font-bold mb-6">
                    Hallo, <br>
                    Wir freuen uns auf Ihre Feedbacks und Bewertungen, um uns ständig zuverbesssern.
                </p>
                <form>
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ihre
                            Name</label>
                        <input type="name" id="name"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required>
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ihre
                            email</label>
                        <input type="email" id="email"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="abc@gmail..." required>
                    </div>
                    <div class="mb-6">
                        <label for="Kundennummer" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ihre
                            Kundennummer</label>
                        <input type="Kundennummer" id="Kundennummer"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="PC12345">
                    </div>
                    <div class="mb-6">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ihre
                            Nachricht</label>
                        <textarea id="message" rows="4"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="..."></textarea>

                    </div>

                    <button type="submit"
                        class=" w-44 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Senden</button>

                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex"
export default {
    data() {
        return {
            showMenü: false,
            showList: false,
            showListHerr: false,
            contactDrawner: false,
            categorieListDamen: [],
            categorieListHerren: [],
            categorieListKinder: [],

        }
    }, methods: {
        toggleContactDrawer() {
            this.contactDrawner = !this.contactDrawner
        },
        toggleShowMenu() {
            this.showMenü = !this.showMenü
        },
        onLogout() {
            this.$store.commit("logoutUser")
            this.$router.push("/login")
        },
        toDamenShop(){
            this.$router.push("/damenshop")
        },
        toHerrenShop(){
            this.$router.push("/herrenshop")
        },
        toKinderShop(){
            this.$router.push("/kindershop")
        },
    }, computed: {
        ...mapGetters(["_isAuthenticated"]),
    },
    mounted() {
        this.$appAxios.get("/damen").then(damen_response => {
            this.categorieListDamen = damen_response?.data || [];
        })
        this.$appAxios.get("/herren").then(herren_response => {
            this.categorieListHerren = herren_response?.data || [];
        })
        this.$appAxios.get("/kinder").then(kinder_response => {
            this.categorieListKinder = kinder_response?.data || [];
        })
    },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

.eigeneFont {
    font-family: 'Lobster', cursive;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.asideHeight {
    min-height: 2000px;
    z-index: 100;
}

.kontaktdrawner {
    max-width: 550px;
    min-height: 2000px;
}
</style>