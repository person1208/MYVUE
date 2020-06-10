<template>
    <div>
        <!-- <p v-for="(v,k) in info" :key="k">{{k}}-{{v}}</p> -->
        <button v-for="(v,k) in info" :key="k" @click="$emit('changeStar',{k})" :class="{'cur':k==star}">{{v}}</button>
    </div>
</template>

<script>
    export default {
         props:['star','idx'],
         data() {
             return {
                 info: {
                     'xiaozhan':'肖战',
                     'yangmi':'杨幂',
                     'xiaogou':'小狗'

                 }
             }
         }
         
    }
</script>

<style lang="less" scoped>
    button{
        margin:20px;
    }
    .cur{
        background:red;
        color:#fff;
    }
</style>