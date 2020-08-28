<template>
    <div class="body">
        <header>
            <div class="header">
                我的易购
            </div>
            <div class="information">
                <div class="head">
                    <img src="../../assets/images/center_head.jpg" alt="">
                    <div class="identification">去实名认证</div>
                </div>
                <div class="acc">
                    <p>176*****52</p>
                    <div>升级权益</div>
                </div>
                <div class="member">
                    <img src="../../assets/images/member.png">
                </div>
            </div>
            <ul class="package">
                <li>
                    <p>0</p>
                    <p>优惠券</p>
                </li>
                <li>
                    <p>0</p>
                    <p>领云钻</p>
                </li>
                <li>
                    <p>5</p>
                    <p>足迹</p>
                </li>
                <li>
                    <p>0</p>
                    <p>我的关注</p>
                </li>
            </ul>
            <div class="vip">
                <p>
                    <img src="../../assets/images/vip.png" alt="">
                </p>
                <p class="intro">
                    【免费】您有一张运费券待领取
                </p>
                <span>立即领取</span>
            </div>
        </header>
        <div class="order">
            <div>
                <span class="title">我的订单</span>
                <span class="look">查看全部<i></i></span>
            </div>
            <ul>
                <li>
                    <img src="../../assets/images/order-icon01.png" alt="">
                    <p>待支付</p>
                </li>
                <li>
                    <img src="../../assets/images/order-icon02.png" alt="">
                    <p>待收货</p>
                </li>
                <li>
                    <img src="../../assets/images/order-icon03.png" alt="">
                    <p>评价有礼</p>
                </li>
                <li>
                    <img src="../../assets/images/order-icon04.png" alt="">
                    <p>退换/售后</p>
                </li>
                <li>
                    <img src="../../assets/images/order-icon05.png" alt="">
                    <p>常够清单</p>
                </li>
            </ul>
        </div>

        <div class="tools">
            <div>
                <span class="title">必备工具</span>
            </div>
            <ul>
                <li>
                    <img src="../../assets/images/m2.png" alt="">
                    <p>红包</p>
                </li>
                <li>
                    <img src="../../assets/images/m3.png" alt="">
                    <p>店铺关注</p>
                </li>
                <li>
                    <img src="../../assets/images/m4.png" alt="">
                    <p>足迹</p>
                </li>
                <li>
                    <img src="../../assets/images/m5.png" alt="">
                    <p>客户服务</p>
                </li>
                <li>
                    <img src="../../assets/images/m6.png" alt="">
                    <p>必抢清单</p>
                </li>
                <li>
                    <img src="../../assets/images/m7.png" alt="">
                    <p>拼购</p>
                </li>
                <li>
                    <img src="../../assets/images/m8.png" alt="">
                    <p>校园VIP</p>
                </li>
                <li>
                    <img src="../../assets/images/m9.png" alt="">
                    <p>我的试用</p>
                </li>
            </ul>
        </div>
        <div class="like">
            <p>
                <img src="../../assets/images/like.webp">
            </p>
            <ul>
                <li v-for="(item,index) in likes">
                    <img :src="item.src">
                    <p class="title">{{item.title}}</p>
                    <p class="lab">
                        <span v-if="item.ss!=''" class="ss">{{item.ss}}</span>
                        <span v-if="item.action!=''" class="action">{{item.action}}</span>
                        <span v-if="item.fr!=''" class="fr">{{item.fr}}</span>
                        <span v-if="item.ds!=''" class="ds">{{item.ds}}</span>
                    </p>
                    <p class="bottom">
                        <span class="price">￥<i class="price">{{item.price}}</i></span>
                        <span v-if="item.eva!=''" class="eva">{{item.eva}}</span>
                        <span v-if="item.adv!=''" class="adv">{{item.adv}}</span>
                    </p>
                    
                </li>
            </ul>
        </div>

    </div>
