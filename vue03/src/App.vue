<template>
    <div>
        <A :star="star" :idx="idx" @changeStar="changeStar" /> 
        <B :star="star" :idx="idx" @next="nextH" @prev="prevH" /> 
        <C :star="star" :idx="idx" @changeImg="changeImg" /> 
        <br>
        <br>
        <br>
        <br>
        <br>
        <Hd :arr="arr" />
        <Bd :arr="arr" />
        <Fd :arr="arr" />
        {{arr}}
    </div>
</template>

<script>
    import A from './components/A.vue'
    import B from './components/B.vue'
    import C from './components/C.vue'
    import Hd from './components/Hd.vue'
    import Bd from './components/Bd.vue'
    import Fd from './components/Fd.vue'
    export default {
        components: {
            A,
            B,
            C,
            Hd,
            Bd,
            Fd
        },
        data() {
            return {
                star: 'yangmi',
                idx:1,
                arr:[
                    {title:'吃饭',done:false},
                    {title:'睡觉',done:true},
                    {title:'打豆豆',done:false}
                ]
            }
        },
        methods: {
            nextH() {
                this.idx++
            },
            prevH(){
                this.idx--
            },
            changeImg(e){
                console.log(e);
                this.idx=e.idx
            },
            changeStar(e){
                this.star=e.k;
            }
        },
    }
</script>

<style lang="less" scoped>

</style>