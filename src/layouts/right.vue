<template>
  <div class="bg-main w-1/4 border-l border-gray-700 relative ">
  
      <div class="flex justify-between items-center p-2 text-lg font-semibold absolute top-0 w-full bg-main">
        <button class="hover:bg-sec p-1 rounded">
          <i class="bi bi-arrow-bar-right"></i>
        </button>
        <span class="text-sm">STREAM CHAT</span>
        <button class="hover:bg-sec p-1 rounded">
          <i class="bi bi-people-fill"></i>
        </button>
      </div>
      <div class="border-t border-b border-gray-700 p-2 absolute w-ful bg-main top-12">
        <div class="flex justify-between">
          <button
            class="hover:bg-sec p-1 rounded"
            @click="ChangeAds(selectedIndex--)"
          >
            <i class="bi bi-chevron-left"></i>
          </button>
          <div
            class="hover:bg-sec hover:opacity-90 cursor-pointer"
            v-for="(item, index, key) in ads"
            :key="key"
            v-show="index == selectedIndex"
          >
            <div class="flex space-x-1 items-center py-5 px-12">
              <img class="h-7" :src="item.img" alt="" />
              <span class="font-semibold text-pur text-sm">{{
                item.title
              }}</span>
            </div>
            <div
              class="
                w-10
                h-2
                bg-sec
                cursor-pointer
                m-auto
                rounded
                hover:bg-black
              "
            ></div>
          </div>
          <button
            class="hover:bg-sec p-1 rounded"
            @click="ChangeAds(selectedIndex++)"
          >
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>  
      <div class=" w-full  pl-1  pt-3  absolute top-36" style=" height:73%">
        <div class="px-2 text-sm overflow-y-auto h-auto max-h-full  ">
          <span class="text-gray-400">Welcome to the chat room!</span>
          <div class="py-1" v-for="(item, index, key) in messages" :key="key">
            <div
              class="
                hover:bg-sec
                rounded
                cursor-pointer
                w-full
                px-2
                space-x-1
                break-words
              "
            >
           
              <span
                class="
                  hover:bg-gray-600
                  rounded
                  cursor-pointer
                  text-yellow-300 text-sm
                   space-x-1
                "
                :style="'color:' + item.color"
              >
              <span v-for="(badge,i,k) in item.badges" :key="k" class=" inline-block">
                <img :src="badge" alt="">
            </span>   {{ item.name }} <span class="text-white">:</span>
              </span>
              <p class="text-sm inline-block">
                {{ item.text }}
              </p>
            </div>
          </div>
        </div> 

        <div>
       </div>    
      </div>
      <div class=" absolute w-full left-0   bottom-0">
          <div class=" border-sec p-2  bg-main w-full">
         <div class=" py-2 relative">
       
            <textarea 
             placeholder="Send a message"
              class="
                w-full
                bg-sec
                p-2
                pl-8
                rounded
                relative
                focus:outline-none
                focus:ring-purple-500 focus:ring-2
                placeholder-gray-400
              " name="Text1" cols="40" rows="1"></textarea>
            <button
              class="
                bg-gray-500
                p-1
                rounded
                absolute
                left-2
                top-4
                text-gray-400 text-xs
              "
            >
              <i class="bi bi-star"></i>
            </button>
            <button
              class="
                hover:bg-gray-500
                p-1
                rounded
                absolute
                right-14
                top-4
                text-gray-400 text-sm
              "
            >
              <i class="bi bi-diamond-half"></i>
            </button>
            <button
              class="
                hover:bg-gray-500
                p-1
                rounded
                absolute
                right-6
                top-4
                text-gray-400 text-sm
              "
            >
              <i class="bi bi-emoji-smile"></i>
            </button>
         </div>

            <div class="py-1 px-4  flex justify-between items-center">
              <button class="text-pur space-x-2 hover:bg-sec px-1 rounded">
                <i class="bi bi-circle"></i>
                <span class="text-gray-400 text-sm">1.1k</span>
              </button>
              <div class="space-x-2">
                <button class="hover:bg-sec px-1 rounded">
                  <i class="bi bi-gear"></i>
                </button>
                <button class="bg-pur px-2 rounded hover:bg-purple-600">
                  Chat
                </button>
              </div>
            </div>
          </div>
     </div>  
    
  </div>
</template>


