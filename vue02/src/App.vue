<template>
    <div>
        <input type="text" ref="kuang1">
        <button @click="zhuijia">add</button>
        <ul>
            <li v-for="(item,index) in arr" :key="index">
                {{item}} - {{index}}
                <button @click="del(index)">删除</button>
            </li>
        </ul>
        <div>
            双向数据绑定：<input type="text" v-model="a">
            <div>{{a}}</div>
            <!-- <button @click="change">改变</button> -->
            <button @click="a+=5">改变</button>
        </div>
        <br><br><br>
        <h2>调色板</h2>
        <div>
            <div class="box" :style="{'background-color':`rgb(${r},${g},${b})`}"></div>
            <br>
            <div>
                R:<input type="range" min="0" max="255" v-model="r">
                <input type="number"  min="0" max="255" v-model="r">
            </div>
            <div>
                G:<input type="range" min="0" max="255" v-model="g">
                <input type="number"  min="0" max="255" v-model="g">
            </div>
            <div>
                B:<input type="range" min="0" max="255" v-model="b">
                <input type="number"  min="0" max="255" v-model="b">
            </div>
        </div>
        <h2>微博发布框</h2>
        <div>
            <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
            <span :class="{'danger':content.length>140}">字数  {{content.length}}/140</span>
            <button :disabled="content.length>140">发布</button>
            <button @click="content=''">清空</button>
        </div>
        <h2>双色球</h2>
        <div>
            <span v-for="i in 33" :key="i" :class="{'ball':true,'cur':ballarr.includes(i)}" @click="tap(i)">{{i}}</span>

        </div>
        <button @click="ran">随机</button>
        <div style="clear:both;"></div>
        <br>
        <Test :r="r" :o="o" @change='changer' />
        <Test :r="r" :o="o" @change='changer' />
        <Test :r="r" :o="o" @change='changer' />
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>

<script>
    import Test from './components/Test.vue'
    export default {
        data() {
            return {
                content:'',
                arr: [11,33,55,77],
                a:10,
                r:100,
                g:30,
                b:10,
                ballarr:[2,5,8],
                o:{
                    k:4
                }
            }
        },
        methods: {
            changer(){
                this.r++
            },
            tap(i){                
                if(this.ballarr.includes(i)){
                    this.ballarr=this.ballarr.filter(item=>item!=i)                   
                    
                }else{
                    if(this.ballarr.length<6){
                         this.ballarr.push(i)
                    }else{
                        alert('最多选'+this.ballarr.length+'哦~')
                    }                   
                }
                
            },
            ran(){
                var ballarr=[];
                while(ballarr.length<=6){
                    var m=parseInt(Math.random()*34);                    
                    if(!ballarr.includes(m)){
                        ballarr.push(m);
                    }
                }
                this.ballarr=ballarr;
                console.log(ballarr);
                
            },
            zhuijia() {
                console.log(this);
                var value=this.$refs.kuang1.value;
                this.arr.push(value)
            },
            del(i){
                this.arr.splice(i,1)
                
            },
            // change(){
            //     this.a+=5;
            // }
        },
        components: {
            Test,
        },
    }
</script>

<style lang="less" scoped>
    .cur{
        background-color: red;
        color:#fff;
    }
    .ball{
        float: left;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border:1px solid #000;
        margin:10px;
        text-align: center;
        line-height: 30px;
    }
    .box{
        width: 200px;
        height: 200px;
        border:1px solid #000;
    }
    input[type="number"]{
        width:40px;
    }
    .danger{
        color: red;
        font-weight:bold;
    }
</style>