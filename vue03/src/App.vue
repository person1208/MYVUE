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
        <br><br><br><br><br><br><br><br>
        <div>
            <label v-for="(item,index) in types" :key="index">
                <input type="radio" :value="item" v-model="now">{{item}}
            </label>
        </div>
        <ul>
            <li v-for="(item,index) in heros" :key="index">
                <img :src="`http://www.aiqianduan.com:56506/images/wzry/${item.pic}.jpg`" alt="">
                <br>
                {{item.cname}}
                <div class="mask" v-if="now!='全部'&&now!=item.hero_type"></div>
            </li>
        </ul>
    </div>
</template>

<script>
    import A from './components/A.vue'
    import B from './components/B.vue'
    import C from './components/C.vue'
    import Hd from './components/Hd.vue'
    import Bd from './components/Bd.vue'
    import Fd from './components/Fd.vue'
    import axios from 'axios'
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
                ],
                heros:[],
                types:['全部','坦克','法师','辅助','战士','刺客','射手'],
                now:'法师'
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
        created () {
            axios.get('http://www.aiqianduan.com:56506/wzry').then(data=>{
                console.log(data.data);
                this.heros=data.data;
            })
        },
    }
</script>

<style lang="less" scoped>
    li{
        width: 120px;
        height: 160px;
        text-align: center;
        float: left;
        margin:10px;
        border:1px solid #ccc;
        list-style: none;
        position: relative;
    }
    li img{
        width: 120px;
        height: 120px;
    }
    .mask{
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
        left:0;
        background-color: rgba(0,0,0,0.7);
    }
</style>