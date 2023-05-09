<template>
    <div class="bg-main-color">
        <div class="flex flex-col p-10 gap-5">
            <div class="text-center text-white text-4xl font-bold underline">
                <h2>Unsere Produkten</h2>
            </div>
            <div class="flex justify-center items-center gap-5">
                <div class=" flex flex-col gap-5">
                    <div v-for="fotos in fotosGroup1" :key="fotos.id">
                        <img :src="fotos.url" class="w-60" :alt="fotos.name">
                    </div>
    
                </div>
                <div class=" flex flex-col gap-5">
                    <div v-for="fotos in fotosGroup2" :key="fotos.id">
                        <img :src="fotos.url" class="w-60" :alt="fotos.name">
                    </div>
    
                </div>
                <div class=" flex flex-col gap-5">
                    <div v-for="fotos in fotosGroup3" :key="fotos.id">
                        <img :src="fotos.url" class="w-60" :alt="fotos.name">
                    </div>
    
                </div>
                <div class="flex flex-col gap-5">
                    <div v-for="fotos in fotosGroup4" :key="fotos.id">
                        <img :src="fotos.url" class="w-60" :alt="fotos.name">
                    </div>
    
                </div>
            </div>
        </div>
    </div>





</template>
<script>
export default {
    data() {
        return {
            fotosGroup1: [
                {
                    "id": 1,
                    "url": "src/img/LedertascheLimi.webp",
                    "name": "item1"
                },
                {
                    "id": 2,
                    "url": "src/img/Women-purse.jpeg",
                    "name": "item2"
                },
                {
                    "id": 3,
                    "url": "src/img/KinderSchoolbagback.jpeg",
                    "name": "item3"
                },
            ],
            fotosGroup2: [
                {
                    "id": 9,
                    "url": "src/img/rucksack3.webp",
                    "name": "item9"
                },
                {
                    "id": 5,
                    "url": "src/img/herrenportmonieee.jpeg",
                    "name": "item5"
                },
                {
                    "id": 6,
                    "url": "src/img/Ledertasche.webp",
                    "name": "item6"
                },
            ],
            fotosGroup3: [
                {
                    "id": 7,
                    "url": "src/img/Geldboerse.webp",
                    "name": "item7"
                },
                {
                    "id": 8,
                    "url": "src/img/Women-backbag.webp",
                    "name": "item8"
                },

                {
                    "id": 4,
                    "url": "src/img/Arbeitstasche.jpeg",
                    "name": "item4"
                },

            ],
            fotosGroup4: [
            {
                    "id": 10,
                    "url": "src/img/KinderSchoolbagback.jpeg",
                    "name": "item3"
                },
                {
                    "id": 6,
                    "url": "src/img/Women-purse.jpeg",
                    "name": "item6"
                },
                {
                    "id": 9,
                    "url": "src/img/Backback-women.jpeg",
                    "name": "item9"
                },
            ]
        }
    },
}

</script>