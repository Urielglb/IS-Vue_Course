<template>
    <div class="form light-bg light-border">
        <h2 @click="$emit('close')"><i class="fas fa-times"></i></h2>
        <h4>Agrega Libro</h4>
        <div class="form-input">
            <label for="">Titulo</label>
            <input type="text" class="light-bottom" v-model="book.title">
        </div>
        <div class="form-input">
            <label for="">Autor</label>
            <input type="text" class="light-bottom" v-model="book.author">
        </div>
        <div class="form-input">
            <label for="">Imagen Autor</label>
            <input type="text" class="light-bottom" v-model="book.authorImg">
        </div>
        <div class="form-input">
            <label for="">Año Publicación</label>
            <input type="text" class="light-bottom" v-model="book.published">
        </div>
        <div class="form-input">
            <label for="">Género</label>
            <input type="text" class="light-bottom" v-model="book.gender">
        </div>
        <button @click="$emit('add',book)" class="light-hl">Agregar</button>
    </div>
</template>

<script setup>
import { reactive} from 'vue';
const book = reactive({
    title:'',
    author:'',
    authorImg:'',
    published:'',
    gender:'',
})

</script>

<style scoped>
label{
    text-align: start;
}

input{
    border:none
}

h2{
    text-align: end;
    margin: 0;
    margin-right: 2%;
    cursor: pointer;
}
h4{
    text-align: center;
}
.form{
    position: absolute;
    right: 2%;
    width: 300px;
    margin: auto;
    z-index: 1;
}
.form-input{
    padding: 15px;
    display: flex;
    flex-flow: column nowrap;
}
</style>