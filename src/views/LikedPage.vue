<template>
    

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-20">
    <div class="grid gap-4" v-for="items in fotosGroup1 " :key="items.id">
        <div>
            <img class="h-auto max-w-full rounded-lg" :src="items.url" alt="">
        </div>
    </div>
    <div class="grid gap-4" v-for="items in fotosGroup2 " :key="items.id">
        <div>
            <img class="h-auto max-w-full rounded-lg" :src="items.url" alt="">
        </div>
    </div>
    <div class="grid gap-4" v-for="items in fotosGroup3 " :key="items.id">
        <div>
            <img class="h-auto max-w-full rounded-lg" :src="items.url" alt="">
        </div>
    </div>
    <div class="grid gap-4" v-for="items in fotosGroup4 " :key="items.id">
        <div>
            <img class="h-auto max-w-full rounded-lg" :src="items.url" alt="">
        </div>
    </div>
</div>


</template>
<script>
export default{
    data() {
        return {
            fotosGroup1:[
            {
                    "id":1,
                    "url":"src/img/LedertascheLimi.webp",
                    "name":"item1"
                },
                {
                    "id":2,
                    "url":"src/img/Women-purse.jpeg",
                    "name":"item2"
                },
                {
                    "id":3,
                    "url":"src/img/KinderSchoolbagback.jpeg",
                    "name":"item3"
                },

            ],
            fotosGroup3:[
                {
                    "id":7,
                    "url":"src/img/Geldboerse.webp",
                    "name":"item7"
                },
                {
                    "id":8,
                    "url":"src/img/Women-backbag.webp",
                    "name":"item8"
                },
                {
                    "id":9,
                    "url":"src/img/rucksack3.webp",
                    "name":"item9"
                },

            ],
            fotosGroup2:[
            {
                    "id":4,
                    "url":"src/img/Arbeitstasche.jpeg",
                    "name":"item4"
                },
                {
                    "id":5,
                    "url":"src/img/herrenportmonieee.jpeg",
                    "name":"item5"
                },
                {
                    "id":6,
                    "url":"src/img/Ledertasche.webp",
                    "name":"item6"
                },
            ],
            fotosGroup4:[
            {
                    "id":10,
                    "url":"src/img/LedertascheLimi.webp",
                    "name":"item1"
                },
                {
                    "id":11,
                    "url":"src/img/Women-purse.jpeg",
                    "name":"item2"
                },
                {
                    "id":12,
                    "url":"src/img/KinderSchoolbagback.jpeg",
                    "name":"item3"
                },
            ]
        }
    },
}

</script>