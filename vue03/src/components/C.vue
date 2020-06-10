<template>
    <div class="box">
        <img v-for="i in 5" :key="i" :src="`/images/${star}/${i}.jpg`" :class="{'cur':idx==i}" alt="" @mouseenter="$emit('changeImg',{'idx':i})">
    </div>
</template>

<script>
    export default {
         props:['star','idx']
    }
</script>

<style lang="less" scoped>
    img{
        width: 80px;
        height:80px;
        box-sizing: border-box;
        padding:3px;
    }
    .box{
        margin-left:59px;
        
    }
    .cur{
            border:2px solid #f00;
        }
</style>