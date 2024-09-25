<script setup lang="ts">

import type {SideMenuType} from "~/types/SideMenu";

interface Props {
  menuList: SideMenuType
}
const { menuList } = defineProps<Props>()
</script>


<template>
  <ul class="whitespace-pre-wrap">
    <li v-for="MenuItem in menuList" class="">
      <nuxt-link :to="`/${MenuItem.path}`">
        {{ MenuItem.label }}
      </nuxt-link>
      <ul v-if="MenuItem.menuIds?.length > 0"  class="ml-4">
        <li v-for="MenuHashItem in MenuItem.menuIds" class="">
          <nuxt-link :to="`/${MenuItem.path}/#${MenuHashItem}`">
            {{ MenuHashItem }}
          </nuxt-link>
        </li>
      </ul>
    </li>
  </ul>
</template>