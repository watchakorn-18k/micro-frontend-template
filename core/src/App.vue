<script setup lang="ts">
import { RouterView } from "vue-router";
import TheNavbar from "./components/TheNavbar.vue";
</script>

<template>
  <div>
    <TheNavbar />
    <RouterView />
  </div>
</template>
