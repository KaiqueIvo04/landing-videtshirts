<template>
  <div
    class="relative overflow-hidden lg:size-150 w-90 rounded-2xl shadow-2xl bg-gray-200"
  >
    <div
      class="flex h-full transition-transform duration-700 ease-in-out bg-blue-100"
      :style="containerStyle"
    >
      <div
        v-for="(img, i) in images"
        :key="i"
        class="h-full flex-shrink-0 border-0"
        :style="slideStyle"
      >
        <img
          :src="img"
          class="w-full h-full object-cover"
          :alt="`Slide ${i + 1}`"
        />
      </div>
    </div>

    <div
      class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
    >
      <button class="btn btn-circle" @click="prevSlide">❮</button>
      <button class="btn btn-circle" @click="nextSlide">❯</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { util } from "../utils/util";

const images = ref([]);
const currentIndex = ref(0);
let intervalId;

const totalImages = computed(() => images.value.length);

const containerStyle = computed(() => ({
  transform: `translateX(-${(currentIndex.value * 100) / totalImages.value}%)`,
  width: `${totalImages.value * 100}%`,
}));

const slideStyle = computed(() => ({
  width: totalImages.value > 0 ? `${100 / totalImages.value}%` : "100%",
}));

async function loadImages() {
  images.value = await util.loadImagesFromCSV(
    import.meta.env.VITE_URL_CARROSEL
  );
}

function nextSlide() {
  if (totalImages.value === 0) return;
  currentIndex.value = (currentIndex.value + 1) % totalImages.value;
}

function prevSlide() {
  if (totalImages.value === 0) return;
  currentIndex.value =
    (currentIndex.value - 1 + totalImages.value) % totalImages.value;
}

onMounted(async () => {
  await loadImages();
  if (totalImages.value > 0) {
    intervalId = setInterval(nextSlide, 3000);
  }
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>
