<template>
    <section class="w-full bg-main-color2 md:flex items-center md:px-20 gap-3 pt-10">
        <article class="flex-1 text-white md:px-5 px-5">
            <h2 class="aboutus text-7xl">Über uns...</h2>
            <p class="text-xl pt-3 pb-3 opacity-90">Unsere Tradition der Handwerkskunst seit <strong>1880</strong></p>
            <span class="opacity-80">Im Jahr 1880 begann unsere Geschichte mit der Herstellung von handgefertigten Lederbrieftaschen und
                -taschen. Wir haben uns der Tradition und Handwerkskunst verschrieben und setzen diese Werte bis heute fort.
                Unsere Produkte werden von erfahrenen Handwerkern aus hochwertigen Materialien gefertigt und zeichnen sich
                durch zeitlose Eleganz und Langlebigkeit aus. Wir sind stolz darauf, unsere langjährige Tradition
                fortzusetzen und unseren Kunden Produkte anzubieten, die in Qualität und Schönheit unübertroffen
                sind.</span>
        </article>
        <article class="flex-1 md:p-0 p-5">
            <div class="aboutImg rounded-2xl "></div>
        </article>
    </section>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.aboutImg {
    background-image: url(../img/Women-backbag.webp);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 400px;
    min-width: 300px;
}

.aboutus {
    font-family: 'Anton', sans-serif;
}
@media screen and (max-width: 762px) {
  .smallScreenNone{
    display: none;
  }
}
</style>