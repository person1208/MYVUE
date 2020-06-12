<template>
    <div>
       <div style="width:1200px;margin:20px auto;">
           <CheckboxGroup v-model="color">
                <Checkbox :label="item" v-for="item in ['红','黄','蓝','黑']" :key="item">
                    <span>{{item}}</span>
                </Checkbox>
            </CheckboxGroup>
            <CheckboxGroup v-model="fuel">
                <Checkbox :label="item" v-for="item in ['汽油', '柴油', '油电混合', '纯电动']" :key="item">
                    <span>{{item}}</span>
                </Checkbox>
            </CheckboxGroup>
            <Table border :columns="columns1" :data="data1"></Table>
              <Page :total="total" :current="current" @on-change="changePage" show-elevator />
       </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
         data () {
            return {
                columns1: [
                    {
                        title:'图片',
                        key:'img',
                        render(h,{row}){
                            return h('div',[
                                h('img',{
                                    attrs:{
                                        src:'http://aiqianduan.com:56506/images/carimages_small/'+row.id+'/view/'+row.img
                                    },
                                    style:{
                                        width:'120px',
                                        height:'80px'
                                    }
                                })
                            ])
                        }
                    },
                    {
                        title: '编号',
                        key: 'id'
                    },
                    {
                        title: '品牌',
                        key: 'brand'
                    },
                    {
                        title: '车系',
                        key: 'series'
                    },
                    {
                        title: '颜色',
                        key: 'color'
                    },
                    {
                        title: '排量',
                        key: 'engine'
                    },
                    {
                        title: '尾气',
                        key: 'exhaust'
                    },
                    {
                        title: '燃料',
                        key: 'fuel'
                    }
                
                ],
                data1: [],
                total:0,
                current:1,
                color:[],
                fuel:[]
            }
        },
        created () {
           this.loadData();
        },        
        methods: {
            loadData(){
                axios.get('http://www.aiqianduan.com:56506/cars?page='+this.current+'&color='+this.color.join('v')+'&fuel='+this.fuel.join('v')).then(data=>{
                    this.data1=data.data.results;
                    this.total=data.data.total;
                })
            },
            changePage(p) {
                this.current=p;
                this.loadData();
            }
        },
        watch: {
            color() {
                this.current=1;
                this.loadData();
            },
            fuel(){
                this.current=1;
                this.loadData();
            }
        },
    }
</script>

<style lang="less" scoped>
  
</style>