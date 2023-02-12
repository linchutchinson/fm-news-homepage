<template>
  <header class="flex gap-8 items-center">
    <NuxtLink to="#">
      <img
        src="/images/logo.svg"
        alt="A large letter W"
        class="w-12 md:w-max"
      />
    </NuxtLink>
    <div class="grow" />
    <!-- Desktop Menu -->
    <div
      v-for="link in links"
      class="text-blue-dark-grayish hover:text-soft-red transition duration-100 hidden md:block"
    >
      <NuxtLink to="#">{{ link }}</NuxtLink>
    </div>

    <!-- Mobile Menu -->
    <div class="sm:hidden">
      <div v-if="displayLinks" class="absolute inset-0 bg-[#00000044]" />
      <button v-if="!displayLinks" @click="displayLinks = true">
        <img
          src="/images/icon-menu.svg"
          alt="Three lines stacked on top of eachother"
        />
      </button>
      <Transition
        enter-from-class="left-full -right-24"
        enter-active-class="transition-all duration-200 ease-out"
        leave-from-class="left-24"
        leave-active-class="transition-all duration-200 ease-out"
        leave-to-class="left-full -right-24"
      >
        <div
          v-if="displayLinks"
          class="absolute inset-0 left-24 bg-off-white px-4 py-8"
        >
          <button @click="displayLinks = false" class="ml-auto block">
            <img src="/images/icon-menu-close.svg" alt="An X Button" />
          </button>
          <div class="flex flex-col gap-4 mt-16">
            <NuxtLink v-for="link in links" to="#">{{ link }}</NuxtLink>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
const links = ["Home", "New", "Popular", "Trending", "Categories"];
const displayLinks = ref(false);
</script>
