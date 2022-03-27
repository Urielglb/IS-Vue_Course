<template>
    <div class="header" :class="mainClasses + ' ' + bottomClass">
        <div id="divider">
            <div id="info">
                <img src="@/assets/logo.png" alt="Logo">
                <h1><router-link :to="{name:'Home'}">{{title}}</router-link></h1>
            </div>
            <div id="mode">
                <i class="fas fa-sun fa-lg"></i>
                <div class="switch" :class="switchClasses">
                    <span @click="changeMode" class="checkbox" :class="bgClass" >
                    </span>
                </div>
                <i class="fas fa-moon fa-lg"></i>
            </div>
        </div>  
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
import { storeToRefs } from 'pinia'
import {useModeStore} from '@/store/mode.js'

defineProps({
  title: {
    type: String,
    required: true,
  },
});

const mode = useModeStore()

const { mainClasses, switchClasses, bgClass, bottomClass } = storeToRefs(mode)

const { changeMode } = mode

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