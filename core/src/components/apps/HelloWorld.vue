<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const HelloWorld = defineAsyncComponent({
  loader: () => import("remote_app/HelloWorld"),
  loadingComponent: {
    template: "<div>Loading...</div>",
  },
  delay: 200, // แสดง loading หลังจาก 200ms
  timeout: 3000, // timeout หลังจาก 3 วินาที
});
</script>

<template>
  <HelloWorld />
</template>
