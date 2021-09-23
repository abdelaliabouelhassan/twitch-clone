<template>
  <label :for="'toggleB' + this.id">
    <!-- toggle -->
    <div class="relative cursor-pointer">
      <!-- input -->
      <input type="checkbox" :id="'toggleB' + this.id" class="sr-only" />
      <!-- line -->
      <div
        id="bgToggel"
        class="block bg-black w-8 h-5 rounded-full border-2 border-white"
      ></div>
      <!-- dot -->
      <div class="text-lg left-1 -top-1 absolute text-pur">
        <i class="bi bi-check"></i>
      </div>
      <div
        class="
          border-2 border-black
          dot
          absolute
          left-0
          top-0
          bg-white
          w-5
          h-5
          rounded-full
          transition
        "
      ></div>
    </div>
  </label>
</template>


<script>
export default {
    data () {
    return {
      id: null
    }
  }, 
  mounted () {
    this.id = this._uid
  }
}
</script>

<style scoped>
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #9147ff;
}
input:checked ~ #bgToggel {
  border: 2px #9147ff solid;
}
</style>