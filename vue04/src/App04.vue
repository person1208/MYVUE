<template>
    <div style="width:1200px;margin:20px auto;">
        <Row class-name="row" :gutter="10">
            <i-col :span="6" v-for="(item,index) in arr" :key="index">
                <Card>
                    <div slot="title">
                        <b>{{item.alias}}</b>
                    </div>
                    <div slot="extra">
                        <a href="">删除</a>
                        <a href="">修改</a>
                    </div>
                    <div>
                        <p>地址：{{item.p}}{{item.c}}{{item.a}}{{item.s}}{{item.d}}</p>
                        <p>姓名：{{item.n}}</p>
                        <p>电话：{{item.tel}}</p>
                    </div>
                </Card>
            </i-col>
            <i-col :span="6" v-if="arr.length!=4">
                <Card class="card">
                    <div @click="isShowModal=true">
                        +
                    </div>
                </Card>
            </i-col>
        </Row>
        <Modal v-model="isShowModal" title="添加收货地址">
            <p>
                <b>请选择省市县镇</b>
                <Dropdown placement="bottom-start" trigger="custom" :visible="visible" style="margin-left: 20px">
                    <a href="javascript:void(0)" @click="handleOpen">
                        <span v-if="jie==''">请选择省市县镇</span>
                        <span v-else>
                            {{sheng}}{{shi}}{{qu}}{{jie}}(点击修改)
                        </span>
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <div class="drawdowminnerbox">
                            <Drawdowminner @closeDrawdoen="closeDrawdoen" />
                        </div>
                        <div style="text-align: right;margin:10px;">
                            <Button type="primary" @click="handleClose">确定</Button>
                        </div>
                    </DropdownMenu>
                </Dropdown>
            </p>
        </Modal>
    </div>
</template>

<script>
    import axios from 'axios';
    import Drawdowminner from './components/Drawdowminner.vue'
    export default {
        components: {
            Drawdowminner,
        },
        data(){
            return {
                arr:[],
                isShowModal:true,
                visible: false,
                sheng:'',
                shi:'',
                qu:'',
                jie:''
            }
        },
        methods: {
            closeDrawdoen(c){
                console.log(c);
                this.sheng=c.sheng;
                this.shi=c.shi;
                this.qu=c.qu;
                this.jie=c.jie;
                this.visible=false;
                
            },
            handleOpen () {
                this.visible = true;
            },
            handleClose () {
                this.visible = false;
            }
        },
        created () {
            axios.get('http://www.aiqianduan.com:56506/shdz/xiaozhou').then(res=>{
                console.log(res.data);
                this.arr=res.data;
                
            })
        },
    }
</script>

<style lang="less" scoped>
    .card{
        height:160px;
        text-align:center;
        line-height:120px;
        font-size:80px;
        font-weight:bold;
    } 
    .drawdowminnerbox{
        width: 400px;
        padding:10px;
    }  
</style>