<script setup>
import { ref, onMounted } from "vue";

const dataPokemon = ref([]);

onMounted(async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  dataPokemon.value = await response.json();
  console.log(dataPokemon.results);
});
</script>

<template>
  <div class="remote-game-component">
    <div class="flex flex-wrap gap-4 justify-center">
      <div
        class="card card-compact bg-base-100 w-96 shadow-xl"
        v-for="(pokemon, index) in dataPokemon.results"
        :key="pokemon?.name"
      >
        <figure>
          <img
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
              index + 1
            }.png`"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ pokemon?.name }}</h2>
          <div class="card-actions justify-end">
            <a :href="pokemon.url" class="btn btn-primary"> Explore </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
