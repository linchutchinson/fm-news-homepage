<template>
  <div class="grid md:flex gap-8">
    <div v-for="(article, index) in articles" class="flex gap-4">
      <img
        :src="article.image"
        class="w-min object-scale-down max-h-40"
        :alt="article.alt"
      />
      <div class="flex flex-col">
        <h2 class="text-blue-grayish font-bold text-3xl">0{{ index + 1 }}</h2>
        <NuxtLink to="#">
          <h3
            class="font-bold hover:text-soft-red transition duration-100 ease-in-out"
          >
            {{ article.title }}
          </h3>
        </NuxtLink>
        <p class="text-blue-dark-grayish">{{ article.snippet }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const articles = [
  {
    title: "Reviving Retro PCs",
    snippet: "What happens when old PCs are given modern upgrades?",
    image: "/images/image-retro-pcs.jpg",
    alt: "A small retro computer surrounded with various pieces of retro tech such as cassette tapes, a gameboy and a joystick.",
  },
  {
    title: "Top 10 Laptops of 2022",
    snippet: "Our best picks for various needs and budgets.",
    image: "/images/image-top-laptops.jpg",
    alt: "A close-up shot of the keys of a keyboard.",
  },
  {
    title: "The Growth of Gaming",
    snippet: "How the pandemic has sparked fresh opportunities.",
    image: "/images/image-gaming-growth.jpg",
    alt: "A ps4 controller floating in the air above a hand.",
  },
];
</script>
