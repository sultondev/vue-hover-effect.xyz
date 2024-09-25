<script setup lang="ts">

</script>

<template>
  <div class="">
    <Nav />
    <div class="grid grid-cols-5">
      <SideMenu class="col-span-1" />
      <div class="col-start-2 col-end-6" >
        <slot />
      </div>
    </div>
  </div>
</template>