<script>
export default {
  methods: {
    ChangeAds(i) {
      if (i >= this.ads.length - 1) {
        this.selectedIndex = 0;
      } else if (i <= 0) {
        this.selectedIndex = this.ads.length - 1;
      }
    },
  },
  data() {
    return {
      selectedIndex: 0,
      ads: [
        {
          title: "Cheer now to be #1",
          img: "https://static.twitchcdn.net/assets/BitsBadge-Gold_72-8ec648ad9308e561815f.png",
        },
        {
          title: "Fift a Sub now to be #1!",
          img: "https://static.twitchcdn.net/assets/GiftBadge-Gold_72-6e5e65687a6ca6959e08.png",
        },
      ],
      messages: [
        {
          name: "im_the_master",
          badges: [
            "https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/1",
            "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1",
            "https://static-cdn.jtvnw.net/badges/v1/3158e758-3cb4-43c5-94b3-7639810451c5/1",
            "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/1",
            "https://cdn.betterttv.net/tags/bot.png",
            "https://static-cdn.jtvnw.net/badges/v1/1d4b03b9-51ea-42c9-8f29-698e3c85be3d/1",
            "https://static-cdn.jtvnw.net/badges/v1/73b5c3fb-24f9-4a82-a852-2f475b59411c/1",
          ],
          color: "#ec8627",
          text: "hello !",
        },
        {
          name: "black_cover",
          badges: [
            "https://static-cdn.jtvnw.net/badges/v1/73b5c3fb-24f9-4a82-a852-2f475b59411c/1",
          ],
          color: "#8ce22f",
          text: "lol you are so bad hahahaha !",
        },
        {
          name: "singed_main",
          badges: [],
          color: "#442fe2",
          text: "hello !",
        },
        {
          name: "gyuukii",
          badges: [
            "https://static-cdn.jtvnw.net/badges/v1/3158e758-3cb4-43c5-94b3-7639810451c5/1",
            "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/1",
          ],
          color: "#db1f81",
          text: "don't host damysus he's trying to get to partner and host makes his viewers higher",
        },
        {
          name: "StreamElement",
          badges: [
            "https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/1",
            "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1",
          ],
          color: "#731cf5",
          text: " Support the stream with a FREE SUBSCRIPTION! Link an Amazon Prime to your Twitch account ",
        },
        {
          name: "pipiga",
          badges: [
            "https://static-cdn.jtvnw.net/badges/v1/73b5c3fb-24f9-4a82-a852-2f475b59411c/1",
          ],
          color: "#ec8627",
          text: "@gyuukii DAF3 Lpartner",
        },
        {
          name: "spiderRuner",
          badges: ["https://cdn.betterttv.net/tags/bot.png"],
          color: "#ec8627",
          text: "drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM drmzJAM",
        },
        {
          name: "thedude",
          badges: [
            "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/1",
            "https://static-cdn.jtvnw.net/badges/v1/1d4b03b9-51ea-42c9-8f29-698e3c85be3d/1",
            "https://static-cdn.jtvnw.net/badges/v1/73b5c3fb-24f9-4a82-a852-2f475b59411c/1",
          ],
          color: "#ec8627",
          text: "let's fucking gooooooooooooooo",
        },
        {
          name: "lame_fifi",
          badges: [
            "https://static-cdn.jtvnw.net/badges/v1/3158e758-3cb4-43c5-94b3-7639810451c5/1",
          ],
          color: "#15e6d5",
          text: "niceuuuuu !",
        },
        {
          name: "black_nova",
          badges: [
            "https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/1",
          ],
          color: "#ec8627",
          text: "ayaya that is great +1 !",
        },
        {
          name: "the_giat",
          badges: [
            "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1",
            "https://static-cdn.jtvnw.net/badges/v1/3158e758-3cb4-43c5-94b3-7639810451c5/1",
          ],
          color: "#ec8627",
          text: "noooooooooooooooooo what are you doing ?",
        },
        {
          name: "yesPlease",
          badges: [
            "https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/1",
          
          ],
          color: "#ec8627",
          text: "ok !",
        },
         {
          name: "yesPlease",
          badges: [
            
            "https://static-cdn.jtvnw.net/badges/v1/1d4b03b9-51ea-42c9-8f29-698e3c85be3d/1",
          
          ],
          color: "#ec8627",
          text: "ok !",
        },
         {
          name: "yesPlease",
          badges: [
         
            "https://static-cdn.jtvnw.net/badges/v1/73b5c3fb-24f9-4a82-a852-2f475b59411c/1",
          ],
          color: "#ec8627",
          text: "ok !",
        },
         {
          name: "yesPlease",
          badges: [
      
            "https://static-cdn.jtvnw.net/badges/v1/73b5c3fb-24f9-4a82-a852-2f475b59411c/1",
          ],
          color: "#ec8627",
          text: "ok !",
        },
         {
          name: "yesPlease",
          badges: [
            "https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/1",
            
          ],
          color: "#ec8627",
          text: "ok !",
        },
         {
          name: "yesPlease",
          badges: [
     
          ],
          color: "#ec8627",
          text: "ok !",
        },
         {
          name: "yesPlease",
          badges: [
         
            "https://cdn.betterttv.net/tags/bot.png",
           
          ],
          color: "#ec8627",
          text: "ok !",
        },
         {
          name: "yesPlease",
          badges: [
            "https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/1",
           
          ],
          color: "#ec8627",
          text: "ok !",
        },
         {
          name: "yesPlease",
          badges: [
   
            "https://static-cdn.jtvnw.net/badges/v1/1d4b03b9-51ea-42c9-8f29-698e3c85be3d/1",
            "https://static-cdn.jtvnw.net/badges/v1/73b5c3fb-24f9-4a82-a852-2f475b59411c/1",
          ],
          color: "#ec8627",
          text: "ok !",
        },
         {
          name: "yesPlease",
          badges: [
            "https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/1",
            "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1",
            
          ],
          color: "#ec8627",
          text: "ok !",
        },
      
      ],
    };
  },
};
</script>