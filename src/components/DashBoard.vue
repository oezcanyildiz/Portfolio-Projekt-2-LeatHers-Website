<template>
    <main class="w-full top-0 left-0 bg-main-color2">
        <section class="md:flex gap-5 p-5 md:px-20">
            <div class="sectionCard flex-1 md:pl-10 p-5 text-white bg-main-color items-center rounded-2xl flex flex-col relative">
                <h2 class="sectionTitle text-4xl md:pt-10 font">Handgemachte hochwertige Lederhandtaschen und Brieftaschen
                </h2>
                <p class="sectionPara pt-5 md:pr-28 md:text-lg">Unsere handgemachten Lederprodukte vereinen Qualität und Ästhetik
                    auf einzigartige Weise. Jedes unserer handgefertigten Stücke ist aus hochwertigem Leder gefertigt und
                    von erfahrenen Handwerkern hergestellt worden. 
                    <span class="smallScreenNone">
                        Wir bieten eine Vielzahl von Ledertaschen und
                        Brieftaschen an, die Ihre Persönlichkeit und Ihren Stil unterstreichen werden. Finden Sie bei uns das
                        perfekte Accessoire, das Sie durch den Tag begleiten wird.
                    </span>
                </p>
                <div class="w-full text-right md:bottom-0 bottom-15">
                    <button class="bg-main-color3 p-3 rounded-2xl text-center absolute bottom-10 right-10">
                        zum Shop<i class="fa-solid fa-arrow-right pl-1"></i>
                    </button>
                </div>
            </div>
            <div class="flex-1 sectionImg w-full bg-slate-300 rounded-2xl mt-2 md:mt-0">

            </div>
        </section>
        <section class="p-5 rounded-2xl md:px-20">
            <div class="icons-group text-white flex flex-wrap w-full py-10 bg-main-color4 gap-10 justify-center items-center rounded-2xl">
                <div class="flex flex-col">
                    <i class="fa-solid fa-truck text-4xl"></i>
                    <span>Kostenlose Sendung & Returns</span>
                </div>
                <div  class="flex flex-col">
                    <i class="fa-solid fa-cash-register text-4xl"></i>
                    <span>100% Geld zurück Garantie</span>
                </div>  
                <div  class="flex flex-col">
                    <i class="fa-solid fa-hand-holding-heart text-4xl"></i>
                    <span>Hand gefertigt.</span>
                </div>
                <div  class="flex flex-col">
                    <i class="fa-solid fa-leaf text-4xl"></i>
                    <span>Veganes Leder auch möglich</span>
                </div>
                <div  class="flex flex-col">
                    <i class="fa-solid fa-shield-virus text-4xl"></i>
                    <span>Aus antibakterialen Ledern</span>
                </div>
            </div>
        </section>
    </main>
</template>
<script>

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.sectionTitle {
    font-family: 'Anton', sans-serif;
    letter-spacing: 2px;
    padding-top: 1rem;
    padding-right: 1rem;
}

.sectionImg {
    background-image: url(../img/Man-backpack.avif);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 500px;
}
.sectionCard{
    min-height: 450px;
}
@media screen and (max-width: 762px) {
  .smallScreenNone{
    display: none;
  }
}

/* .sectionPara{
    letter-spacing: 1px;
} */</style>