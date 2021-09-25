<template>
  <div class="h-full pt-12">
    <div class="flex h-full">
      <!--Left  -->
      <left></left>
      <!--Center  -->
      <stream></stream>
      <!-- Right -->
     <right></right>
    </div>
  </div>
</template>


<script>
import left from '../layouts/left.vue';
import right from '../layouts/right.vue';
import stream from '../layouts/center.vue';

export default {
  components:{
    left,
    right,
    stream,
  }
};
</script>


