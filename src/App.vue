<template>
  <Header title="Mi primera aplicación"/>
  <router-view />
</template>
<script setup>
import Header from '@/components/Header'
</script>
<style>

a{
  text-decoration: none;
  color: #35495E;
}

button{
  margin-bottom: 10px;
  padding: 5px;
  background: #42B883;
  border: none;
}

.light-bottom{
    border-bottom: 1px solid #35495E !important;
}
.light-border{
    border: 1px solid #35495E !important;
}
.light-bg{
    background-color: #FFFFFF;
}

.light-color{
    color: #35495E !important;
}

.light-hl{
  color: #FFFFFF !important;
}

.center{
  display: flex;
  justify-content: center;
  align-self: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
