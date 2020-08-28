<template>
    <div>
        <nav>
            <ul>
                <li v-for="(item,index) in items.products">
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
        </nav>
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
                if(p_name == ''){
                    return;
                }
                this.$router.push("/search/" + p_name);
            }
        }
    }
</script>
<style scoped>
    ul ul li{
        width:26%;
        float:left;
    }
    img{
        width: 100%;
    }
    .con{
        overflow: hidden;
    }
    .con li{
        margin-right: 5%;
        margin-top: 5%;
        font-size: 12px;
        text-align:center;
    }
    .title{
        font-size: 12px;
        font-weight:bold;
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
        width:100%;
        height:calc(100vh - 62px);
        overflow: auto;
    }
</style>