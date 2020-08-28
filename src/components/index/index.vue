<template>
    <div class="body">
        <header>
            <p>
                <span><router-link to="/classify"><img src="../../assets/images/classify.png" alt=""></router-link></span>
                <b><img src="../../assets/images/top.gif" alt=""></b>
                <i><router-link to="/my"><img src="../../assets/images/login.png" alt=""></router-link></i>
            </p>
            
            <div>
                <router-link to="/search/null">
                    <input type="text" placeholder="搜索">
                    <span></span>
                </router-link>
            </div>
        </header>
        <div class="header index_header">
            <p>
                <span>
                    <router-link to="/classify">
                        <img src="../../assets/images/classify.png" alt="">
                    </router-link>
                </span>
                <b>
                    <router-link to="/search/null">
                        <input type="text" placeholder="手机享24期免息">
                        <span></span>
                    </router-link>
                </b>
                <i>
                    <router-link to="/my">
                        <img src="../../assets/images/login.png" alt="">
                    </router-link>
                </i>
            </p>
        </div>
        <main>
            <div class="index_swipe">
                <mt-swipe :auto="4000" :show-indicators="false">
                    <mt-swipe-item>
                        <img src="../../assets/images/swipe1.jpg" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../../assets/images/swipe2.png" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../../assets/images/swipe3.png" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../../assets/images/swipe4.png" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../../assets/images/swipe6.jpg" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../../assets/images/swipe7.png" alt="">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
        </main>
        <div class="adv">
            <span v-for="(item,index) in adv">
                <img :src="item" />
            </span>
        </div>
        <ul class="nav">
            <li v-for="(item,index) in nav">
                <img :src="item.src">
                <p>{{item.con}}</p>
            </li>
        </ul>
        <div class="banner">
            <ul>
                <li v-for="(item,index) in listBanner">
                    <h2>{{item.title}}<span class="time" v-if="item.time!=''"><i class="hour"></i>:<i class="minute"></i>:<i class="seconds"></i></span></h2>
                    <h6>{{item.con}}</h6>
                    <p>
                        <span class="left">
                            <img :src="item.src_1">
                            <div>
                                <b>{{item.con_1}}</b>
                            </div>
                        </span>
                        <span class="right">
                            <img :src="item.src_2">
                            <div>
                                <b>{{item.con_2}}</b>
                            </div>
                        </span>
                    </p>
                </li>
            </ul>
            <div class="bottom">
                <div class="left">
                    <h2>为您推荐</h2>
                    <p>精选频道</p>
                </div>
                <ul>
                    <li v-for="(item,index) in recommends">
                        <img :src="item.src">
                        <p>{{item.con}}</p>
                    </li>
                </ul>
            </div>
            
        </div>
        <div class="middle">
                <img :src="middle.src">
        </div>
        <div class="bd">
            <p>推荐榜单</p>
            <div class="bd_top">
                <div class="left">
                    <p><img :src="bd_left.src"></p>
                    <div>
                        <p class="type">{{bd_left.type}}</p>
                        <p class="title">{{bd_left.title}}</p>
                        <p class="con">{{bd_left.con}}</p>
                    </div>
                </div>
                <div class="middle_swipe">
                    <ul>
                        <li>
                            <p><img :src="bd_middle.src"></p>
                            <div>
                                <p class="type">{{bd_middle.type}}</p>
                                <p class="title">{{bd_middle.title}}</p>
                                <p class="con">{{bd_middle.con}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="right">
                    <p><img :src="bd_right.src"></p>                  
                    <div>
                        <p class="type">{{bd_right.type}}</p>
                        <p class="title">{{bd_right.title}}</p>
                        <p class="con">{{bd_right.con}}</p>
                    </div>
                </div>
            </div>
            <ul class="bd_show">
                <li v-for="(item,index) in bds">
                    <p class="title">{{item.title}}<span>{{item.type}}</span></p>
                    <p class="con">{{item.con}}</p>
                    <div>
                        <img :src="item.src_1">
                        <img :src="item.src_2">
                    </div>
                </li>
            </ul>
        </div>
        <div class="like">
            <p>
                <img src="../../assets/images/like.webp">
            </p>
            <ul>
                <li v-for="(item,index) in likes" @click="detail(item,index)">
                    <img :src="item.src">
                    <p class="title">{{item.title}}</p>
                    <p class="lab">
                        <span v-if="item.ss!=''" class="ss">{{item.ss}}</span>
                        <span v-if="item.action!=''" class="action" v-for="(action,action_index) in item.action">{{action}}</span>
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
        <div class="foot_b">
            <img src="../../assets/images/f1.png">
        </div>
    </div>
</template>
<script>
    export default{
        mounted(){
            var date = new Date();
                var hour = 23 - date.getHours();
                var minute = 59 - date.getMinutes();
                var second = 59 - date.getSeconds();
                if(hour<10){
                    hour = '0' + hour;
                }
                if(minute<10){
                    minute = '0' + minute;
                }
                if(second<10){
                    second = '0' + second;
                }
            $('.hour').html(hour);
            $('.minute').html(minute);
            $('.seconds').html(second);
            $('.time').css('display','inline');
            setInterval(function(){
                var date = new Date();
                var hour = 23 - date.getHours();
                var minute = 59 - date.getMinutes();
                var second = 59 - date.getSeconds();
                if(hour<10){
                    hour = '0' + hour;
                }
                if(minute<10){
                    minute = '0' + minute;
                }
                if(second<10){
                    second = '0' + second;
                }
                $('.hour').html(hour);
                $('.minute').html(minute);
                $('.seconds').html(second);
            },1000);

            $(window).scroll(function(e){
                var st = $(window).scrollTop();
                if(window.screen.height*2 < st){
                    $('.index_header').css('display','block');
                } else {
                    $('.index_header').css('display','none');
                }
            })
        },
        methods:{
            detail(item,index){
                // this.$router.push({path:'/detail',query:{});
                console.log(item.title);
                console.log(item.price);
                var title = item.title;
                var price = item.price;
                var src = item.src;
                var shop = item.shop;
                this.$router.push({ path: '/detail', query: {title:title,price:price,src:src,shop:shop}});
            }
        },
        data(){
            return{
                title:'',
                price:0,
                adv:[
                    "./src/assets/images/adv1.gif",
                    "./src/assets/images/adv2.gif"
                ],
                nav:[
                    {
                        src:"./src/assets/images/nav1.png",
                        con:"天天低价"
                    },
                    {
                        src:"./src/assets/images/nav2.png",
                        con:"苏宁超市"
                    },
                    {
                        src:"./src/assets/images/nav3.png",
                        con:"苏宁拼购"
                    },
                    {
                        src:"./src/assets/images/nav4.png",
                        con:"5G手机"
                    },
                    {
                        src:"./src/assets/images/nav5.png",
                        con:"苏宁家电"
                    },
                    {
                        src:"./src/assets/images/nav6.png",
                        con:"免费水果"
                    },
                    {
                        src:"./src/assets/images/nav7.png",
                        con:"赚钱消消乐"
                    },
                    {
                        src:"./src/assets/images/nav8.png",
                        con:"签到有礼"
                    },
                    {
                        src:"./src/assets/images/nav9.png",
                        con:"领券中心"
                    },
                    {
                        src:"./src/assets/images/nav10.png",
                        con:"更多频道"
                    }
                ],
                listBanner:[
                    {   
                        time:'123',
                        title:"天天低价",
                        con:"人气好货限时抢",
                        src_1:"./src/assets/images/b1.jpg",
                        con_1:"￥9379",
                        src_2:"./src/assets/images/b2.jpg",
                        con_2:"￥6389"
                    },
                    {
                        time:'',
                        title:"苏宁秒杀",
                        con:"品质好货天天秒",
                        src_1:"./src/assets/images/b3.jpg",
                        src_2:"./src/assets/images/b4.jpg",
                        con_1:"芷臻(zhizhen)",
                        con_2:"海尔(Haier)"
                    },
                    {
                        time:'',
                        title:"百亿补贴",
                        con:"心动七夕补贴价",
                        src_1:"./src/assets/images/b5.webp",
                        src_2:"./src/assets/images/b6.webp",
                        con_1:"补贴价89元",
                        con_2:"已补贴350元"
                    },
                    {
                        time:'',
                        title:"苏宁拼购",
                        con:"2人拼更实惠 全场包邮",
                        src_1:"./src/assets/images/b7.jpg",
                        src_2:"./src/assets/images/b8.jpg",
                        con_1:"2人拼9.9",
                        con_2:"2人拼69"
                    }
                ],
                recommends:[
                    {
                        src:"./src/assets/images/r1.webp",
                        con:"苏宁国际"
                    },
                    {
                        src:"./src/assets/images/r2.webp",
                        con:"苏宁Outlets"
                    },
                    {
                        src:"./src/assets/images/r3.webp",
                        con:"新品首发"
                    },
                    {
                        src:"./src/assets/images/r4.webp",
                        con:"0元试用"
                    }
                ],
                middle:{
                    src:"./src/assets/images/adv.png"
                },
                bds:[
                    {
                        title:"味鲜厨房调味榜",
                        type:"人气榜",
                        con:"卖爆6.6万件",
                        src_1:"./src/assets/images/recommend4.webp",
                        src_2:"./src/assets/images/recommend5.webp"
                    },
                    {
                        title:"家用电饭煲榜",
                        type:"人气榜",
                        con:"卖爆4.1万件",
                        src_1:"./src/assets/images/recommend6.webp",
                        src_2:"./src/assets/images/recommend7.webp"
                    },
                    {
                        title:"精选游泳运动榜",
                        type:"人气榜",
                        con:"卖爆3574件",
                        src_1:"./src/assets/images/recommend8.webp",
                        src_2:"./src/assets/images/recommend9.webp"
                    },
                    {
                        title:"畅享清凉风扇榜",
                        type:"人气榜",
                        con:"卖爆4.3万件",
                        src_1:"./src/assets/images/recommend10.webp",
                        src_2:"./src/assets/images/recommend11.webp"
                    }
                ],
                bd_left:{
                    src:"./src/assets/images/recommend1.webp",
                    type:"趋势榜",
                    title:"自动除霜对开门",
                    con:"本月趋势上升"
                },
                bd_right:{
                    src:"./src/assets/images/recommend3.webp",
                    type:"人气榜",
                    title:"人气热销手机榜",
                    con:"本月趋势上升"
                },
                bd_middle:{
                    src:"./src/assets/images/recommend2.webp",
                    type:"趋势榜",
                    title:"贴合水润面膜榜",
                    con:"本月趋势上升"
                },
                likes:[
                    {
                        src:"./src/assets/images/l1.jpg",
                        title:"华为 HUAWEI 畅享20 Pro 8GB+128GB 幻夜黑 超清全视屏 超广角AI三摄 移动联通电信5G全面屏全网通手机",
                        ss:"自营",
                        action:['秒杀'], 
                        fr:"苏宁",
                        adv:"广告",
                        price:"2999",
                        shop:"苏宁自营"
                    },
                    {
                        src:"./src/assets/images/like2.webp",
                        title:"苏宁锦鲤礼包SH",
                        ss:"自营",  //self
                        action:'',  
                        fr:"",
                        adv:"",
                        eva:"20+评价",
                        adv:"",
                        price:"50",
                        shop:"苏宁自营"
                    },
                    {
                        src:"./src/assets/images/like3.webp",
                        title:"广西小米蕉 2.5斤【拍4件减9元合并发9斤】",
                        ss:'',
                        action:['秒杀','满30减9'],
                        fr:"",
                        adv:"",
                        eva:"800+评价",
                        price:"7.98",
                        shop:"苏宁自营"
                    },
                    {
                        src:"./src/assets/images/like5.jpg",
                        title:"海尔（Haier） BCD-217WDVLU1 217升三门双变频智能家用冰箱 风冷无霜 高配双变频 节能小型家用电冰箱",
                        ss:'',
                        action:'',
                        fr:"",
                        adv:"广告",
                        eva:"",
                        price:"2499",
                        shop:"苏宁自营"
                    },
                    {
                        src:"./src/assets/images/like4.webp",
                        title:"百雀羚面膜女补水保湿护肤品套装 小雀幸静润补水保湿面膜10片装x2盒深层补水【20片】",
                        ss:'',
                        action:['领券99-10'],
                        fr:"",
                        adv:"",
                        eva:"100+评价",
                        price:"75",
                        shop:"苏宁自营"
                    },
                    {
                        src:"./src/assets/images/like6.webp",
                        title:"毛鸡蛋【2件起售】四川攀枝花凯特芒大果 2.5斤 单果300-1500g 热带新鲜水果大脸芒香芒果",
                        ss:'',
                        action:['抢','领券99-5'],
                        fr:"",
                        adv:"",
                        eva:"800+评价",
                        price:"10.9",
                        shop:"苏宁自营"
                    },
                    {
                        src:"./src/assets/images/like21.jpg",
                        title:"海尔统帅 537升 双门对开门两门双开门 变频家用厨房电冰箱 风冷无霜 大冷冻 智能wifi 冷藏保鲜 节能静音",
                        ss:'',
                        action:'',
                        fr:"",
                        adv:"广告",
                        eva:"",
                        price:"2899",
                        shop:"苏宁自营"
                    },
                    {
                        src:"./src/assets/images/like7.webp",
                        title:"【直营】日本资生堂UNO吾诺活性炭控油男士洗面奶 黑色 深层清洁去黑头清爽保湿洁面130g(保税)",
                        ss:'',
                        action:['百亿补贴'],
                        fr:"苏宁Lax直营",
                        adv:"",
                        eva:"9400+评价",
                        price:"25",
                        shop:"苏宁自营"
                    },
                    {
                        src:"./src/assets/images/like8.webp",
                        title:"【亲源配方】海外Aptamil 澳洲爱他美金装 婴幼儿配方奶粉 3段（12-24月）900g/罐 新西兰原装进口",
                        ss:'',
                        action:['抢'],
                        fr:"苏宁国际直营",
                        adv:"",
                        eva:"9300+评价",
                        price:"140",
                        shop:"苏宁自营"
                    },
                    {
                        src:"./src/assets/images/like9.webp",
                        title:"御泥坊清透盈润面膜补水保湿控油正品黑白面膜套装清洁面膜女21片",
                        ss:'自营',
                        action:['满2件打5折'],
                        fr:"",
                        adv:"",
                        eva:"1700+评价",
                        price:"89.9",
                        shop:"苏宁自营"
                    },
                    {
                        src:"./src/assets/images/like10.jpg",
                        title:"华为 HUAWEI Mate 30 5G 8GB+128GB 亮黑色 麒麟990智慧芯片 4000万徕卡摄像 OLED全面屏 移动联通电信5G全网通手机",
                        ss:'自营',
                        action:[''],
                        fr:"",
                        adv:"广告",
                        eva:"",
                        price:"4499",
                        shop:"苏宁自营"
                    },
                    {
                        src:"./src/assets/images/like11.webp",
                        title:"【72小时内发货】 农家青皮石榴 2.5斤（偶数发货 拍2件合并发货 ）",
                        ss:'',
                        action:['抢'],
                        fr:"",
                        adv:"",
                        eva:"100+评价",
                        price:"9.9",
                        shop:"苏宁自营"
                    },
                    {
                        src:"./src/assets/images/like12.webp",
                        title:"嘉宝Gerber婴儿辅食钙铁锌营养麦粉米糊1段250g（辅食添加初期6个月以上适用）",
                        ss:'自营',
                        action:['领券89-10'],
                        fr:"",
                        adv:"",
                        eva:"9.0万+评价",
                        price:"55.8",
                        shop:"苏宁自营"
                    },
                    {
                        src:"./src/assets/images/like13.jpg",
                        title:"海尔统帅(Leader) 206升三门软冷冻冰箱（雅韵白）BCD-206LSTPF",
                        ss:'',
                        action:[''],
                        fr:"",
                        adv:"",
                        eva:"9.0万+评价",
                        price:"1299",
                        shop:"苏宁自营"
                    },
                    {
                        src:"./src/assets/images/like14.webp",
                        title:"御泥坊小肌御鲜嫩美莓补水面膜女玻尿酸保湿提亮肤色面膜",
                        ss:'自营',
                        action:['满89减30','赠'],
                        fr:"",
                        adv:"",
                        eva:"9.0万+评价",
                        price:"1299",
                        shop:"苏宁自营"
                    },
                    {
                        src:"./src/assets/images/like15.webp",
                        title:"御泥坊小肌御鲜嫩美莓补水面膜女玻尿酸保湿提亮肤色面膜",
                        ss:'',
                        action:[''],
                        fr:"",
                        adv:"",
                        eva:"100+评价",
                        price:"4.9",
                        shop:"苏宁自营"
                    },
                    {
                        src:"./src/assets/images/like16.webp",
                        title:"【高端配方】澳洲新西兰爱他美白金版幼儿配方奶粉3段（1-3岁） 900g",
                        ss:'',
                        action:[''],
                        fr:"苏宁国际直营",
                        adv:"",
                        eva:"4800+评价",
                        price:"195",
                        shop:"苏宁自营"
                    },
                    {
                        src:"./src/assets/images/like17.jpg",
                        title:"海尔统帅(Leader) 182升两门节能冰箱BCD-182LTMPA",
                        ss:'',
                        action:[''],
                        fr:"",
                        adv:"广告 ",
                        eva:"",
                        price:"1099",
                        shop:"苏宁自营"
                    },
                    {
                        src:"./src/assets/images/like18.webp",
                        title:"美的(Midea)分体式多用途电火锅家用大容量韩式大功率多功能涮烤一体电锅不粘锅宿舍煮锅多功能锅电热锅DY28P151",
                        ss:'自营',
                        action:['拼购'],
                        fr:"",
                        adv:"",
                        eva:"1.6万+评价",
                        price:"109",
                        shop:"苏宁自营"
                    },
                    {
                        src:"./src/assets/images/like19.jpg",
                        title:"海尔（Haier）BCD-272WDPD 272升两门双门家用小型电冰箱 变频风冷 节能静音 电脑控温 双门双温冰箱",
                        ss:'',
                        action:[''],
                        fr:"",
                        adv:"广告",
                        eva:"",
                        price:"2599",
                        shop:"苏宁自营"
                    },
                    {
                        src:"./src/assets/images/like20.webp",
                        title:"谷斑婴儿电蚊香液5瓶1器套装无味宝宝儿童孕妇家用插电式驱蚊灭蚊电热防蚊液",
                        ss:'',
                        action:['抢','返'],
                        fr:"",
                        adv:"",
                        eva:"2100+评价",
                        price:"19.9",
                        shop:"苏宁自营"
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    .time{
        margin-left:4%;
        font-size: 12px;
        display: none;
        font-weight: bold;
    }
    .time i{
        background-color: #ffcc00;
        font-style: normal;
        border-radius: 5px;
        font-weight: normal;
        padding-left: 1%;
        padding-right: 1%;
        font-weight: bold;
    }
    .body{
        background-color:#f7f7f7;
    }
    header{
        width:100%;
        background-color:rgb(255,219,71);
        
    }
    header>p{
        width:95%;
        height:50px;
        margin-left: auto;
        margin-right: auto;
        overflow: hidden;
        
    }
    header p span{
        width:5%;
        margin-top:3%;
        float: left;
    }
    header p img{
        width: 100%;
    }
    header p b{
        margin-top:3%;
        width:72%;
        float: left;
        margin-left: 8%;
        box-sizing:content-box;
    }
    header p i{
        margin-top:3%;
        width:5%;
        float: right;
    }
    header>div{
        width:95%;
        height:36px;
        background-color:white;
        margin-left: auto;
        margin-right:auto;
        margin-top:3%;
        border-radius:20px;
        position:relative;
    }
    header div input{
        width:70%;
        height: 36px;
        box-sizing: border-box;
        margin-left: 8%;
        border:none;
        outline:none;
    }
    header div span{
        position:absolute;
        left:8px;
        top:8px;
        width:20px;
        height:20px;
        background:url("../../assets/images/search.png") no-repeat;
        background-size:100%;
    }
    
    main{
        width: 100%;
        background:url('../../assets/images/t1.png') no-repeat;
        background-size:100% 100%;
        padding-top:2%;
    }
    .adv{
        margin-top:3%;
        width:100%;
    }
    .adv span{
        width:50%;
    }
    .adv span img{
        width:50%;
    }
    .nav{
        width:100%;
        background-color:#f6f6f6;
        overflow:hidden;
        box-sizing: border-box;
    }
    .nav li{
        width:20%;
        float:left;
        text-align:center;
        font-size:12px;
        margin-bottom:3%;
        color:#666666   ;
    }
    .nav li img{
        width:50%;
    }
    .banner{
        width:95%;
        margin-left:auto;
        margin-right:auto;
        border-radius: 10px;
        background-color: white;
    }
    .banner>ul{
        width:100%;
        overflow:hidden;
        border-radius: 10px;
    }
    .banner>ul li{
        float:left;
        width:50%;
        font-size:12px;
        background-color:#ffffff;
        border-bottom: 1px solid rgba(242,242,242);
        box-sizing:border-box;
    }
    .banner>ul img{
        width:100%;
    }
    .banner p>span{
        width:45%;
        margin-left:3%;
        text-align:center;
        position:relative;
        
    }
    .banner .left{
        float:left;
    }
    .banner .right{
        float:right;
    }

    .banner>ul h2{
        margin-left:7%;
        margin-top:5%;
        font-weight:bold;
        font-size:14px;
    }

    .banner>ul h6{
        margin-left:7%;
        margin-top:1%;
        font-size:13px;
        color:rgb(153,153,153);
    }
    .banner>ul li:nth-of-type(1) b{
        color:red;
    }
    .banner>ul p{
        margin-left:7%;
        margin-top:3%;
        width:85%;
        overflow:hidden;
    }
    .banner>ul div{
        width:100%;
        height:20px;
        background:url("../../assets/images/b.png") no-repeat;
        
        background-size:100% 100%;
        background-position-y:-3px;
        line-height:20px;
    }
    .banner>ul li:nth-of-type(1) div{
        background:none;
    }
    .banner>ul li b{
        font-weight:unset;
    }
    .banner .bottom{
        width: 100%;
        overflow:hidden;
        background:white;
        border-radius: 10px;
        padding-top:3%;
        padding-bottom: 3%;
    }
    .banner .bottom .left{
        float:left;
        width:25%;
        background-color:white;
        margin-left:3%;
        margin-top:6%;
    }
    .banner .bottom>ul{
        width:67%;
        overflow:hidden;
    }
    .bottom>ul li{
        width:25%;
        float:left;
        font-size:10px;
        text-align:center;
        background-color:white;
    }
    .bottom li img{
        width:100%;
    }
    .bottom h2{
        font-size:18px;

    }
    .bottom .left p{
        font-size:14px;
    }
    .bottom ul p{
        font-size:12px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 行数 */
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .middle{
        width:100%;
    }
    .middle img{
        width:100%;
    }
    .bd{
        width:95%;
        margin-left:auto;
        margin-right:auto;
    }
    .bd .bd_show {
        width:100%;
        overflow:hidden;
    }
    .bd .bd_show li{
        width:49%;
        float:left;
        background-color:white;
        
    }
    .bd .bd_show li:nth-of-type(1){
        border-right: 1px solid rgba(242,242,242);
        box-sizing: border-box;
        
    }
    .bd .bd_show li:nth-of-type(2){
        border-bottom: 1px solid rgba(242,242,242);
        box-sizing: border-box;
        
    }
    .bd .bd_show li:nth-of-type(3){
        border-right: 1px solid rgba(242,242,242);
        box-sizing: border-box;
        
    }
    .bd_show li div{
        width:100%;
    }
    .bd_show img{
        width:40%;
        float:left;
    }
    .bd_show .title{
        margin-right:22%;
        margin-top:3%;
        margin-left:3%;
        font-size:12px;
        font-weight:bold;
    }
    .bd_show .title span{
        color:#AB813A;
        float:right;
        font-size:12px;
        width:35%;
        background-color:rgb(249,245,238);
        border-radius: 10px;
        text-align: center;
    }
    .bd_show .con{
        color:#999999;
        margin-left:3%;
        font-size:12px;
    }
    .bd_show img{
        margin-left:5%;
    }
    .bd_top>div{
        width:32%;
    }
    .bd_top img{
        width:70%;
    }
    .bd_top  p{
        font-size:12px;
        text-align:center;  
    }
    .bd_top .left{
        position:relative;
    }
    .bd_top .title{
        color:white;
    }
    .bd_top .left{
        background-color:white;
        float:left;
        overflow:hidden;
    }
    .bd_top>div:nth-of-type(1),.bd_top>div:nth-of-type(2){
        margin-right:2%;
    }
    .bd_top .left>div,.bd_top .right>div{
        position:relative;
        background:url("../../assets/images/background.png") no-repeat;
        background-position-y:8px;
        text-align:center;
        border-radius:10px;
    }
    .bd_top .middle_swipe div{
        background-color: #FF6600;
    }
    .bd_top .type{
        width:40%;
        background-color:white;
        margin-left:auto;
        margin-right:auto;
        border-radius:10px;
        border:1px solid #E8B58E;
        color:rgb(224, 168, 108);
    }
    .bd_top .con{
        color:#F5E0CF;
    }
    .bd .middle_swipe{
        width:32%;
        float: left;
        background-color:white;
    }
    .bd .middle_swipe div{
        position:relative;
        background:url("../../assets/images/db_middle11.png") no-repeat;
        background-position-y:8px;
        text-align:center;
        border-radius:10px;
    }
    .bd_top .right{
        float:right;
         background-color:white;
    }
    .bd_top>div{
        border-radius:10px;
    }
    .bd_top {
        margin-top:2%;
        overflow:hidden;
    }
    .bd_show{
        margin-top:2%;
    }
    .bd>p{
        font-size:18px;
        font-weight:bold;
        opacity:0.6;
    }
    .like{
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
    .like .lab span{
        margin-right: 2%;
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
    .foot_b{
        width:95%;
        margin-bottom:13%;
    }   
    .foot_b img{
        width:100%;
    }
    .like{
        margin-top:3%;
    }
    .header>p{
        width:100%;
        height:50px;
    }
    .header>p>span{
        float:left;
    }
    .header>p>b{
        float:left;
    }
    .header>p>i{
        float:right;
    }
    .header{
        width:100%;
        height:50px;
        background-color:rgb(255,219,71);
        display:none;
        height:50px;
        position:fixed;
        top:0px;
        left:0px;
        right:0px;
    }
    .header>p{
        width:95%;
        height:50px;
        margin-left: auto;
        margin-right: auto;
    }
    .header p span{
        width:5%;
        margin-top:3%;
        float: left;
    }
    .header p img{
        width: 100%;
    }
    .header p i{
        margin-top:3%;
        width:5%;
        float: right;
    }
    .header b{
        width:80%;
        height:36px;
        line-height:36px;
        background-color:white;
        margin-top:2%;
        margin-left:5%;
        border-radius:50px;
        position:relative;
    }
    .header b{
        font-weight:normal;
    }
    .header b input{
        margin-left:10%;
        outline:none;
        border:none;

    }
    .header b span{
        position:absolute;
        left:9px;
        top:-1px;
        width:20px;
        height:20px;
        background:url("../../assets/images/search.png") no-repeat;
        background-size:100%;
    }
</style>
<style>
    .index_swipe{
        width:94%;
        text-align:center;
        margin-left: auto;
        margin-right: auto;
        padding-left:3%;
        padding-right:3%;
    }
    .index_swipe img{
        width:100%;
        height: 100%;
        border-radius: 10px;
    }
    .index_swipe .mint-swipe-items-wrap{
        /* padding-bottom设置百分比，参照物是父级的宽度 */
        /* padding-bottom:29.46%; */
        padding-bottom:49.11%;
        border-radius: 10px;
    }
</style>