</template>
<script>
    export default{
        data(){
            return{
                likes:[
                    {
                        src:"./src/assets/images/l1.jpg",
                        title:"华为 HUAWEI 畅享20 Pro 8GB+128GB 幻夜黑 超清全视屏 超广角AI三摄 移动联通电信5G全面屏全网通手机",
                        ss:"自营",
                        action:"秒杀", 
                        fr:"苏宁",
                        adv:"广告",
                        price:"2999"
                    },
                    {
                        src:"./src/assets/images/l1.jpg",
                        title:"华为 HUAWEI 畅享20 Pro 8GB+128GB 幻夜黑 超清全视屏 超广角AI三摄 移动联通电信5G全面屏全网通手机",
                        ss:"自营",  //self
                        action:"",  //
                        gb:"", //group buy
                        fr:"",
                        adv:"",
                        eva:"20+评价",
                        adv:"",
                        price:"2999"
                    },
                    {
                        src:"./src/assets/images/l1.jpg",
                        title:"华为",
                        ss:"自营",  //self
                        action:"抢",  //
                        gb:"", //group buy
                        fr:"",
                        adv:"",
                        eva:"20+评价",
                        adv:"",
                        price:"2999"
                    },
                    {
                        src:"./src/assets/images/l1.jpg",
                        title:"华为 HUAWEI 畅享20 Pro 8GB+128GB 幻夜黑 超清全视屏 超广角AI三摄 移动联通电信5G全面屏全网通手机",
                        ss:"自营",  //self
                        action:"",  //
                        gb:"", //group buy
                        fr:"",
                        adv:"",
                        eva:"20+评价",
                        adv:"",
                        price:"2999"
                    },
                    {
                        src:"./src/assets/images/l1.jpg",
                        title:"华为 HUAWEI 畅享20 Pro 8GB+128GB 幻夜黑 超清全视屏 超广角AI三摄 移动联通电信5G全面屏全网通手机",
                        ss:"自营",  //self
                        action:"",  //
                        gb:"", //group buy
                        fr:"",
                        adv:"",
                        eva:"20+评价",
                        adv:"",
                        price:"2999"
                    },
                    {
                        src:"./src/assets/images/l1.jpg",
                        title:"华为 HUAWEI 畅享20 Pro 8GB+128GB 幻夜黑 超清全视屏 超广角AI三摄 移动联通电信5G全面屏全网通手机",
                        ss:"自营",  //self
                        action:"",  //
                        gb:"", //group buy
                        fr:"",
                        adv:"",
                        eva:"20+评价",
                        adv:"",
                        price:"2999"
                    },
                    {
                        src:"./src/assets/images/l1.jpg",
                        title:"华为 HUAWEI 畅享20 Pro 8GB+128GB 幻夜黑 超清全视屏 超广角AI三摄 移动联通电信5G全面屏全网通手机",
                        ss:"自营",  //self
                        action:"",  //
                        gb:"", //group buy
                        fr:"",
                        adv:"",
                        eva:"20+评价",
                        adv:"",
                        price:"2999"
                    },
                    {
                        src:"./src/assets/images/l1.jpg",
                        title:"华为 HUAWEI 畅享20 Pro 8GB+128GB 幻夜黑 超清全视屏 超广角AI三摄 移动联通电信5G全面屏全网通手机",
                        ss:"自营",  //self
                        action:"",  //
                        gb:"", //group buy
                        fr:"",
                        adv:"",
                        eva:"20+评价",
                        adv:"",
                        price:"2999"
                    }
                ]
            }
        }
    }
