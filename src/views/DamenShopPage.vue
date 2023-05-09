<template>
    <div class="relative">
        <header>
            <nav class="flex items-center justify-around w-full h-20 text-2xl text-center bg-main-color2 text-white">
                <button @click="showMenü = !showMenü">
                    <i class="fa-solid fa-gear cursor-pointer hover:bg-slate-300 hover:text-black p-2 rounded-lg"></i>
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
                    <h2 class="text-xl underline pl-1">Einstellungen</h2>
                    <button @click="showMenü = !showMenü">
                        <i
                            class="fa-solid fa-x cursor-pointer p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"></i>
                    </button>
                </div>


                <div class="categorie max-w-lg md:hidden">
                    <ul class="flex flex-col gap-3">
                        <li class="text-2xl p-2 bg-black text-white cursor-pointer">
                            <a href="#">Damen</a>
                        </li>
                        <ul class="text-sm flex flex-col text-left pl-6 pt-2 gap-2">
                            <li class="hover:scale-105 hover:font-semibold cursor-pointer" @click="sectionPort">
                                Portemonnaies
                            </li>
                            <li class="hover:scale-105 hover:font-semibold cursor-pointer" @click="sectionTaschen">Taschen
                            </li>
                            <li class="hover:scale-105 hover:font-semibold cursor-pointer" @click="sectionRucksack">
                                Rucksäcke</li>
                        </ul>
                        <li @click="toHerrenShop" class="text-2xl p-2 hover:bg-slate-200 cursor-pointer">
                            <a href="#">Herren</a>
                        </li>
                        <li class="text-2xl p-2 hover:bg-slate-200 cursor-pointer" @click="toKinderShop">
                            <a href="#">Kinder</a>
                        </li>
                        <router-link to="/ShopSale">
                            <li class="bg-red-600 text-white p-2 text-2xl hover:bg-red-700 cursor-pointer">
                                <a href="#">Sale%</a>
                            </li>
                        </router-link>
                    </ul>
                </div>







                <div class="flex flex-col w-full h-10 text-center items-center px-2 bg-slate-50">
                    <div @click="toggleContactDrawer(); toggleShowMenu()"
                        class="flex-1 w-full text-xl p-2 cursor-pointer  text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
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
                    <button v-if="_isAuthenticated" @click="onLogout"
                        class="flex-1 w-full text-xl p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                        <i class="fa-solid fa-gear"></i>
                        <span class="flex-1 ml-3 whitespace-nowrap">Einstellungen</span>
                    </button>
                </div>
            </div>

        </div>
        <!-- son ekledigim Kontakt bölüm -->
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
    <div class="flex">
        <div class="categorie max-w-lg w-64 p-10 md:block hidden bg-slate-200">
            <ul class="flex flex-col gap-3">
                <li class="text-2xl p-2 bg-black text-white cursor-pointer" @click="toDamenShop">
                    <a href="#">Damen</a>
                </li>
                <ul class="text-sm flex flex-col text-left pl-6 pt-2 gap-2">
                    <li class="hover:scale-105 hover:font-semibold cursor-pointer" @click="sectionPort">Portemonnaies
                    </li>
                    <li class="hover:scale-105 hover:font-semibold cursor-pointer" @click="sectionTaschen">Taschen</li>
                    <li class="hover:scale-105 hover:font-semibold cursor-pointer" @click="sectionRucksack">Rucksäcke</li>
                </ul>
                <li class="text-2xl p-2 hover:bg-slate-200 cursor-pointer" @click="toHerrenShop">
                    <a href="#">Herren</a>
                </li>
                <li class="text-2xl p-2 hover:bg-slate-200 cursor-pointer" @click="toKinderShop">
                    <a href="#">Kinder</a>
                </li>
                <router-link to="/ShopSale">
                    <li class="bg-red-600 text-white p-2 text-2xl hover:bg-red-700 cursor-pointer">
                        <a href="#">Sale%</a>
                    </li>
                </router-link>
            </ul>
        </div>
        <main class="itemList flex flex-col w-full md:p-10 py-10 md:pt-10 bg-slate-100">
            <div
                class="flex justify-center items-center w-full gap-4 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400">
                <div class="text-black text-2xl">
                    <h3 class="text-4xl font-extrabold">Der Sommer kommt</h3>
                    <p>Sie sind immer auf dem neuesten Stand der Trends bei uns dabei.</p>
                </div>
                <div class="flex justify-center gap-4 px-2">
                    <img src="../img/Ledertasche.webp" class="titleimgs hidden md:block " alt="">
                    <img src="../img/LedertascheLimi.webp" class="titleimgs" alt="">
                </div>
            </div>
            <div class="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 md:gap-4 gap-2 py-10" v-show="showAll">
                <div v-for="item in itemList" :key="item.id" class="flex bg-slate-200 rounded-2xl p-2">
                    <img class="rounded-2xl itemimages 2xl:w-52 2xl:h-72 w-36 h-52 " :src="item.url" alt="">
                    <div class="w-full flex flex-col p-3 justify-between">
                        <div>
                            <h1 class="pl-3 pt-5 text-2xl">{{ item.name }}</h1>
                            <span class="opacity-50 text-xs text-right">One Size</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="text-left">
                                <p class="text-lg line-through">{{ item.oldprice }}</p>
                                <p class="text-2xl">{{ item.preis }}€</p>
                            </div>
                            <div class="p-5 bg-slate-500 rounded-xl hover:bg-yellow-300 cursor-pointer">
                                <i class="fa-solid fa-cart-shopping fa-2xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col p-10" v-show="showPort">
                <h2 class="text-4xl font-bold underline text-black">Portemonnaies</h2>
                <div class="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 md:gap-4 gap-2 py-10">
                    <div v-for="item in itemListPort" :key="item.id" class=" flex bg-slate-200 rounded-2xl p-2">
                        <img class="rounded-2xl itemimages 2xl:w-52 2xl:h-72 w-36 h-52 " :src="item.url" alt="">
                        <div class="w-full flex flex-col p-3 justify-between">
                            <div>
                                <h1 class="pl-3 pt-5 text-2xl">{{ item.name }}</h1>
                                <span class="opacity-50 text-xs text-right">One Size</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="text-left">
                                    <p class="text-lg line-through">{{ item.oldprice }}</p>
                                    <p class="text-2xl">{{ item.preis }}€</p>
                                </div>
                                <div class="p-5 bg-slate-500 rounded-xl hover:bg-yellow-300 cursor-pointer">
                                    <i class="fa-solid fa-cart-shopping fa-2xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col p-10" v-show="showTaschen">
                <h2 class="text-4xl font-bold underline text-black">Taschen</h2>
                <div class="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 md:gap-4 gap-2 py-10">
                    <div v-for="item in itemListTaschen" :key="item.id" class=" flex bg-slate-200 rounded-2xl p-2">
                        <img class="rounded-2xl itemimages 2xl:w-52 2xl:h-72 w-36 h-52 " :src="item.url" alt="">
                        <div class="w-full flex flex-col p-3 justify-between">
                            <div>
                                <h1 class="pl-3 pt-5 text-2xl">{{ item.name }}</h1>
                                <span class="opacity-50 text-xs text-right">One Size</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="text-left">
                                    <p class="text-lg line-through">{{ item.oldprice }}</p>
                                    <p class="text-2xl">{{ item.preis }}€</p>
                                </div>
                                <div class="p-5 bg-slate-500 rounded-xl hover:bg-yellow-300 cursor-pointer">
                                    <i class="fa-solid fa-cart-shopping fa-2xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="flex flex-col p-10" v-show="showRucksack">
                <h2 class="text-4xl font-bold underline text-black">Rucksäcke</h2>
                <div class="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 md:gap-4 gap-2 py-10">
                    <div v-for="item in itemListRucksack" :key="item.id" class=" flex bg-slate-200 rounded-2xl p-2">
                        <img class="rounded-2xl itemimages 2xl:w-52 2xl:h-72 w-36 h-52 " :src="item.url" alt="">
                        <div class="w-full flex flex-col p-3 justify-between">
                            <div>
                                <h1 class="pl-3 pt-5 text-2xl">{{ item.name }}</h1>
                                <span class="opacity-50 text-xs text-right">One Size</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="text-left">
                                    <p class="text-lg line-through">{{ item.oldprice }}</p>
                                    <p class="text-2xl">{{ item.preis }}€</p>
                                </div>
                                <div class="p-5 bg-slate-500 rounded-xl hover:bg-yellow-300 cursor-pointer">
                                    <i class="fa-solid fa-cart-shopping fa-2xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    </div>
    <appFooter></appFooter>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    data() {
        return {
            showAll: true,
            showPort: false,
            showTaschen: false,
            showRucksack: false,
            showMenü: false,
            showList: false,
            showListHerr: false,
            contactDrawner: false,
            categorieListDamen: [],
            categorieListHerren: [],
            categorieListKinder: [],
            itemList: [],
            itemListPort: [],
            itemListTaschen: [],
            itemListRucksack: [],
        }
    }, methods: {
        sectionPort() {
            this.showPort = true;
            this.showAll = false;
            this.showTaschen = false;
            this.showRucksack = false;
            return this.showPort;
        },
        sectionTaschen() {
            this.showTaschen = true;
            this.showRucksack = false;
            this.showAll = false;
            this.showPort = false;
            return this.showTaschen;
        },
        sectionRucksack() {
            this.showRucksack = true;
            this.showTaschen = false;
            this.showAll = false;
            this.showPort = false;
            return this.showRucksack;
        },
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
        toDamenShop() {
            this.$router.push("/damenshop")
        },
        toHerrenShop() {
            this.$router.push("/herrenshop")
        },
        toKinderShop() {
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
        this.$appAxios.get("/itemList").then(itemList_response => {
            this.itemList = itemList_response?.data || [];
        })
        this.$appAxios.get("/itemList").then(itemListPort_response => {
            this.itemListPort = itemListPort_response?.data.filter(item => item.itemID === 1) || [];
        })
        this.$appAxios.get("/itemList").then(itemListTaschen_response => {
            this.itemListTaschen = itemListTaschen_response?.data.filter(item => item.itemID === 2) || [];
        })
        this.$appAxios.get("/itemList").then(itemListRucksack_response => {
            this.itemListRucksack = itemListRucksack_response?.data.filter(item => item.itemID === 3) || [];
        })
    },
}
</script>
<style>

.titlebild {
    background-image: url(../img/Ledertasche.webp);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    min-width: 500px;
    min-height: 400px;
}

.titlebild2 {
    background-image: url(../img/LedertascheLimi.webp);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    min-width: 500px;
    min-height: 400px;
}

.one-size {
    writing-mode: vertical-rl;
    /* Yukarıdan aşağıya doğru yazdırır */
    text-orientation: upright;
    /* Yatay yönde metni düzenler */
}

.items-data {
    max-width: 250px;
}

.items-bild {
    z-index: 2;
}

.eklebutonu {
    opacity: 0;
    transition: .4s ease-in-out;
}

.items-data:hover .eklebutonu {
    opacity: 1;
    bottom: 0;
    right: -40px;
}</style>