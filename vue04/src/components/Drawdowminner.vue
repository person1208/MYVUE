<template>
    <div>
        <div class="tab">
            <span :class="{'cur':nowshow=='sheng'}" @click="goH('sheng')">
                <b v-if="sheng!=''" >{{sheng}}</b>
                <b v-else>请选择省</b>
            </span>
            <span v-if="sheng!=''" :class="{'cur':nowshow=='shi'}" @click="goH('shi')">
                <b v-if="shi!=''">{{shi}}</b>
                <b v-else>请选择市</b>
            </span>
            <span  v-if="shi!=''" :class="{'cur':nowshow=='qu'}" @click="goH('qu')">
                <b v-if="qu!=''">{{qu}}</b>
                <b v-else>请选择区</b>
            </span>
            <span v-if="qu!=''"  :class="{'cur':nowshow=='jie'}" @click="goH('jie')">
                <b v-if="jie!=''">{{jie}}</b>
                <b v-else>请选择街道</b>
            </span>
        </div>
        <p v-if="nowshow=='sheng'">
            <!-- Object.keys(obj) -->
            <a href="javascript:;" v-for="(v,k) in obj " :key="k" @click="shengH(k)">
                {{k}}
            </a>
        </p>
        <p v-else-if="nowshow=='shi'">
            <a  v-for="(v,k) in obj[this.sheng]" :key="k" @click="shiH(k)" href="javascript:;">
                {{k}}
            </a>
        </p>
         <p v-else-if="nowshow=='qu'">
            <a v-for="(v,k) in obj[this.sheng][this.shi]" :key="k"  @click="quH(k)" href="javascript:;">
                {{k}}
            </a>
        </p>
        <p v-else-if="nowshow=='jie'">
            <a v-for="item in obj[this.sheng][this.shi][this.qu]" :key="item"  @click="jieH(item)" href="javascript:;">
                {{item}}
            </a>
        </p>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                obj: {},
                nowshow:'sheng',
                sheng:'',
                shi:'',
                qu:'',
                jie:''
            }
        },
        methods: {
           goH(g){
               this.nowshow=g;
           },
            shengH(sheng) {
                this.sheng=sheng;
                this.shi='';
                this.qu='';
                this.jie='';
                this.nowshow='shi';
                
            },
            shiH(shi){
                this.shi=shi;
                this.qu='';
                this.jie='';
                this.nowshow='qu';
                
                
            },
            quH(qu){
                this.qu=qu;
                 this.jie='';
                this.nowshow='jie';
               
            },
            jieH(jie){
                this.jie=jie;
                console.log(this.sheng+this.shi+this.qu+this.jie);
                this.$emit('closeDrawdoen',{
                    sheng:this.sheng,
                    shi:this.shi,
                    qu:this.qu,
                    jie:this.jie
                })
                
            }
        },
        created () {
            axios.get('http://www.aiqianduan.com:56506/pcas').then(res=>{
                console.log(res);
                
                this.obj=res.data;
            });
        },
    }
</script>

<style lang="less" scoped>
.tab{
    height:24px;
    border-bottom: 1px solid #333;
}
.tab span{
    border:1px solid #333;
    height:24px;
    float: left;
    border-bottom: none;
    &.cur{
        background:burlywood;
    }
}
</style>