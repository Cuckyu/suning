<template>
    <div>
        <div class="hot_s">
            <h2>热门搜索</h2>
            <ul>
                <li v-for="(item,index) in list" :class="{hot:1==item.hot}">
                    {{item.con}}
                </li>
            </ul>
        </div>
        <div class="history">
            <main>
                <div>
                    <h2 class="left">历史记录</h2>
                    <span class="right"></span>
                </div>
                <ul>
                    <li v-for="(item,index) in list" :class="{hot:1==item.hot}">
                        {{item.con}}
                    </li>
                </ul>
            </main>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                list:[
                    {
                        con:"按摩椅",
                        hot:0
                    },
                    {
                        con:"床垫低至699",
                        hot:1
                    },
                    {
                        con:"洗发水买1送1",
                        hot:1
                    },
                    {
                        con:"按摩椅",
                        hot:0
                    },
                    {
                        con:"按摩椅",
                        hot:0
                    },
                    {
                        con:"洗发水2件5折",
                        hot:1
                    },
                    {
                        con:"按摩椅",
                        hot:0
                    },
                    {
                        con:"按摩椅",
                        hot:0
                    },
                    {
                        con:"按摩椅",
                        hot:0
                    },
                    {
                        con:"按摩椅",
                        hot:0
                    },
                    {
                        con:"按摩椅",
                        hot:0
                    },
                    {
                        con:"按摩椅",
                        hot:0
                    }
                ]
            }
        }
    }
</script>
<style>
    .hot_s{
        width:92%;
        background-color: white;
        margin-left: auto;
        margin-right: auto;
        padding-top:5%;
        overflow: hidden;
        
    }
    .hot_s h2{
        font-size: 16px;
        color:#DDDDDD;
    }
    .hot_s ul{
        margin-top:4%;
        width: 100%;
    }
    .hot_s ul li{
        width:30%;
        height: 30px;
        line-height: 30px;
        font-size: 13px;
        float: left;
        background-color: #F2F2F2;
        text-align: center;
        margin-right: 5%;
        margin-bottom: 3%;
        color:rgb(51, 51, 51);
        border-radius: 5px;
        
    }
    .hot_s ul li:nth-of-type(3n){
        margin-right: 0px;
    }
    .hot_s ul li.hot{
        color:#FF6600;
    }
    .history{
        width: 100%;
        border-top:1px solid #DDDDDD;
        margin-top:3%;
        padding-top:5%;
    }
    .history main{
        width: 92%;
        margin-right: auto;
        margin-left: auto;
    }
    .history main>div{
        width: 100%;
        overflow: hidden;
    }
    .history main .left{
        float:left;
        color:#DDDDDD;
    }
    .history main .right{
        float:right;
        width:20px;
        height:20px;
        background: url("../../assets/images/del.png") no-repeat;
        background-size: 53%;
        background-position-y:2px;
        background-position-x:6px;
    }
    .history ul{
        margin-top:4%;
        width: 100%;
    }
    .history ul li{
        width:30%;
        height: 30px;
        line-height: 30px;
        font-size: 13px;
        float: left;
        background-color: #F2F2F2;
        text-align: center;
        margin-right: 5%;
        margin-bottom: 3%;
        color:rgb(51, 51, 51);
        border-radius: 5px;
        
    }
    .history ul li:nth-of-type(3n){
        margin-right: 0px;
    }
</style>