<template>
  <div class="bg-main text-white text-opacity-90 h-screen">
    <navbar />

    <router-view />
  </div>
</template>



<script>
import navbar from "./layouts/navbar";
export default {
  components: {
    navbar,
  },
};
</script>


