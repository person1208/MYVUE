<template>
    <div>
       
        <div style="width:1100px;margin:30px auto;">
            <CheckboxGroup v-model="color">
                {{color}}
                <Checkbox :label="item" v-for="item in ['红','黄','蓝','绿']" :key="item">
                    <span>{{item}}</span>
                </Checkbox>                
            </CheckboxGroup>
            <Table stripe  :columns="columns" :data="datacars" />
            <Page :total="total"  :current="current" :page-size="10" @on-change="changePage" />
        </div>
        <br>
         <DatePicker />
        <div style="width:600px;margin:30px auto;">
            <Table stripe  :columns="columns1" :data="data1" />
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        created(){
            this.loadData();
        },
        methods: {
            changePage(p) {
                console.log(p);
                this.current=p;
                this.loadData();
            },
            loadData(){
                axios.get('http://www.aiqianduan.com:56506/cars?page='+this.current+'&color='+this.color.join('v')).then(data=>{
                    this.datacars=data.data.results;
                    this.total=data.data.total;
                });
            }
        },
        data () {
            return {
                total:0,
                current:1,
                color:[],
                columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
                columns: [
                    {
                        title:'图片',
                        key:'img',
                        render(h,{row}){   
                            console.log(row);
                                                     
                            return h('div',[
                                h('img',{
                                    style:{
                                        width:'120px',
                                        height:'80px'
                                    },
                                    attrs:{
                                        src:'http://aiqianduan.com:56506/images/carimages_small/'+row.id+'/view/'+row.img
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
                datacars:[

                ]

            }
        },
        watch: {
            color() {
                this.current=1;
                this.loadData();
            }
        },
    }
</script>

<style lang="less" scoped>

</style>