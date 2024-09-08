<script setup lang="ts">
import { usePackageVersion } from '~/composables/packageVersion';

const { version } = usePackageVersion('vue-hover-effect');
</script>

<template>
  <div class="">
    <div class="relative m-4">
      <LazyIcon name="my-icon:vhe-icon" size="40" />
      <Tag severity="warn" clas="absolute -bottom-6 -right-8" :value="version"></Tag>
    </div>
  </div>
</template>