<template>
  <!-- HEADER BAR -->
  <section
    class="bg-base-100 shadow-md flex justify-between items-center h-max p-2"
  >
    <div class="w-20"></div>

    <!-- Logo centralizada -->
    <div class="flex-1 flex justify-center">
      <a href="#">
        <span class="sr-only">Vide T-shirts</span>
        <img
          src="./assets/vide-logo.png"
          alt="Vide T-shirts"
          class="h-20 w-auto"
        />
      </a>
    </div>

    <!-- Botão de tema -->
    <div class="flex items-center justify-center w-20">
      <label class="swap swap-rotate">
        <!-- this hidden checkbox controls the state -->
        <input
          ref="themeSet"
          type="checkbox"
          class="theme-controller"
          value="dark"
          @change="setDarkTheme"
        />

        <!-- sun icon -->
        <svg
          class="swap-off h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
          />
        </svg>

        <!-- moon icon -->
        <svg
          class="swap-on h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
          />
        </svg>
      </label>
    </div>
  </section>

  <!-- MAIN CONTENT -->
  <section class="flex justify-center w-full">
    <div class="lg:px-50 md:px-35 sm:px-10">
      <div
        class="flex flex-col justify-center items-center text-center h-max my-5"
      >
        <HeroSection />
      </div>

      <div class="divider mb-10"></div>

      <div class="flex h-max justify-center my-5">
        <Benefits />
      </div>

      <div class="divider mb-10"></div>

      <div class="flex flex-col items-center justify-center my-5">
        <Collection />
      </div>

      <div class="divider mb-10"></div>

      <div
        class="flex flex-col justify-center items-center text-center h-max my-5"
      >
        <About />
      </div>

      <div class="divider mb-10"></div>

      <div
        class="flex flex-col justify-center items-center text-center h-max my-5"
      >
        <Contact />
      </div>

      <div class="divider mb-10"></div>
    </div>
  </section>

  <!-- Botão WhatsApp Flutuante -->
  <div
    class="fixed bottom-22 w-full flex justify-center lg:justify-end md:justify-end"
  >
    <a
      href="https://wa.me/5581971182390?text=Olá! Vim pelo site e gostaria de saber mais sobre seus produtos."
      target="_blank"
      class="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse lg:mr-5 md:mr-5"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
        />
      </svg>
      <span class="font-bold text-lg whitespace-nowrap"
        >Comprar no WhatsApp</span
      >
    </a>
  </div>
  
  <!-- FOOTER -->
  <Footer />

  <!-- NAV BAR -->
  <NavBar />
</template>

<script setup>
import { onMounted, ref } from "vue";
import About from "./components/About.vue";
import Benefits from "./components/Benefits.vue";
import Collection from "./components/Collection.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import HeroSection from "./components/HeroSection.vue";
import NavBar from "./components/NavBar.vue";

const themeSet = ref(null);

function setDarkTheme() {
  const isDark = themeSet.value.checked;

  if (isDark) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "mytheme");
    localStorage.setItem("theme", "mytheme");
  }
}

onMounted(() => {
  // Pega o tema salvo ou usa o padrão do sistema
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);

  // Aplica o tema
  if (isDark) {
    document.documentElement.setAttribute("data-theme", "dark");
    if (themeSet.value) {
      themeSet.value.checked = true;
    }
  } else {
    document.documentElement.setAttribute("data-theme", "mytheme");
    if (themeSet.value) {
      themeSet.value.checked = false;
    }
  }

  // Salva no localStorage se ainda não existe
  if (!savedTheme) {
    localStorage.setItem("theme", isDark ? "dark" : "mytheme");
  }
});
</script>

<style scoped></style>
