<template>
  <div class="w-full text-text-main bg-main relative overflow-y-auto">
    <div class="500 w-full h-5/6 border-b border-sec">
      <vue-core-video-player :src="videoSource" controls="false"></vue-core-video-player>
      <div
        class="uppercase absolute rounded bg-red-600 bg-opacity-90 z-40 text-white top-5 right-10 text-center text-sm shadow-lg"
      >
        <span class="px-2">LIVE</span>
      </div>
    </div>
    <div class="flex justify-between">
      <div class="flex space-x-2 p-4">
        <div class="rounded-full h-19 r ring ring-pur relative">
          <img
            class="border border-black rounded-full h-19"
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/e78e4a57-efb2-4c91-9dc5-221ff5c78bec-profile_image-70x70.png"
            alt
          />
          <div
            class="-bottom-1 left-3 uppercase absolute rounded bg-red-600 bg-opacity-90 z-30 text-white text-center text-xs border-2 border-black"
          >
            <span class="px-2">LIVE</span>
          </div>
        </div>
        <div>
          <a href="#" class="hover:text-pur hover:underline font-semibold">Damysus</a>
          <h1
            class="font-semibold"
          >(っ◔◡◔)っ ♥ BAMBUCHA ♥ ! NEW SUB BADGES | !Abramisocials !insta !Youtube !guests</h1>
          <div class="flex space-x-2">
            <a href="#" class="text-pur hover:underline">VALORANT</a>
            <div
              class="rounded-2xl bg-sec hover:bg-gray-500 hover:bg-opacity-25 z-40 text-white text-sm shadow-lg cursor-pointer px-3 text-center"
            >Arabic</div>
            <div
              class="rounded-2xl bg-sec hover:bg-gray-500 hover:bg-opacity-25 z-40 text-white text-sm shadow-lg cursor-pointer px-3 text-center"
            >English</div>
            <div
              class="rounded-2xl bg-sec hover:bg-gray-500 hover:bg-opacity-25 z-40 text-white text-sm shadow-lg cursor-pointer px-3 text-center"
            >Morocco</div>
          </div>
        </div>
      </div>

      <div class="flex space-x-2 p-2">
        <div class="font-bold">
          <button
            class="text-center bg-pur px-2 py-1 rounded-sm hover:bg-purple-700 text-xs space-x-1"
          >
            <i class="bi bi-suit-heart"></i>
            <span>Follow</span>
          </button>
        </div>
        <div class="font-bold text-sm">
          <button
            class="text-center space-x-1 bg-sec py-1 px-4 rounded-sm hover:bg-gray-600 hover:bg-opacity-25"
          >
            <i class="bi bi-star"></i>
            <span>Subscribe: 20% off</span>
            <i class="bi bi-chevron-down"></i>
          </button>

          <div class="flex justify-between py-2 items-center">
            <span class="text-red-600">
              <i class="bi bi-person text-lg"></i> 161
            </span>
            <span class="font-normal">0:54:35</span>
            <button class="hover:bg-sec rounded p-1">
              <i class="bi bi-arrow-bar-up text-lg"></i>
            </button>
            <button class="hover:bg-sec rounded p-1">
              <i class="bi bi-three-dots-vertical text-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full h py-10 px-14">
      <div class=" bg-gray-800 bg-opacity-50 w-full  rounded flex py-10 px-14 justify-between">
        <div class=" space-y-2">
          <h1 class=" text-3xl"> About Damysus</h1>
          <span class=" text-gray-500">
            7.6K
            followers
            ·
            Abrami Family
          </span>
          <p>Content Creator, League Of Legends Partner, Fighting Games player and more, For business inquiries : themaster@gmail.com</p>
        </div>
        <div class=" text-gray-400 flex flex-col space-y-2">
            <a href="" class=" hover:text-red-400"><i class="bi bi-facebook"></i> Facebook</a>
            <a href="" class=" hover:text-red-400"><i class="bi bi-discord"></i> Discord</a>
            <a href="" class=" hover:text-red-400"><i class="bi bi-youtube"></i> Youtube</a>
            <a href="" class=" hover:text-red-400"><i class="bi bi-instagram"></i> Instagram</a>
            
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      videoSource: [
        {
          src: "https://media.vued.vanthink.cn/sparkle_your_name_am360p.mp4",
          resolution: "360p",
        },
        {
          src: "https://media.vued.vanthink.cn/sparkle_your_name_am720p.mp4",
          resolution: "720p",
        },
        {
          src: "https://media.vued.vanthink.cn/y2mate.com%20-%20sparkle_your_name_amv_K_7To_y9IAM_1080p.mp4",
          resolution: "1080p",
        },
      ],
    };
  },
  created() {},
};
</script>