<template>
    <appHeader></appHeader>
    <div class="md:px-20 md:py-10 bg-main-color2">
        <div class="bg-main-color4 w-full md:p-20 rounded-2xl">
            <div class=" w-full flex flex-col gap-5">
                <div class="border border-dashed border-1 p-1 flex justify-center items-center">
                    <div class="flex-1 bg-main-color3 md:p-5 h-20 md:h-56 flex justify-center items-center">
                        <p class="flex-1 text-center md:text-3xl font-weight md:p-10 p-2 text-white bg-main-color3">Gutschein für neue Kunden.</p>
                    </div>
                    <div class="flex-1 bg-main-color3 md:p-5 h-20 md:h-56 flex justify-center items-center relative rabatt">
                        <p class="flex-1 text-center md:text-3xl font-weight md:p-10 p-2 text-white bg-red-600 cursor-pointer frontside absolute md:px-20">15% RABATT.</p>
                        <p class="flex-1 text-center md:text-3xl font-weight md:p-10 p-2 text-white bg-red-600 cursor-pointer backside absolute md:px-20">Kod: Leathers2023</p>
                    </div>

                </div>

                <form class="p-5">
                    <div class="mb-6">
                        <label for="newname" class="block mb-2 text-sm font-medium text-white dark:text-white">Ihre
                            Name</label>
                        <input type="text" id="newname" v-model="userData.name"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Name" required>
                    </div>
                    <div class="mb-6">
                        <label for="newemail" class="block mb-2 text-sm font-medium text-white dark:text-white">Ihre
                            Email</label>
                        <input type="email" id="newemail" v-model="userData.email"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="abc@gmail...." required>
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Ihre
                            Password</label>
                        <input type="password" id="password" v-model="userData.password"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required>
                    </div>
                    <div class="flex items-start mb-6">
                        <div class="flex items-center h-5">
                            <input id="terms" type="checkbox" value=""
                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                required>
                        </div>
                        <label for="terms" class="ml-2 text-sm font-medium text-white dark:text-gray-300">I agree with
                            the <a href="#" class="text-blue-200 hover:underline dark:text-blue-500">
                                <strong>
                                    terms and
                                    conditions
                                </strong> </a></label>
                    </div>
                        <button type="submit" @click="onSave"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full">Senden</button>

                    </form>
            </div>
        </div>
    </div>
    <appFooter></appFooter>
</template>
<script>
import CryptoJS from "crypto-js"
export default{
    data() {
        return {
            userData:{
                name: null,
                email:null,
                password:null
            }
        }
    },
    methods: {
        onSave(){
            const password =CryptoJS.HmacSHA1(this.userData.password,this.$store.getters._saltKey).toString();
            this.$appAxios.post("/users",{...this.userData,password}).then(registere_user_response=>{
                console.log(registere_user_response)
                this.$router.push({name :"HomePage"})
            })

        }
    },
}
</script>

<style>
.rabatt {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.frontside, .backside {
  position: absolute;
  backface-visibility: hidden;
}

.backside {
  transform: rotateY(180deg);
}
.rabatt:hover {
  transform: rotateY(180deg);
}

</style>