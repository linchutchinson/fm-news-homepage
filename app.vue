<template>
  <div
    class="min-h-screen flex flex-col font-sans bg-off-white px-8 pt-8 lg:pt-16 lg:px-64"
  >
    <Header class="mb-8 md:mb-16" />
    <div class="grow">
      <main class="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-8">
        <Spotlight class="sm:col-span-2 sm:row-span-2" />
        <NewArticles class="sm:row-span-2" />
        <TopArticles class="sm:col-span-3" />
      </main>
    </div>

    <footer class="justify-self-end">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="#">Your Name Here</a>.
    </footer>
  </div>
</template>

<style>
@font-face {
  font-family: "Inter";
  src: url("~/assets/fonts/Inter-Variable.ttf");
}
</style>
