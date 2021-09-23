<template>
  <div class="h-full pt-12">
    <div class="flex h-full">
      <!--Left  -->
      <div class="w-1/5 font-semibold relative">
        <div class="overflow-y-auto w-full h-full p-2 pt-3">
          <div class="flex justify-between items-center">
            <h3 class="uppercase text-sm">Followed channels</h3>
            <button class="hover:bg-sec rounded p-1">
              <i class="bi bi-arrow-bar-left font-extrabold text-lg"></i>
            </button>
          </div>
          <div
            class="flex justify-between items-center py-1 px-2 hover:bg-sec bg-opacity-10 cursor-pointer"
            v-for="(n,index,key) in 50"
            :key="key"
          >
            <div class="flex space-x-2 items-center text-sm">
              <img
                class="rounded-full h-8"
                src="https://static-cdn.jtvnw.net/jtv_user_pictures/forsen-profile_image-48b43e1e4f54b5c8-70x70.png"
                alt
              />
              <div>
                <h4>forsen</h4>
                <span class="text-xs text-gray-500 text-opacity-90">just Chatting</span>
              </div>
            </div>

            <div class="flex items-center space-x-1 text-sm">
              <div class="bg-red-600 h-2 w-2 rounded-full"></div>
              <span>9k</span>
            </div>
          </div>
        </div>

        <div class="border-t border-sec p-2 absolute bottom-0 bg-main">
          <input type="text" name id class="w-full bg-sec p-1 pl-8 rounded relative focus:outline-none focus:ring-purple-500 focus:ring-2 placeholder-gray-400"  placeholder="Search to Add Friends"/>
          <i class="bi bi-search absolute left-4 top-3 text-gray-400" ></i>
        </div>
      </div>
      <!--Center  -->
      <div class="bg-white w-full">2</div>
      <!-- Right -->
      <div class="bg-pur w-1/4">3</div>
    </div>
  </div>
</template>


<script>
export default {};
</script>


<style scoped>
/* width */
::-webkit-scrollbar {
  width: 15px;
  height: 16px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #18181b;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #2a2a2b;
  border-radius: 100vh;
  border: 3px solid #18181b;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #18181b;
}
</style>