<template>
    <div>
        <h1>我是Test组件</h1>
        <h2>{{a}}</h2>
        <h2>O:{{o}}</h2>
        <button @click="add">add</button>
        <div>R:{{r}}</div>
        <button @click="changeR">让r+1</button>
        <button @click="o.k+=2">让o+2</button>
    </div>
</template>

<script>
    export default {
        props:['r','o'],
        data() {
            return {
                a: 10
            }
        },
        methods: {
            add() {
                this.a++
            },
            changeR(){
                this.$emit('change');
                
            }
        },
    }
</script>

<style lang="less" scoped>

</style>