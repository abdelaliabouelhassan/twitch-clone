<template>
  <nav class="flex justify-between text-md font-bold p-2 items-center w-full border-b border-black fixed bg-main z-50">
    <div>
      <ul class="flex space-x-8">
        <li>
          <i class="bi bi-twitch text-2xl text-purple-500 cursor-pointer"></i>
        </li>
        <li class="hover:text-purple-500 cursor-pointer">Following</li>
        <li class="hover:text-purple-500 cursor-pointer">Browse</li>
        <span class="border-l border-gray-700 py-0"></span>
        <li class="hover:text-purple-500 cursor-pointer">Esports</li>
        <li class="hover:text-purple-500 cursor-pointer">Music</li>
        <li class="cursor-pointer" @mouseover="ChangeHover(true)" @mouseleave="ChangeHover(false)">
          <i
            @mouseover="HideAll(true)"
            @click="DisplaySubNav(0)"
            class="bi bi-three-dots-vertical hover:bg-gray-500 rounded py-1 px-1"
          ></i>

          <ul
            class="absolute bg-main p-2 font-normal text-xs rounded-md space-y-1 shadow-lg border border-black overflow-y-auto h-auto"
            :class="{ hidden: isOpen != 0 }"
          >
            <span class="text-gray-500 px-2">GENERAL</span>

            <li
              v-for="(item, index, key) in list.data1"
              :key="key"
              class="hover:bg-sec rounded-md py-1 px-2"
            >{{ item }}</li>
            <hr class="py-2" />
            <span class="text-gray-500 px-2">HELP & LEGAL</span>
            <li
              v-for="(item, index, key) in list.data2"
              :key="key"
              class="hover:bg-sec rounded-md py-1 px-2"
            >{{ item }}</li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="space-x-1">
      <input
        type="text"
        placeholder="Search"
        class="rounded-l bg-sec w-80 p-1 px-4 focus:outline-none focus:ring-purple-500 focus:ring-2 placeholder-gray-400"
      />
      <span style="margin: 1px">
        <button
          class="hover:bg-gray-600 rounded-r-md bg-sec text-white font-bold border-black p-1 px-2 focus:outline-none focus:shadow-outline"
        >
          <i class="bi bi-search"></i>
        </button>
      </span>
    </div>

    <div class="flex space-x-3 text-sm items-center font-bold text-white">
      <div class="relative" @mouseover="ChangeHover(true)" @mouseleave="ChangeHover(false)">
        <i
          @mouseover="HideAll(true)"
          @click="DisplaySubNav(1)"
          class="bi bi-card-checklist hover:bg-sec cursor-pointer rounded py-1 px-1"
        ></i>
        <div class="absolute -top-2 left-2 bg-red-600 rounded-3xl text-xs px-1 font-normal">
          55
          <div
            class="absolute bg-main w-96 top-8 right-0 rounded-sm shadow-md"
            :class="{ hidden: isOpen != 1 }"
          >
            <div class="flex p-2 border border-black text-gray-300 font-semibold rounded-md">
              <span class="m-auto">Prime Gaming Loot</span>
              <button class="hover:bg-sec text-lg rounded-sm" @click="isOpen = null">
                <i class="bi bi-x"></i>
              </button>
            </div>
            <div class="overflow-y-auto px-2" style="max-height: 51rem">
              <div v-for="(n, inde, key) in 10" :key="key">
                <div class="py-2 px-6 text-lg font-semibold space-y-2">
                  <h1>Call of Duty: World Series of Warzone Bundle</h1>
                  <div class="rounded-md overflow-hidden">
                    <img
                      class="w-full"
                      src="https://images-na.ssl-images-amazon.com/images/I/41CL8QeVgjL.jpg"
                      alt
                    />
                  </div>
                  <div class="p-1 text-xs flex flex-col">
                    <span class="text-gray-300">In-Game Content: Sept 13 – Oct 12</span>
                    <span class="text-gray-500">Activision Blizzard, Inc</span>
                  </div>

                  <button
                    class="text-white text-md bg-purple-500 hover:bg-pur py-1 w-full my-4 rounded-md shadow-md"
                  >Start Your Free Trial</button>
                </div>
                <div class="p-1 border-b border-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative" @mouseover="ChangeHover(true)" @mouseleave="ChangeHover(false)">
        <i
          @mouseover="HideAll(true)"
          @click="DisplaySubNav(2)"
          class="bi bi-archive hover:bg-sec rounded py-1 px-1 cursor-pointer"
        ></i>

        <div
          class="absolute bg-main w-96 top-8 right-0 rounded-sm shadow-md"
          :class="{ hidden: isOpen != 2 }"
        >
          <div class="flex justify-between p-2 border border-black font-semibold text-md">
            <div class="hover:bg-sec bg-opacity-25 rounded p-1 cursor-pointer">
              <i class="bi bi-envelope-open"></i>
            </div>

            <div>
              <span>Notifications</span>
            </div>
            <div class="space-x-4">
              <button class="hover:bg-sec bg-opacity-25 rounded p-1">
                <i class="bi bi-gear-fill"></i>
              </button>
              <button class="hover:bg-sec bg-opacity-25 rounded p-1" @click="isOpen = null">
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
          </div>

          <div>
            <div class="flex justify-evenly pt-6">
              <button
                class="focus:text-purple-500 border-b focus:border-purple-500 border-gray-700 p-1 w-full overflow-hidden delay-100 origin-top duration-300 scale-y-0 focus:transform"
                @click="inboxSwitch = true"
                :class="{
                  'border-purple-500': inboxSwitch,
                  'text-purple-500': inboxSwitch,
                }"
              >My Twitch</button>
              <button
                class="focus:text-purple-500 border-b focus:border-purple-500 border-gray-700 p-1 w-full overflow-hidden delay-100 origin-top duration-300 scale-y-0 focus:transform"
                @click="inboxSwitch = false"
                :class="{
                  'border-purple-500': !inboxSwitch,
                  'text-purple-500': !inboxSwitch,
                }"
              >My Channel (1)</button>
            </div>

            <div class="pt-4 overflow-y-auto h-auto max-h-96">
              <div class="px-4">
                <span class="text-gray-600 text-md">MOST RECENT</span>
              </div>

              <div v-show="inboxSwitch">
                <div
                  class="flex relative items-start space-x-4 hover:bg-gray-100 hover:bg-opacity-25 py-4 w-full px-4 cursor-pointer"
                  @mouseover="hoverClose = index"
                  @mouseleave="hoverClose = null"
                  v-for="(n, index, key) in 10"
                  :key="key"
                >
                  <div class="rounded-full bg-black h-10">
                    <img
                      src="https://static-cdn.jtvnw.net/growth-assets/twitch_uv_glitch_purple"
                      alt
                      class="h-12 w-14"
                    />
                  </div>
                  <div class="space-y-4">
                    <p class="text-sm text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Recusandae vel
                    </p>
                    <span class="text-xs text-gray-500">20 days ago .</span>
                  </div>
                  <div :class="{ ' hidden': hoverClose != index }" class="absolute right-0">
                    <button class="hover:bg-sec p-1 bg-opacity-25">
                      <i class="bi bi-x"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div v-show="!inboxSwitch">
                <div
                  class="flex space-x-4 hover:bg-gray-100 hover:bg-opacity-25 py-4 w-full px-4 cursor-pointer"
                  v-for="(n, index, key) in 1"
                  :key="key"
                >
                  <div class="rounded-full bg-black h-10">
                    <img
                      src="https://static-cdn.jtvnw.net/growth-assets/twitch_uv_glitch_purple"
                      alt
                      class="h-12 w-14"
                    />
                  </div>
                  <div class="space-y-4">
                    <p class="text-sm text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Recusandae vel
                    </p>
                    <span class="text-xs text-gray-500">20 days ago .</span>
                  </div>
                </div>
              </div>
              <div class="flex border-t border-gray-700">
                <div class="m-auto text-lg font-bold p-2 text-gray-400">
                  <i class="bi bi-twitch"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative" @mouseover="ChangeHover(true)" @mouseleave="ChangeHover(false)">
        <i
          @mouseover="HideAll(true)"
          @click="DisplaySubNav(3)"
          class="bi bi-chat-square hover:bg-sec cursor-pointer rounded py-1 px-1"
        ></i>

        <div class="absolute bg-main w-96 top-8 right-0 rounded-sm shadow-lg" v-show="isOpen == 3">
          <div class="flex p-2">
            <div class="m-auto">
              <p>Whispers</p>
            </div>
            <div class="space-x-4">
              <button
                class="p-1 hover:bg-sec rounded relative"
                @click="whisperSettings = !whisperSettings"
              >
                <i class="bi bi-gear-fill"></i>
                <div
                  class="bg-main absolute w-52 right-0 flex flex-col p-1 space-y-2 rounded shadow-lg border border-black z-50"
                  v-show="whisperSettings"
                >
                  <button
                    class="hover:bg-gray-600 bg-opacity-25 text-left text-md font-semibold p-1 rounded"
                  >Enable Do Not Disturb</button>
                  <button
                    class="hover:bg-gray-600 bg-opacity-25 text-left text-md font-semibold p-1 rounded"
                  >Mark All Whispers as Read</button>
                </div>
              </button>
              <button class="p-1 hover:bg-sec rounded" @click="isOpen = null">
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
          </div>
          <div class="border-t border-gray-500 border-b py-1 px-2 relative bg-sec bg-opacity-40">
            <input
              type="text"
              class="w-full bg-sec py-1 px-8 rounded focus:outline-none focus:ring-purple-500 focus:ring-2 placeholder-gray-400"
              placeholder="Search for people"
            />
            <i class="bi bi-search absolute left-3 text-lg text-gray-400"></i>
          </div>
          <div class="h-auto max-h-44 overflow-y-auto">
            <div
              class="flex p-2 items-center space-x-2 border-b border-t border-gray-500 hover:bg-gray-600 bg-opacity-40 cursor-pointer relative"
              v-for="(n, index, key) in 10"
              :key="key"
              @mouseover="hoverClose = index"
              @mouseleave="hoverClose = null"
            >
              <div class="bg-black rounded-full">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/41CL8QeVgjL.jpg"
                  alt
                  class="h-8 w-8 rounded-full"
                />
              </div>
              <div class="text-md flex justify-between items-center">
                <div>
                  <h1>user 1</h1>
                  <p class="text-xs">hello ! how are you doing ?</p>
                </div>
                <div
                  class="right-1 absolute origin-top delay-100 duration-300 scale-x-0 overflow-hidden"
                  :class="{ ' transform': hoverClose != index }"
                >
                  <button class="hover:bg-gray-400 p-1 rounded">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative" @mouseover="ChangeHover(true)" @mouseleave="ChangeHover(false)">
        <button
          class="bg-sec rounded-md px-3 py-1 text-sm font-semibold space-x-2"
          @mouseover="HideAll(true)"
          @click="DisplaySubNav(4)"
        >
          <i class="bi bi-diamond-half cursor-pointer"></i>
          Get Bits
        </button>

        <div
          class="absolute bg-main w-96 top-8 right-0 rounded-sm shadow-lg text-text-main"
          v-show="isOpen == 4"
        >
          <div class="flex justify-between items-center px-2 p-2 border-b border-black">
            <div class="m-auto">
              <h1 class="text-center">Purchase Bits</h1>
              <span class>
                You have
                <img
                  src="https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/100/1.gif"
                  alt
                  class="h-4 inline-block"
                />
                0 Bits
              </span>
            </div>
            <div>
              <button class="hover:bg-sec p-1 rounded" @click="isOpen = null">
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
          </div>
          <div>
            <div class="flex flex-col pt-2">
              <h1 class="m-auto text-lg">29% off for first-time Bits buyers!</h1>
              <div class="m-auto space-x-2 py-4">
                <img
                  class="h-9 inline-block"
                  src="https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/1/2.png"
                />
                <img
                  class="h-9 inline-block"
                  src="https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/100/2.png"
                  alt
                />
              </div>

              <button
                class="m-auto bg-pur py-1 px-4 rounded text-text-main font-semibold hover:bg-purple-800"
              >Buy 300 Bits for $3.00</button>
              <div class="m-auto py-4 text-gray-500">Prices are shown in USD and include VAT</div>
            </div>
            <div class="overflow-y-auto h-auto max-h-96">
              <div
                class="border-t border-b border-sec flex justify-between p-4 items-center"
                v-for="(n, index, key) in 10"
                :key="key"
              >
                <div class="space-y-2">
                  <span class="block">300 Bits</span>
                  <img
                    class="h-8 inline-block"
                    src="https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/1/2.png"
                  />
                  <img
                    class="h-8 inline-block"
                    src="https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/100/2.png"
                    alt
                  />
                </div>
                <div class="space-y-2 flex-col flex">
                  <button
                    class="block bg-pur py-1 rounded text-center text-text-main font-semibold hover:bg-purple-800"
                  >$3.00</button>
                  <span>29% discount</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div @mouseover="ChangeHover(true)" @mouseleave="ChangeHover(false)">
          <button class="relative" @mouseover="HideAll(true)" @click="DisplaySubNav(5)">
            <img
              class="rounded-full h-7"
              src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-70x70.png"
              alt
            />
            <span
              class="absolute border-2 border-black w-2 h-2 top-5 right-0 bg-yellow-500 rounded-full"
            ></span>
          </button>

          <div
            v-show="isOpen == 5"
            class="absolute bg-main w-56 top-8 right-1 rounded-sm shadow-lg text-text-main overflow-y-auto h-auto "
          >
            <div class="p-2 text-text-main " :class="{'p-4':showLang}">
              <div class="delay-100 origin-top duration-300 scale-x-0 " :class="{'transform':showLang}">
                  <div  v-show="!showLang">
                <div class="flex items-center space-x-2">
                  <img
                    class="h-10 inline-block rounded-full"
                    src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-70x70.png"
                    alt
                  />
                  <div class="inline-block space-x-2">
                    <h2>Im_thee_master</h2>
                    <div class="h-2 w-2 bg-green-600 rounded-full inline-block"></div>
                    <span class="text-xs text-gray-500">Online</span>
                  </div>
                </div>
                <div class="py-4 space-y-2 text-sm border-b border-sec">
                  <div class="flex justify-between">
                    <span>Online</span>
                    <my-switch switchvalue="true"/>
                  </div>
                  <div class="flex justify-between">
                    <span>Share My Activity</span>
                    <my-switch />
                  </div>
                </div>
                <div class="py-4 border-b border-sec">
                  <div
                    class="py-1 px-2 rounded flex space-x-2 hover:bg-sec bg-opacity-25 cursor-pointer"
                  >
                    <i class="bi bi-person-lines-fill"></i>
                    <p>Channel</p>
                  </div>
                  <div
                    class="py-1 px-2 rounded flex space-x-2 hover:bg-sec bg-opacity-25 cursor-pointer"
                  >
                    <i class="bi bi-sliders"></i>
                    <p>Video Producer</p>
                  </div>
                  <div
                    class="py-1 px-2 rounded flex space-x-2 hover:bg-sec bg-opacity-25 cursor-pointer"
                  >
                    <i class="bi bi-clipboard-data"></i>
                    <p>Creator Dashboard</p>
                  </div>
                </div>
                <div class="py-4 border-b border-sec">
                  <div
                    class="py-1 px-2 rounded flex space-x-2 hover:bg-sec bg-opacity-25 cursor-pointer"
                  >
                    <i class="bi bi-people-fill"></i>
                    <p>Friends</p>
                  </div>
                  <div
                    class="py-1 px-2 rounded flex space-x-2 hover:bg-sec bg-opacity-25 cursor-pointer"
                  >
                    <i class="bi bi-star"></i>
                    <p>Subscriptions</p>
                  </div>
                  <div
                    class="py-1 px-2 rounded flex space-x-2 hover:bg-sec bg-opacity-25 cursor-pointer"
                  >
                    <i class="bi bi-box-seam"></i>
                    <p>Drops</p>
                  </div>
                  <div
                    class="py-1 px-2 rounded flex space-x-2 hover:bg-sec bg-opacity-25 cursor-pointer"
                  >
                    <i class="bi bi-wallet2"></i>
                    <p>Wallet</p>
                  </div>
                </div>
                <div class="py-4 border-b border-sec">
                  <div
                    class="py-1 px-2 rounded flex space-x-2 hover:bg-sec bg-opacity-25 cursor-pointer"
                  >
                    <i class="bi bi-gear-fill"></i>
                    <p>Settings</p>
                  </div>
                  <div
                    class="py-1 px-2 rounded flex space-x-2 hover:bg-sec bg-opacity-25 cursor-pointer"
                  >
                    <i class="bi bi-tv"></i>
                    <p>BetterTTV Settings</p>
                  </div>
                  <div
                    class="py-1 px-2 rounded flex justify-between space-x-2 hover:bg-sec bg-opacity-25 cursor-pointer"
                    @click="showLang = true"
                  >
                    <div class="flex space-x-2">
                      <i class="bi bi-globe"></i>
                      <p>Language</p>
                    </div>
                    <i class="bi bi-chevron-right"></i>
                  </div>
                  <div class="py-1 px-2 rounded flex justify-between space-x-2">
                    <div class="flex space-x-2">
                      <i class="bi bi-moon"></i>
                      <p>Dark Theme</p>
                    </div>

                    <my-switch />
                  </div>
                </div>
                <div class="py-2">
                  <div
                    class="py-1 px-2 rounded flex space-x-2 hover:bg-sec bg-opacity-25 cursor-pointer"
                  >
                    <i class="bi bi-box-arrow-in-left"></i>
                    <p>Lot Out</p>
                  </div>
                </div>
              </div>
              </div>

              <div  class="delay-100 origin-top duration-300 scale-x-0 " :class="{'transform':!showLang}">
                 <div  v-show="showLang"> 
                    <div class="flex text-xs border-b border-sec">
                      <div class=" hover:bg-sec p-1 rounded cursor-pointer" @click="showLang = false">
                         <i class="bi bi-chevron-left"></i>
                      </div>
                      <div class=" m-auto">
                        <h1>Language</h1>
                      </div>
                  </div>

                  <div class="p-1 py-2 text-sm overflow-y-auto h-auto max-h-80" > 
                      <div class=" hover:bg-sec bg-opacity-20 rounded p-1 cursor-pointer" v-for="(item,index,key ) in lang " :key="key">
                          <span>{{item}}</span>
                      </div>
                      
                  </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>


