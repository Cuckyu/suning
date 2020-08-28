<template>
    <div>
        <header>
            <img :src="items.src" v-if="items.src!=''">
            <nav v-if="0!=items.show">
                <ul class="labS">
                    <li v-for="(item,index) in items.products">
                        {{item.title}}
                    </li>
                </ul>
            </nav>
        </header>
        <main :class="{change1:items.src!=''}">
            <ul>
                <li v-for="(item,index) in items.products" >
                    <h2 class="title">{{item.title}}</h2>
                    <ul class="con">
                        <li v-for="(item,index) in item.list" @click="search(item.con)">
                            <img :src="item.src">
                            <p>{{item.con}}</p>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="bottom">
                进入{{items.title}}频道
            </div>
        </main>
        
    </div>
</template>
<script>
    export default{
        props:['items'],
        data(){
            return{

            }
        },
        methods:{
            search(p_name){
                this.$router.push("/search/" + p_name);
            }
        }
    }
</script>
<style  scoped>
    .labS{
        width:150%;
        height:26px;
        overflow: hidden;
    }
    .labS li{
        width:14%;
        float:left;
        font-size: 12px;
    }
    header{
        width:100%; 
    }
    .con li{
        float: left;
    }
    .con li img{
        width: 100%;
    }
    main ul{
        width:100%;
    }
    main ul li{
        width:100%;
    }
    .con{
        overflow: hidden;
        width:100%;
    }
    .con li{
        margin-right: 5%;
        margin-top: 5%;
        font-size: 12px;
        text-align:center;
        width:26%;
    }
    .title{
        margin-top:6%;
    }
    main{
        height:calc(100vh - 88px);
        overflow: auto;
    }
    div .bottom{
        margin-top:10%;
        width:93%;
        background-color:white;
        border: 1px solid rgba(153,153,153,0.5);
        text-align: center;
        border-radius:5px;
        font-size:14px;
        height:27px;
        line-height:27px;
        margin-bottom:25%;
    }
    nav{
        width: 100%;
        overflow: auto;
    }
    header img{
        width: 95%;
        height:92px;
        border-radius: 10px;
    }
    .change1{
        height:calc(100vh - 184px);
    }
</style>