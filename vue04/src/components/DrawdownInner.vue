<template>
    <div style="padding:10px;">
        <p>
            <span :class="{'cur':isnowshow=='sheng'}" @click="goH('sheng')">
                <b v-if="sheng==''">请选择省</b>
                <b v-else>{{sheng}}</b>
            </span>
            <span v-if="sheng!=''" :class="{'cur':isnowshow=='shi'}" @click="goH('shi')">
                <b v-if="shi==''">请选择市</b>
                <b v-else>{{shi}}</b>
            </span>
            <span  v-if="shi!=''" :class="{'cur':isnowshow=='xian'}" @click="goH('xian')">
                <b v-if="xian==''">请选择县</b>
                <b v-else>{{xian}}</b>
            </span>
            <span  v-if="xian!=''" :class="{'cur':isnowshow=='jiedao'}" @click="goH('jiedao')">
                <b v-if="jiedao==''">请选择街道</b>
                <b v-else>{{jiedao}}</b>
            </span>
        </p>
        <p v-if="isnowshow=='sheng'">
            <a href="javascript:;" v-for="(v,sheng) in obj" :key="sheng" @click="shengH(sheng)"> {{sheng}} </a>
        </p>
        <p v-if="isnowshow=='shi'">
            <a href="javascript:;" v-for="(v,shi) in obj[this.sheng]" :key="shi"  @click="shiH(shi)"> {{shi}} </a>
        </p>
         <p v-if="isnowshow=='xian'">
            <a href="javascript:;" v-for="(v,xian) in obj[this.sheng][this.shi]" :key="xian" @click="xianH(xian)"> {{xian}} </a>
        </p>
         <p v-if="isnowshow=='jiedao'">
            <a href="javascript:;" v-for="jiedao in obj[this.sheng][this.shi][this.xian]" :key="jiedao" @click="jiedaoH(jiedao)"> {{jiedao}} </a>
        </p>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                obj: {},
                sheng:'',
                shi:'',
                xian:'',
                jiedao:'',
                isnowshow:'sheng'
            }
        },
        created () {
            axios.get('http://www.aiqianduan.com:56506/pcas').then(res=>{
                this.obj=res.data;
            });
        },
        methods: {
            shengH(sheng) {
                this.sheng=sheng;
                this.isnowshow='shi';
                this.shi='';
                this.xian='';
                this.jiedao='';
                
                
            },
            shiH(shi){
                this.shi=shi;
                this.isnowshow='xian';
                this.xian='';
                this.jiedao='';
                
            },
            xianH(xian){
                this.xian=xian;
                this.isnowshow="jiedao";
                this.jiedao='';
            },
            jiedaoH(jiedao){
                this.jiedao=jiedao;
                
                this.$emit('close',{
                    sheng:this.sheng,
                    shi:this.shi,
                    xian:this.xian,
                    jiedao:this.jiedao
                })
            },
            goH(c){
                console.log(c);
                console.log(this.sheng);
                    this.isnowshow=c;
                
                
            }
        },
    }
</script>

<style lang="less" scoped>
     p span{
         border:1px solid #333;
         &.cur{
             color:chocolate;
         }
     }
</style>