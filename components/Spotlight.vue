<template>
  <div>
    <!-- Desktop Image -->
    <img
      src="/images/image-web-3-desktop.jpg"
      class="hidden sm:block"
      alt="Colorful blocks of varying shapes and sizes"
    />
    <!-- Mobile Image -->
    <img
      src="/images/image-web-3-mobile.jpg"
      class="block sm:hidden"
      alt="Colorful blocks of varying shapes and sizes"
    />

    <div class="sm:grid sm:grid-cols-2 sm:grid-rows-3 gap-4 mt-8">
      <div class="sm:row-span-3 mb-4">
        <h1 class="font-extrabold text-4xl md:text-[3.25rem] leading-none">
          The Bright Future of Web 3.0?
        </h1>
      </div>
      <div class="sm:row-span-2">
        <p class="text-blue-dark-grayish mb-4">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
      </div>
      <div>
        <button
          class="bg-soft-red text-[#fff] px-8 py-2 font-bold text-sm tracking-[0.15em] hover:bg-blue-very-dark transition duration-100 ease-in-out"
        >
          READ MORE
        </button>
      </div>
    </div>
  </div>
</template>
