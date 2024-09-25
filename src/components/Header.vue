<script setup lang="ts">
const { $api } = useNuxtApp()

const { data: packageModule } = await useAsyncData('modules', () => $api('/vue-hover-effect/latest'))
</script>

<template>
  <div class="">
    <nuxt-link to="/" class="relative m-4 max-w-48 block">
      <LazyIcon name="my-icon:vhe-icon" size="40" />
      <Tag severity="warn" class="absolute -bottom-6 right-2" :value="packageModule.version"></Tag>
    </nuxt-link>
  </div>
</template>