<script>
import Switch from "../components/inputs/switch.vue";

export default {
  created() {
    document.addEventListener("click", this.HideAll);
  },
  components: {
    "my-switch": Switch,
  },

  data() {
    return {
      showLang:false,
      IsHover: false,
      OpenCard: null,
      inboxSwitch: true,
      isOpen: null,
      hoverClose: null,
      whisperSettings: false,
      list: {
        data1: [
          "About",
          "Advertisers",
          "Blog",
          "Developers",
          "Download Apps",
          "Gift Card",
          "IGDB",
          "Jobs",
          "Loot Cave-Merch Store",
          "Music on Twitch",
          "Partners",
          "Press",
          "Turbo",
        ],
        data2: [
          "Accessibility Statement",
          "Ad Choices",
          "Community Guidelines",
          "Coolie Policy",
          "Help",
          "Privacy Policy",
          "Safety Center",
          "Securty",
          "Terms",
        ],
      },
      lang:[
        'English',
        'Dansk',
        'Deutsch',
        'English - UK',
        'Español - España',
        'Español - España',
        'Français',
        'Italiano',
        'Magyar',
        'Nederlands',
        'Nederlands',
        'Norsk',
        'Polski',
        'Português',
        'Português - Brasil',
        'Română',
        'Slovenčina',
        'Suomi',
        'Svenska',
        'Tiếng Việt',
        'Türkçe',
        'Čeština',
        'Ελληνικά',
        'Български',
        'Русский',
        'ภาษาไทย',
        '中文 简体',
        '中文 繁體',
        '日本語',
        '한국어'
      ]
    };
  },
  methods: {
    ChangeHover(value) {
      this.IsHover = value;
    },
    HideAll() {
      if (this.IsHover == false && this.isOpen != null) {
        this.isOpen = null;
      }
    },
    DisplaySubNav(index) {
      if (this.isOpen == null) {
        this.isOpen = index;
      } else {
        this.isOpen = null;
      }
    },
  },
};
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