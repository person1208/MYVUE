<template>
    <div>
        done:{{done}}

        <br>

        doing:{{doing}}

        <br>

        全选<input type="checkbox" >
    </div>
</template>

<script>
    export default {
         props:['arr'],
         computed: {
             done() {
                 return this.arr.filter(item=>item.done).length 
             },
             doing(){
                 return this.arr.filter(item=>!item.done).length 
             }
         },
    }
</script>

<style lang="less" scoped>

</style>