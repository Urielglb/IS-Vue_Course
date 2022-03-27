<template>
  <div :class="mainClasses">
      <PopUp v-if="popUp" @close="popUp = false" @add="addBook" />
      <h2 @click="popUp = true"><i class="fas fa-plus"></i></h2>
      <div class="cards">
        <div v-for="book in books" :key="book.title">
        <Card style="margin-bottom: 50px" :book="book" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import {storeToRefs} from 'pinia'
import {useModeStore} from '@/store/mode.js'
import Card from '@/components/Card'
import PopUp from '@/components/PopUp'

const books = reactive([
  {
    title: 'Deshacer el género',
    author:'Judith Buttler',
    authorImg:'https://s1.qwant.com/thumbr/0x380/0/9/3db11b3c04c362a8e98c3ae261005e5cbf347e6837a6043d6d1c948896bee8/GettyImages-152045144-scaled.jpg?u=https%3A%2F%2Fs31242.pcdn.co%2Fwp-content%2Fuploads%2F2020%2F09%2FGettyImages-152045144-scaled.jpg&q=0&b=1&p=0&a=0',
    published:'2004',
    gender:'Teoría de Genero',
  },
  {
    title: 'Capitalismo Gore',
    author:'Sayak Valencia',
    authorImg:'https://s1.qwant.com/thumbr/0x0/1/2/43a3bf87516e10270056d1bc005d510843895aff9f36d9cdb36943fbbd8e5e/sayak-valencia_panel-mexiko_foto-liliana-falcn_quadratisch1-formatkey-jpg-w320m.jpg?u=https%3A%2F%2Fwww.goethe.de%2Fresources%2Ffiles%2Fjpg828%2Fsayak-valencia_panel-mexiko_foto-liliana-falcn_quadratisch1-formatkey-jpg-w320m.jpg&q=0&b=1&p=0&a=0',
    published:'2010',
    gender:'Postura Crítica',
  },
  {
    title: 'Sapiens',
    author:'Yuval Noaḥ Harari',
    authorImg:'https://s2.qwant.com/thumbr/0x380/6/d/b9300fc3b004945a22695cf5fd9ac065dbf1e407be754b340f5886084a702d/cover-r4x3w1000-59c27e9de0f8f-webyuval-edit-1.jpg?u=https%3A%2F%2Fwww.sciencesetavenir.fr%2Fassets%2Fimg%2F2017%2F09%2F20%2Fcover-r4x3w1000-59c27e9de0f8f-webyuval-edit-1.jpg&q=0&b=1&p=0&a=0',
    published:'2011',
    gender:'Ensayo',
  },
])

const popUp = ref(false)

const addBook = (book) =>{
  popUp.value = false
  books.push(book)
}

const mode = useModeStore()

const { mainClasses } = storeToRefs(mode)

</script>
<style scoped>
h2{
  text-align:end;
  margin-right: 2%;
  cursor:pointer
}

.cards{
  display:flex;
  flex-flow: column nowrap;
}
</style>