</script>
<style scoped>
        .like{
            margin-top:5%;
        width:95%;
        margin-left:auto;
        margin-right:auto;
    }
    .like>p{
        width:100%;
    }
    .like>p img{
        width:100%;
    }
    .like ul{
        width:100%;
        overflow:hidden;

    }
    .like ul li{
        width:48%;
        float:left;
        margin-bottom:3%;
        background:white;
        border-radius:10px;
    }
    .like ul li:nth-of-type(2n){
        margin-left:3%; 
    }
    .like ul img{
        width:100%;
        border-radius:10px;
    }
    .like ul .title{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 行数 */
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        font-size:13px;
        font-weight:bold;
    }
    .like .lab>span{
        font-size:12px;
    }
    .like .lab span{
        border-radius:3px;
    }
    .like .lab span.ss{
        background-color:#ffcc00;
        color:black;
    }
    .like .lab span.action{
        background-color:#FBFEEE;
        border:1px solid #FFBB00;
    }
    .like .lab span.fr{
        background-color:#7A51FA;
        color:white;
    }
    .like li p{
        margin-left:3%;
    }
    .like .title{
        height:34px;
    }
    .like .lab{
        height:34px;
        line-height:34px;
        vertical-align:center;
    }
    .like li>p{
        height:34px;
    }
    .like .bottom .price{
        color:red;
        font-size:12px;
    }
    .like .bottom i.price{
        font-size:18px;
        font-weight:bold;
        font-style:normal;
    }
    .like .bottom .eva{
        font-size:12px;
        color:rgb(153,153,153);
        margin-left:1%;
    }
    .like .bottom .adv{
        font-size:12px;
        margin-left:43%;
        color:rgba(153,153,153,0.3);
    }



    .body{
        background-color: rgba(242, 242, 242, 1);
    }
    .tools .title{
        width: 50%;
        font-size: 14px;
        font-weight:bold;
        float: left;
    }
    .tools .look{
        width: 25%;
        float: right;
        font-size: 12px;
        overflow: hidden;
        position: relative;
    }
    .tools .look img{
        width: 100%;
    }
    .tools .look i{
        width: 13px;
        height:13px;
        float: right;
        margin-left: 1%;
        background:url('../../assets/images/next.png') no-repeat;
        background-size:100%;
        position: absolute;
        right: 0px;
        top:50%;
        transform:translateY(-50%);
    }
    .tools div{
        width: 92%;
        overflow: hidden;
        padding-left:2%;
        padding-right:6%;
        padding-top:3%;
    }
    .tools li img{
        width: 1.96rem;
        height: 1.96rem;
    }
    .tools ul li{
        margin-top:3%;
        width:25%;
        float: left;
        text-align: center;
        font-size: 12px;
        color:#999999;
    }
    .tools ul{
        width: 100%;
        overflow: hidden;
        margin-top:3%;
    }
    .tools{
        width: 91%;
        margin-top:3%;
        background-color: white;
        margin-left: auto;
        margin-right: auto;
        border-radius:8px;
        padding-bottom: 3%;
        overflow: hidden;
    }




    .order .title{
        width: 50%;
        font-size: 14px;
        font-weight:bold;
        float: left;
    }
    .order .look{
        width: 25%;
        float: right;
        font-size: 12px;
        overflow: hidden;
        position: relative;
    }
    .order .look img{
        width: 100%;
    }
    .order .look i{
        width: 13px;
        height:13px;
        float: right;
        margin-left: 1%;
        background:url('../../assets/images/next.png') no-repeat;
        background-size:100%;
        position: absolute;
        right: 0px;
        top:50%;
        transform:translateY(-50%);
    }
    .order div{
        width: 92%;
        overflow: hidden;
        padding-left:2%;
        padding-right:6%;
        padding-top:3%;
    }
    .order li img{
        width: 50%;
    }
    .order ul li{
        width:20%;
        float: left;
        text-align: center;
        font-size: 12px;
        color:#999999;
    }
    .order ul{
        width: 100%;
        overflow: hidden;
        margin-bottom: 5%;
        margin-top:3%;
    }
    .order{
        width: 91%;
        margin-top:10%;
        background-color: white;
        margin-left: auto;
        margin-right: auto;
        border-radius:8px;
        padding-bottom: 3%;
        overflow: hidden;
    }
    .vip::after{
        content: '';
        position:absolute;
        width:20px;
        height:20px;
        right:0px;
        top:50%;
        transform: translateY(-50%);
        background:url('../../assets/images/r-icon.png') no-repeat;
        background-size: 100%;
    }
    .vip p img{
        width: 100%;
    }
    .vip p>:nth-of-type(1){
        width: 15%;
        float: left;
    }
    .vip span{
        width: 20%;
        float: right;
        font-size: 12px;
        padding-top:2%;
    }
    .vip .intro{
        width: 60%;
        float: left;
        padding-top:2%;
        margin-left:2%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 行数 */
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .vip p{
        font-size: 12px;
    }
    .vip{
        width:80%;
        overflow: hidden;
        margin-left: auto;
        margin-right: auto;
        padding-top:2%;
        padding-bottom:2%;
        padding-left:2%;
        padding-right:10%;
        background-color: white;
        border-radius: 8px;
        position: relative;
        top:23px;
    }
    .package{
        width: 100%;
        margin-top:5%;
        overflow: hidden;
    }
    .package li p:nth-of-type(1){
        font-weight: bold;
    }
    .package li{
        text-align: center;
        font-size:13px;
        width: 25%;
        float: left;
    }
    .information .member img{
        width:100%;
    }
    .information .member{
        width:21%;
        float: right;
    }
    .information .acc div{
        padding-left:8%;
        width: 90%;
        background-color: rgb(225,187,71);
        border-radius:10px;
        color:white;
        margin-top:10%;
        position: relative;
    }
    .information .acc div::after{
        content:'';
        position:absolute;
        width:10px;
        height:10px;
        right:0px;
        top:3px;
        background: url('../../assets/images/center_acc.png') no-repeat;
        background-size: 50%;
    }
    .information .acc p{
        font-weight:bold;
        
    }
    .information .acc{
        width:25%;
        font-size:13px;
        float: left;
        margin-left:2%;
        padding-top:3%;
    }
    .information .head .identification{
        background-color: rgb(255,236,137);
        border-radius:10px;
        width: 100%;
        position: absolute;
        bottom: 0px;
        font-size: 12px;
    }
    .information .head img{
        width: 80%;
        border-radius:50%;
    }
    .information .head{
        width:25%;
        float: left;
        text-align: center;
        font-size:13px;
        position: relative;
    }
    .information{
        width:88%;
        margin-top:10%;
        padding-left:6%;
        padding-right:6%;
        overflow: hidden;
    }
    header{
        width: 100%;
        background-color:rgb(255,219,71);
    }
    .header{
        width: 92%;
        text-align: center;
        padding-top: 1%;    
        padding-bottom:1%;
        font-size:18px;
        font-weight:bold;
        margin-left:4%;
        margin-right:4%;
        position: relative;
    }
    .header::after{
        content:'';
        position:absolute;
        width:20px;
        height:20px;
        right:0px;
        top:50%;
        transform: translateY(-50%);
        background: url("../../assets/images/setting.png") no-repeat;
        background-size: 100%;
    }
</style>