<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LibLayout from '../client/lib/LibLayout'
LibLayout.startProc();
</script>

<template>
  <div class="">
    <a href="/">[ Home ]</a>
    <a href="/about">[ About ]</a>
    <a href="/login">[ Login ]</a>
    <hr />
  </div>
</template>

<style scoped>
</style>
<!--
<router-link to="/">[ Home ]</router-link>
<router-link to="/about">[ About ]</router-link>
-->
