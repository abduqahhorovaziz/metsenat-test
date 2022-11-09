<script setup lang="ts">
import Header from "./components/Header.vue"
import SponsorList from "./components/SponsorList.vue";
</script>

<template>
  <div>
      <header>  
        <Header/>
      </header>
      <main>
        <!-- <SponsorList/> -->
      </main>

        <router-view></router-view>
  </div>
</template>
