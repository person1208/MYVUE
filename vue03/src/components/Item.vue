<template>
    <div>
        <span v-if="!isEditing" @dblclick="dblc">{{item.title}}</span>
        <span v-else><input ref="txt" type="text" @blur="isEditing=false" @keydown.enter="isEditing=false" v-model="item.title"></span>
    </div>
</template>

<script>
    export default {
        props:['item'],
        data(){
            return {
                isEditing:false
            }
        },
        methods: {
            dblc() {
                this.isEditing=true; 
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>