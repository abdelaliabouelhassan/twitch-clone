<template>
  <div class="bg-main text-white text-opacity-90 h-screen relative">
    <navbar />

    <router-view />
    <div class="absolute   bottom-0 right-96 z-40  w-fill h-2/5 flex space-x-2 overflow-x-auto ">
      <chatbox class="" />
      <chatbox />
      
  
    </div>
  </div>
</template>



<script>
import navbar from "./layouts/navbar";
import chatbox from "./components/whispers/chatbox.vue";
export default {
  components: {
    navbar,
    chatbox,
  },
};
</script>


