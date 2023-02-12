<template>
  <div class="bg-blue-very-dark px-4 py-6 flex flex-col">
    <h2 class="text-soft-orange text-3xl font-extrabold">New</h2>
    <div v-for="(article, index) in articles" class="grow">
      <hr v-if="index > 0" class="border-1 border-blue-dark-grayish mt-4" />
      <NuxtLink to="#">
        <h3
          class="text-off-white font-bold mt-4 mb-2 lg:text-xl hover:text-soft-orange transition duration-100 ease-in-out"
        >
          {{ article.title }}
        </h3>
      </NuxtLink>
      <p class="text-blue-grayish lg:text-lg">{{ article.snippet }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const articles = [
  {
    title: "Hydrogen VS Electric Cars",
    snippet: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    snippet:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    snippet:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];
</script>
