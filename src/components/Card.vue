<template>
  <div class="light-border light-color card">
    <div class="content">
      <div class="center">
        <img :src="book.authorImg" alt="Imagen autor" />
      </div>
      <div>
        <h1>{{ book.title }}</h1>
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
defineProps({
  book: {
    type: String,
    required: true,
  },
});
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