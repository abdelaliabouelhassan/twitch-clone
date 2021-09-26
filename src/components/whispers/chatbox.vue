<template>

    <div v-if="open" @click=" open = !open" class=" cursor-pointer w-full h-12 bg-sec mt-auto  border border-gray-600 p-2 rounded" >
      <div class="flex justify-between items-center text-sm space-x-10">
        <h3>samir_0iq</h3>
        <div class="flex">
          <button class=" hover:bg-gray-500 p-1 rounded">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
      </div>
    </div>
    <div v-else class="bg-main w-full h-full rounded  relative">
      <div class="w-full bg-sec bg-opacity-20 border border-gray-600 p-2 cursor-pointer" @click=" open = !open">
        <div class="flex justify-between items-center text-sm">
          <h3>samir_0iq</h3>
          <div class="flex space-x-4">
            <button class=" hover:bg-gray-500 p-1 rounded">
              <i class="bi bi-gear"></i>
            </button>
            <button class=" hover:bg-gray-500 p-1 rounded">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
      </div>

      <div class=" h-4/5 overflow-y-auto  py-1 px-2 break-words">
        <span
          class="text-xs text-gray-500 block"
        >Please don't share passwords or personal information.</span>
        <span class="text-gray-400 py-4 text-xs flex">
          <span class="m-auto">26/9/2021, 13:40:27 PM</span>
        </span>
        <div class="space-x-2 text-sm py-2" v-for="(item,index,key) in messages" :key="key">
          <span class="text-white" :style="'color:' + item.color">
            {{ item.name }}
            <span class=" text-text-main">: {{item.text}}</span>
          </span>
        </div>
      </div>

        <div class=" p-2  absolute w-full bottom-0" >
        
              <input 
              
                class="
                  w-full
                  bg-sec
                  p-1
                  pr-9
                  rounded
                  focus:bg-black
                  focus:outline-none
                  focus:ring-purple-500 focus:ring-2
              
                ">
            
              
              <button
                class="
                  text-white
                  hover:bg-gray-500
                  
                  rounded
                  absolute
                  right-4
                  top-2
                  text-lg
                "
              >
                <i class="bi bi-emoji-smile"></i>
              </button>
        </div>
    </div> 

 
</template>



<script>
export default {
  data() {
    return {
      open:false,
      messages: [
        {
          name: "DivinityInDisguise",
          text: "Hello",
          color: "",
        },
        {
          name: "Im_the_master",
          text: "sup",
          color: "#ff9147",
        },
        {
          name: "DivinityInDisguise",
          text: "good & u ?",
          color: "",
        },
        {
          name: "Im_the_master",
          text: "im fine",
          color: "#ff9147",
        },
        {
          name: "DivinityInDisguise",
          text: "what are you doing now ?",
          color: "",
        },
        {
          name: "DivinityInDisguise",
          text: "hello ?",
          color: "",
        },
         {
          name: "DivinityInDisguise",
          text: "hello ?",
          color: "",
        },
         {
          name: "DivinityInDisguise",
          text: "hello ?",
          color: "",
        },
         {
          name: "DivinityInDisguise",
          text: "hello ?",
          color: "",
        },
         {
          name: "DivinityInDisguise",
          text: "hello ?",
          color: "",
        },
         {
          name: "DivinityInDisguise",
          text: "hello ?",
          color: "",
        },
         {
          name: "DivinityInDisguise",
          text: "hello ?",
          color: "",
        },
         {
          name: "DivinityInDisguise",
          text: "hello ?",
          color: "",
        },

      ],
    };
  },
};
</script>