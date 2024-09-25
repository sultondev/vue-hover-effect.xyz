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
        <HoverEffectContainer
          :options="HoverEffectOptions"
          height="400px"
          width="400px"
        />
        <div class="max-w-[300px]">
          <article class="mb-2 whitespace-pre-wrap">
          Hi there

          I recently started developing this library.
          Therefore, excuse me for not giving fully description
          How to use this library
          </article>

          <article>
            I'm open to any kind of help
            contact me on telegram me on <a href="https://t.me/sultondev" class="underline text-blue-300">telegram</a>
          </article>

          <article>
            All copyrights and etc. will be written later
          </article>
        </div>
    </div>
  </div>
</template>
