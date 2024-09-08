<script setup lang="ts">
import {HoverEffectContainer} from "vue-hover-effect";

const HoverEffectOptions = computed(() => ({
  image1: '/lib-images/images/Img1.webp',
  image2: '/lib-images/images/Img2.webp',
  displacementImage: '/lib-images/displacements/1.webp',
}))
</script>

<template>
  <div class="container flex justify-center">
    <div class="flex gap-10 md:flex-row flex-col">
      <ClientOnly>
        <HoverEffectContainer
          :options="HoverEffectOptions"
          height="400px"
          width="400px"
        />
      </ClientOnly>
        <div class="max-w-[300px]">
          Hi there

          I recently started developing this library.
          Therefore, excuse me for not giving fully description
          How to use this library
        </div>
    </div>
  </div>
</template>
