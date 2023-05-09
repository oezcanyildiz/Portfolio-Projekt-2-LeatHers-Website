<template>
  <appHeader></appHeader>
  <div class="bg-main-color2 w-full p-10">
    <div class="bg-main-color w-full h-full rounded-2xl p-5">
      <p class="text-2xl text-white font-bold text-center mb-6">
        Wir freuen uns auf Ihre Feedbacks und Bewertungen, um uns ständig zuverbesssern.
      </p>
      <div class="">
        <form action="">
          <div class="mb-6">
            <label for="name">Ihre Name</label>
            <input type="text" id="name" class="name">
          </div>
          <div class="mb-6">
            <label for="email">Ihre Email</label>
            <input type="email" id="email" class="email" required>
          </div>
          <div>
            <textarea name="massage" id="massage" cols="30" rows="10"></textarea>
          </div>
        </form>
      </div>
    </div>
  </div>
  <appFooter></appFooter>
</template>