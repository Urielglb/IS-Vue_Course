<template>
    <div class="header light">
        <div id="divider">
            <div id="info">
                <img src="@/assets/logo.png" alt="Logo">
                <h1> {{title}}</h1>
            </div>
            <div id="mode">
                <i class="fas fa-sun fa-lg"></i>
                <div class="switch light-sw" :class="isLight? 'start' : 'end' ">
                    <span @click="changeMode" class="checkbox light-bg">
                        
                    </span>
                </div>
                <i class="fas fa-moon fa-lg"></i>
            </div>
        </div>  
    </div>
</template>

<script setup>
import {defineProps, ref, computed} from 'vue'
  defineProps({
        title:{
            type: String,
            required: true
        }
    })

    const mode = ref('light')

    const isLight = computed(()=>mode.value == 'light' ? true : false)  

    const changeMode = () =>{
        mode.value = mode.value === 'dark' ? 'light' : 'dark'
        console.log("Holaaaaaa");
    }
</script>

<style scoped>
h1{
    font-size: 30px;
}

img{
    width: 50px;
    height: 50px;
    margin-right: 5px;
}

.header{
    height: 100px;
    min-width: 100vw;
    padding: 5px;
}
.light{
    border-bottom: 1px solid #35495E;
    color: #35495E;
}
.light-sw{
    background: #F1F1F1;
    border: 1px solid #35495E;
    color: #35495E;
}
.light-bg{
    background-color: #FFFFFF;
}
.switch{
    padding: 3px;
    width: 50px;
    border-radius: 50px;
    margin: 0 10px;
    display: flex;
}

.start{
    justify-content: start;
}

.end{
    justify-content: end;
}

.checkbox{
    display: block;
    height: 20px;
    width: 20px;
    border-radius: 100%;
    cursor: pointer;
}

#divider{
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
}

#info{
    height:100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
}

#mode{
    padding: 5px;
    height:100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
}
</style>