<script setup lang="ts">
import HelloWorld from "@/components/apps/HelloWorld.vue";
import PokemonGames from "./apps/PokemonGames.vue";
</script>

<template>
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <HelloWorld />
      </div>
    </div>
  </div>
  <PokemonGames />
</template>
