<script setup lang="ts">
import {SideMenu} from "~/constants";

</script>

<template>
  <div class="side-menu">
    <SideMenuItem :menu-list="SideMenu" />
  </div>
</template>