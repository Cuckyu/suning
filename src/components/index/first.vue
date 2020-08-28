<template>
    <main>
        <router-view></router-view>
        <ul class="footer">
            <li v-for="(item,index) in list">
                <router-link :to="item.path">
                    <img :src="item.src" class="pic"/>
                    <img :src="item.src_c" class="src_c"/>
                    <p class="entry">{{item.con}}</p>
                    <p class="entry_c">{{item.con2}}</p>
                </router-link>
            </li>
        </ul>
    </main>
</template>
<script>
    export default{
        data(){
            return{
                list:[
                    {
                        src:"./src/assets/images/footer_p2.png",
                        src_c:"./src/assets/images/footer_p1.png",
                        con:"首页",
                        path:"/index"
                    },
                    {
                        src:"./src/assets/images/footer_p4.png",
                        src_c:"./src/assets/images/footer_p3.png",
                        con:"分类",
                        path:"/classify"
                    },
                    {
                        src:"./src/assets/images/footer_p7.png",
                        src_c:"./src/assets/images/footer_p5.png",
                        con:"必抢清单",
                        path:"/must"
                    },
                    {
                        src:"./src/assets/images/footer_p9.png",
                        src_c:"./src/assets/images/footer_p6.png",
                        con:"购物车",
                        path:"/car"
                    },
                    {
                        src:"./src/assets/images/footer_p8.png",
                        src_c:"./src/assets/images/footer_p10.png",
                        con:"我的",
                        path:"/my"
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    .footer li{
        width:20%;
        float:left;
        box-sizing: border-box;
        text-align:center;
        font-size:12px;
    }
    .footer a{
       text-decoration: none;
    }
    .footer{
        padding-top: 2%;
        padding-bottom: 1%;
        width:100%;
        position:fixed;
        left:0px;
        bottom:0px;
        right:0px;
        background-color: white;
    }
    .footer img{
        width:30%;
    }
</style>
<style>
    .pic{
        display:inline-block;
    }
    .src_c{
        display:none;
    }
    .router-link-active .src_c{
        display:inline-block;
    }
    .router-link-active {
        display:block;
    }
    .router-link-active .pic{
        display:none;
    }
    a:link {
    font-size: 12px;
    color: #666666;
    text-decoration: none;
    }
    a:visited {
    font-size: 12px;
    color: #666666;
    text-decoration: none;
    }
    a:hover {
    font-size: 12px;
    color: #666666;
    text-decoration: underline;
    }
</style>