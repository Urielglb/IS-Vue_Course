<template>
  <div class="card" :class="borderClass">
    <div class="content">
      <div class="center">
        <img :src="book.authorImg" alt="Imagen autor" @click="changeRoute(book)" />
      </div>
      <div>
        <h1>
          <router-link :to="{ name: 'Book', params: { title: book.title } }">{{
            book.title
          }}</router-link>
        </h1>
        <div class="general-data">
          <p>Género:{{ book.gender }}</p>
          <p>De:{{ book.author }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import {storeToRefs} from 'pinia'
import {useModeStore} from '@/store/mode.js'

const router = useRouter()

defineProps({
  book: {
    type: String,
    required: true,
  },
});

const changeRoute = (book)=>{
  router.push({
    name: 'Book',
    params: {
      title: book.title
    }
  })
}

const mode = useModeStore()

const { borderClass } = storeToRefs(mode)

</script>

<style lang="css" scoped>
h1 {
  text-align: center;
  cursor: pointer;
}

img{
    border-radius: 100%;
    width: 100px;
    height: 100px;
    cursor: pointer
}

div {
  display: inline-block;
}

p{
    margin-right:5px
}
.card {
  padding: 5px;
  min-width: 450px;
}

.content{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.general-data {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
</style>