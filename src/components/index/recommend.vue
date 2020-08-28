<template>
    <div>
        <nav>
            <h2>热门推荐</h2>
            <ul>
                <li v-for="(item,index) in list" @click="search(item.con)">
                    <img :src="item.src">
                    <p>{{item.con}}</p>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                list:[
                    {
                        src:"./src/assets/images/c1.png",
                        con:"手机"
                    },
                    {
                        src:"./src/assets/images/c2.jpg",
                        con:"笔记本"
                    },
                    {
                        src:"./src/assets/images/c3.jpg",
                        con:"平板电脑"
                    },
                    {
                        src:"./src/assets/images/c4.jpg",
                        con:"冰箱"
                    },
                    {
                        src:"./src/assets/images/c5.jpg",
                        con:"电风扇"
                    },
                    {
                        src:"./src/assets/images/c6.jpg",
                        con:"破壁机"
                    },
                    {
                        src:"./src/assets/images/c7.jpg",
                        con:"空调"
                    },
                    {
                        src:"./src/assets/images/c8.jpg",
                        con:"电视"
                    },
                    {
                        src:"./src/assets/images/c9.jpg",
                        con:"热水器"
                    },
                    {
                        src:"./src/assets/images/c10.jpg",
                        con:"哑铃"
                    },
                    {
                        src:"./src/assets/images/c11.jpg",
                        con:"瑜伽垫"
                    },
                    {
                        src:"./src/assets/images/c12.jpg",
                        con:"跑步机"
                    },
                    {
                        src:"./src/assets/images/c13.jpg",
                        con:"洗衣机"
                    },
                    {
                        src:"./src/assets/images/c14.png",
                        con:"手表"
                    },
                    {
                        src:"./src/assets/images/c15.png",
                        con:"奶粉"
                    },
                    {
                        src:"./src/assets/images/c16.jpg",
                        con:"白酒"
                    },
                    {
                        src:"./src/assets/images/c17.jpg",
                        con:"休闲零食"
                    },
                    {
                        src:"./src/assets/images/c19.jpg",
                        con:"水果"
                    },
                    {
                        src:"./src/assets/images/c20.jpg",
                        con:"文化图书"
                    },
                    {
                        src:"./src/assets/images/c21.jpg",
                        con:"生活用纸"
                    },
                    {
                        src:"./src/assets/images/c18.jpg",
                        con:"黄金项链"
                    }
                ]
            }
        },
        methods:{
            search(p_name){
                this.$router.push("/search/" + p_name);
            }
        }
    }
</script>
<style scoped>
    ul{
        width:100%;
        overflow: hidden;
        padding-bottom: 20%;
    }
    ul li{
        float:left;
        width:26%;
        text-align:center;
        font-size:13px;
        margin-right:7%;
        
        margin-bottom:3%;
    }
    ul li img{
        width: 100%;
        height: 100%;
        width: 3rem;
        height: 3rem;
    }
    h2{
        font-size:12px;
        font-weight:bold;
        margin-bottom:3%;
    }
    nav{
        width:100%;
        height:calc(100vh - 62px);
        overflow: auto;
    }
</style>