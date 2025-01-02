<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const PokemonGames = defineAsyncComponent({
  loader: () => import("remote_games_app/Games"),
  loadingComponent: {
    template: "<div>Loading...</div>",
  },
  delay: 200, // แสดง loading หลังจาก 200ms
  timeout: 3000, // timeout หลังจาก 3 วินาที
});
</script>

<template>
  <PokemonGames />
</template>
