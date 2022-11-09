<script setup lang="ts">

</script>

<template>
  <div class="container mx-auto px-5">
    <div class="flex items-center py-3">
      <img src="/img/logo.svg" alt="Logo" />
      <div class="ml-auto flex items-center">
        <div class="flex items-center p-1 pl-5 mr-10 rounded-md bg-gray-100">
          <p class="font-display text-dark mr-6 text-sm">Shohrux</p>
          <img src="/img/user.svg" alt="User" />
        </div>
        <RouterLink to="/login">
          <img src="/img/log-out.svg" alt="logout" />
        </RouterLink>
      </div>
    </div>

    <div class="flex items-center justify-between py-6">
      <nav>
        <ul
          class="flex items-center uppercase font-medium text-xs tracking-nav text-bluee-300"
        >
          <li class="border-l-2 border-y-2 border-bluee-100 rounded-l-md">
            <RouterLink
              class="py-3.5 px-14 inline-block hover:bg-blue-400 hover:text-white ease duration-300 rounded-l-md"
              to="/dashboard"
              >Dashboard</RouterLink
            >
          </li>
          <li class="border-y-2 border-bluee-100">
            <RouterLink
              class="py-3.5 px-14 inline-block hover:bg-blue-400 hover:text-white ease duration-300"
              to="/sponsors"
              >Homiylar</RouterLink
            >
          </li>
          <li class="border-r-2 border-y-2 border-bluee-100 rounded-r-md">
            <RouterLink
              class="py-3.5 px-14 inline-block hover:bg-blue-400 hover:text-white ease duration-300 rounded-r-md"
              to="/students"
              >Talabalar</RouterLink
            >
          </li>
        </ul>
      </nav>

      <form class="flex items-center">
        <div class="flex items-center bg-gray-100 p-2.5 rounded-md w-72 mr-5">
          <img
            src="/img/icons/search.svg"
            alt="search"
            class="mr-2"
          />
          <input
            class="form-control block w-full text-base font-normal text-gray-700 bg-transparent focus:outline-none"
            type="text"
            placeholder="Izlash"
          />
        </div>
        <button class="flex items-center py-3 px-8 bg-bluee-200 rounded-md text-sm text-bluee-400 hover:bg-blue-200 ease duration-200">
          <img src="/img/icons/filter.svg" alt="filter" class="mr-2.5"/>
          Filter
        </button>
      </form>
    </div>
  </div>
</template>

<style>
  .router-link-exact-active {
    background-color: #3366FF;
    color: white;
  }
</style>