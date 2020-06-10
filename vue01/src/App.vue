<template>
    <div>
        <h1>vue运行了</h1>
        <h2>{{a}}</h2>
        <button @click="add">+1</button>
        <p>
            <img :src="`images/ym${b}.jpg`" alt="">
        </p>
        <button @click="next" :disabled="b==4">下一张</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                a: 10,
                b:1
            }
        },
        methods: {
            add() {
                this.a++
            },
            next(){
                this.b++
            }
        },
    }
</script>

<style lang="less" scoped>
    h1{
        color:red;
    }
    img{
        width: 200px;
    }
</style>