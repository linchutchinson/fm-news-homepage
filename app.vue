<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <div class="grow">
      <main class="grid grid-cols-3 grid-rows-3">
        <Spotlight class="col-span-2 row-span-2" />
        <NewArticles class="row-span-2" />
        <TopArticles class="col-span-3" />
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
