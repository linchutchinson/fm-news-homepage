<template>
  <div
    class="min-h-screen flex flex-col font-sans bg-off-white pt-24 px-8 lg:px-0 max-w-screen-lg mx-auto"
  >
    <Header class="mb-8 md:mb-12" />
    <div class="grow">
      <main
        class="flex flex-col md:grid md:grid-cols-3 md:grid-rows-3 gap-16 md:gap-4 lg:gap-8"
      >
        <Spotlight class="sm:col-span-2 sm:row-span-2" />
        <NewArticles class="sm:row-span-2" />
        <TopArticles class="sm:col-span-3" />
      </main>
    </div>

    <footer
      class="justify-self-end text-center text-blue-dark-grayish mt-16 md:mt-0"
    >
      Challenge by
      <NuxtLink
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        class="text-blue-very-dark hover:underline"
        >Frontend Mentor</NuxtLink
      >. Coded by
      <NuxtLink
        href="https://linchutchinson.com"
        class="text-blue-very-dark hover:underline"
        >Lincoln Hutchinson</NuxtLink
      >.
    </footer>
  </div>
</template>

<style>
@font-face {
  font-family: "Inter";
  src: url("~/assets/fonts/Inter-Variable.ttf");
  font-display: swap;
}
</style>

<script setup>
const runtimeConfig = useRuntimeConfig();
const faviconURL = runtimeConfig.app.baseURL + "favicon.png";
useHead({
  link: [{ hid: "icon", rel: "icon", href: faviconURL, sizes: "32x32" }],
});
</script>
