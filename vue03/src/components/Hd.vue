<template>
    <div>
        <!-- <input type="text" ref="kuang1"> -->       
        <input type="text" v-model="title" @keydown.enter="add">
        <button @click="add">增加</button>
    </div>
</template>

<script>
    export default {
         props:['arr'],
         data() {
             return {
                 title: ''
             }
         },
         methods: {
             add() {
                //  var v = this.$refs.kuang1.value;                
                //  this.arr.push({'title':v,'done':false});
                 this.arr.push({'title':this.title,'done':false});
                 this.title="";
                 console.log(this.arr);
                 
             }
         },
       
    }
</script>

<style lang="less" scoped>

</style>