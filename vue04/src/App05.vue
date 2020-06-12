<template>
    <div style="margin:20px auto;width:1200px;">
        <Row :gutter="10">
            <i-col :span="6" v-for="(item,index) in arr" :key="index">
                <Card>
                    <p slot="title"><b>{{item.alias}}</b></p>
                    <p slot="extra">
                        <a href="">删除</a>
                        <a href="">修改</a>
                    </p>
                    <div>
                        <p>地址：{{item.p}}{{item.c}}{{item.a}}{{item.s}}</p>
                        <p>姓名：{{item.tel}}</p>
                        <p>电话：{{item.n}}</p>
                    </div>
                </Card>
            </i-col>
            <i-col :span='6' v-if="arr.length!=4">
                <Card>
                    <div style="height:115px;text-align:center;line-height:120px;" @click="drawdowninner">+</div>
                </Card>
            </i-col>
        </Row>
        <Modal v-model="isModalshow"  title="添加收获地址" >
            <div>
                <b>请选择省市县镇</b>
                <Dropdown placement="bottom-start" trigger="custom" :visible="visible" style="margin-left: 20px">
                    <a href="javascript:void(0)" @click="visible=true">
                        <span v-if="jiedao==''">请选择省市县镇</span>
                        <span v-else>{{sheng}}{{shi}}{{xian}}{{jiedao}}</span>
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list" style="width:400px;">

                        <div>
                            <DropdownInner @close="close" />
                        </div>
                        <div style="text-align: right;margin:10px;">
                            <Button type="primary" @click="visible=false">关闭</Button>
                        </div>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </Modal>
    </div>
</template>

<script>
    import axios from 'axios';
    import DropdownInner from './components/DrawdownInner.vue'
    export default {
        data() {
            return {
                arr:[],
                isModalshow:false,
                visible:false,
                sheng:'',
                shi:'',
                xian:'',
                jiedao:''
            }
        },
        components: {
            DropdownInner,
        },
        methods: {
            close(e) {
              this.visible=false;  
              this.sheng=e.sheng;
              this.shi=e.shi;
              this.xian=e.xian;
              this.jiedao=e.jiedao;
            },
            drawdowninner(){
                this.isModalshow=true
            }
        },
        created () {
            axios.get('http://www.aiqianduan.com:56506/shdz/zhouzhou').then(res=>{
                console.log(res);
                this.arr=res.data;
                
            });
        },
    }
</script>

<style lang="less" scoped>

</style>