<template>
    <div>
        <ul>
            <li v-for="(item,index) in arr" :key="index">
                <div class="item">
                     <input type="checkbox" v-model="item.done">
                     <div class="itemcontent"><Item :item="item" /></div>
                </div>                
                <button @click="arr.splice(index,1)">删除</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import Item from './Item.vue'
    export default {
        props:['arr'],
        components: {
            Item
        }
    }
</script>

<style lang="less" scoped>
    li{
        overflow: hidden;
    }
    .item,button{
        float:left;
    }
    input,.itemcontent{
        float: left;
    }
</style>