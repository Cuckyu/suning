<template>
   <div>
       <header>
           <ul>
               <li>联系客服</li>
               <li>企业注册</li>
           </ul>
       </header>
       <nav>
           <img src="../../assets/images/login1.png">
           <p>欢迎登录苏宁易购</p>
       </nav>
       <section>
           <component :is="way"></component>
       </section>
       <div class="login" @click="login()">
           登录
       </div>
       <div class="account" @click="change()">
           {{login_way}}登录
       </div>
       <footer>
           <p class="other">其他登录方式</p>
           <ul>
               <li><img src="../../assets/images/w1.png" alt=""></li>
               <li><img src="../../assets/images/w2.png" alt=""></li>
               <li><img src="../../assets/images/w3.png" alt=""></li>
           </ul>
           <p class="protocol">我同意<span>《苏宁易购会员章程》</span><span>《易付宝协议》</span></p>
       </footer>
   </div>
</template>
<script>
    import mbc from './mbc.vue';
    import account from './account.vue';
    export default{
        data(){
            return{
                way:"v-mbc",
                login_way:"账号密码"
            }
        },
        methods:{
            change(){
                this.way = this.way=="v-mbc" ? "v-account" : "v-mbc";
                this.login_way = this.login_way=="账号密码" ? "验证码":"账号密码";
            },
            login(){
                this.$router.push('/center');
            }
        },
        components:{
            'v-mbc':mbc,
            'v-account':account,
        }
    }
</script>
<style scoped> 
    header ul{
        width:35%;
        float:right;
        padding-top:3%;
    }
    header ul li{
        width:50%;
        float:left;
        font-size: 12px;
        text-align: center;
    }
    header{
        overflow: hidden;
    }
    header ul li:nth-of-type(1){
        border-right:1px solid #DDDDDD;
        box-sizing: border-box;
    }
    nav{
        width:80%;
        margin-left:auto;
        margin-right:auto; 
        overflow: hidden; 
        margin-top:8%;
    }
    nav img{
        width:15%;
        float: left;
    }
    nav p{
        float: left;
        width:79%;
        padding-top:4%;
        margin-left:5%;
        font-size:18px;
    }
    .login{
        width: 80%;
        margin:10% auto auto auto;
        height:45px;
        text-align:center;
        line-height:45px;
        background-color: #FFCC00;
        border-radius:10px;
        font-weight: bold;
        font-size: 17px;
    }
    .account{
        width: 80%;
        margin:5% auto auto auto;
        text-align:center;
        border-radius:10px;
        font-size: 14px;
    }
    footer{
        margin:47% auto auto auto;
        width:80%;
    }
    footer ul li{
        width:11%;
        float: left;
        margin:4% 11%;
    }
    footer ul{
        width: 100%;
        overflow: hidden;
    }
    footer .other{
        font-size:12px;
        color:rgb(153,153,153);
        text-align: center;
    }
    footer img{
        width: 100%;
    }
    footer .protocol{
        width: 100%;
        font-size: 12px;
        text-align: center;
        color:rgb(153,153,153);

    }
    footer .protocol span{
        color:black;
    }
</style>