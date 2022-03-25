<template>
  <Header title="Mi primera aplicación"/>
  <router-view />
</template>
<script setup>
import Header from '@/components/Header'
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
