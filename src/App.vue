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
  color:inherit
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

.light-contrast{
  background: #F1F1F1;
}

.dark-bottom{
    border-bottom: 1px solid #FFFFFF !important;
}

.dark-border{
    border: 1px solid #FFFFFF !important;
}

.dark-bg{
    background-color: #1A1A1A;
}

.dark-color{
    color: #FFFFFF !important;
}

.dark-hl{
  color: #1A1A1A !important;
}

.dark-contrast{
  background: #2F2F2F;
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
