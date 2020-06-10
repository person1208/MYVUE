<template>
    <div>
        <button @click="$emit('prev')" :disabled="idx==1">上一张</button>
        <img :src="`/images/${star}/${idx}.jpg`" alt="">
        <button @click="$emit('next')" :disabled="idx==5">下一张</button>
    </div>
</template>

<script>
    export default {
        props:['star','idx']
    }
</script>

<style lang="less" scoped>
    img{
        width: 400px;
        height: 400px;
    }
</style>