<template>
    <div class="body">
        <header>
            <div class="back" @click="getBack()"></div>
            <!-- <div>
                <video src="../../assets/media/detail.mp4"></video>
            </div>
            <div>
                <span>视频</span>
                <span>图片</span>
            </div> -->
            <!-- <div>
                <img src="../../assets/images/detail2.png" alt="">
            </div> -->
            <div class="detail_swipe">
                <mt-swipe :continuous="false"	:auto="0" :show-indicators="false">
                    <mt-swipe-item>
                        <div class="video-parent" @click="play()">
                            <video src="../../assets/media/detail.mp4" controls></video>
                            <span></span>
                        </div>
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../../assets/images/detail4.jpg" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../../assets/images/detail_swipe.jpg" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../../assets/images/detail_swipe1.jpg" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../../assets/images/detail_swipe2.jpg" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../../assets/images/detail_swipe3.jpg" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../../assets/images/detail_swipe4.jpg" alt="">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
        </header>
        <div class="title">
            <p class="price">
                <i>￥</i><span class="cost">{{price}}</span><i>.{{decimal}}</i>
                <span class="lab">促销价</span>
                <b>￥3399.00</b>
            </p>
            <p class="introduction">
                <!-- 海尔（Haier）BCD-451WDEMU1 451升对开门双门冰箱 风冷无霜 智能 节能静音 白色家用双门冰箱 -->
                {{title}}
                <span></span>
            </p>
            <p class="about">
                <span>【纤薄机身，官方直营，送货入户，全国联保】</span><span>纤薄机身66.5CM，手机远程操控，一键省心，低温净味系统，隐藏门把手</span>
            </p>
        </div>
        <div class="super">
            <p>
                <span class="icon"><img src="../../assets/images/super.png"></span>
                <span class="left">开通会员预计可省<i>13.5元</i></span>
                <span class="right">查看详情</span>
            </p>
        </div>
        <div class="amortization">
            <p>
                <span class="icon">分期</span>
                <span class="left">开通任性付返50元礼包</span>
                <span class="right">立即激活</span>
            </p>
        </div>
        <div class="activity">
            <div>
                <div class="top test">
                    <span class="lab"><img src="../../assets/images/activity.png" alt=""></span>
                    <span>参加以下活动到手价<i>2699元</i></span>
                    <span>查看更多</span>
                </div>
                <div class="section">
                    <div class="promotion">促销</div>
                    <div class="right">
                        <p class="detail">
                            <span>云钻促销</span>
                            <span>普通会员预计返149云钻</span>
                        </p>
                        <p class="detail">
                            <span>云钻促销</span>
                            <span>普通会员预计返149云钻</span>
                        </p>
                        <p class="detail">
                            <span>云钻</span>
                            <span>普通会员预计返149云钻</span>
                        </p>
                    </div>
                </div>
                <div class="bottom ">
                    <div class="type">刮券</div>
                    <div class="intro">
                            <span>云钻</span>
                            <span>刮券</span>
                        <span>100%刮中券，最高50元无敌券</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="test exchange">
            <span class="lab"><img src="../../assets/images/exchange.png" alt=""></span>
            <span>免费上门，免费拆卸搬运</span>
            <span>高价回收</span>
        </div>
        <div class="choice">
            <div class="bottom selected">
                <div class="type">已选</div>
                <div class="intro">
                    <span>【白色外观】451升云智能 1件</span>
                    <span> 可选增值服务</span>
                </div>
            </div>
            <div class="bottom send">
                <div class="type">送至</div>
                <div class="intro">
                    <span>广东</span>
                    <span>广州</span>
                    <span>荔枝湾</span>
                    <span>全区</span>
                </div>
            </div>
            <div class="bottom payment">
                <div class="type">付款</div>
                <div class="intro">
                        <span>支持</span>
                        <span> 苏宁支付</span>
                        <span>支付宝</span>
                </div>
            </div>
            <div class="bottom freight">
                <div class="type">运费</div>
                <div class="intro">
                        <span>免运费</span>
                </div>
            </div>
            <div class="bottom service">
                <div class="type">服务</div>
                <div class="intro">
                        <span>店铺发货&售后</span>
                        <span>7天无理由退货</span>
                </div>
            </div>
        </div>

        <div class="evaluate">
            <div class="header">
                <span class="left">评价(1.2万+)</span>
                <span class="right">99%好评率</span>
            </div>
            <div class="user">
                <div class="left">
                    <span class="head"><img src="../../assets/images/eva1.jpg" alt=""></span>
                    <span>1****1</span>
                    <span><img src="../../assets/images/eva2.gif" alt=""></span>
                </div>
                <div class="right">
                    <img src="../../assets//images/eva3.png" alt="">
                </div>
            </div>
            <div class="con">
                <p class="content">冰箱外观漂亮，物流小哥五星赞一个，非常给力，服务态度和质量一流，楼梯位置窄，想了很多办法，付出了很多努力才把冰箱抬上楼，非常辛苦，好评！！！
                </p>
                <ul>
                    <li><img src="../../assets/images/evaluate1.jpg" alt=""></li>
                    <li><img src="../../assets/images/evaluate2.jpg" alt=""></li>
                    <li><img src="../../assets/images/evaluate3.jpg" alt=""></li>
                </ul>
            </div>
            <div class="eva_btn">
                查看全部评价
            </div>
        </div>
        <div class="question">
            <div class="top">
                <span class="left">问答</span>
                <span class="right">查看全部问题</span>
            </div>
            <div class="ques_list">
                <div class="ques_item">
                    <span>问</span>
                    <p>400多升的会不会看起来太秀气了摆家里不够大气还是也有那么大</p>
                    <b>2个回答</b>
                </div>
                <div class="ques_item">
                    <span>问</span>
                    <p>400多升的会不会看起来太秀气了摆家里不够大气还是也有那么大</p>
                    <b>2个回答</b>
                </div>
            </div>
        </div>
        
        <div class="store">
            <div class="top">
                <div class="head"><img src="../../assets/images/store.jpg" alt=""></div>
                <div class="store_name">
                    <div>
                        <span class="left">{{shop}}</span>
                        <span class="right"><img src="../../assets/images/store_eva.png"></span>
                    </div>
                    <p>服务体验</p>
                </div>
                <div class="go">进店逛逛</div>
            </div>
            <div class="grade">
                <ul>
                    <li>
                        评价:<span>9.60<i>高</i></span>
                    </li>
                    <li>
                        物流:<span>8.82<i>高</i></span>
                    </li>
                    <li>
                        售后:<span>9.31<i>高</i></span>
                    </li>
                </ul>
            </div>
        </div>
        
        <!-- 加入购物车-->
        <div class="footer">
            <ul class="left">
                <li><img src="../../assets/images/sn-custom.png" alt=""></li>
                <li><img src="../../assets/images/shop.png" alt=""></li>
                <li><img src="../../assets/images/sn-cart.png" alt=""></li>
            </ul>
            <div class="right">
                <p>
                    领券购买<br>
                <span>到手价￥1999</span>
                </p>
                <p @click="product_choice()">加入购物车</p>
            </div>
        </div>
        <div class="cover"></div>
        <p class="tips"> duang 到底啦~ </p>
        <div id="product_choice">
            <div class="header">
                <div class="pic">
                    <img :src="src" alt="">
                </div>
                <div class="infor">
                    <p class="price">
                        <span>¥{{price}}.{{decimal}}</span>
                        <i>预计到手价¥{{price}}.{{decimal}}</i>
                    </p>
                    <p class="sn">商品编码:165653220</p>
                    <p class="product_title">{{title}}</p>
                </div>
            </div>
            
            <div class="scroll">
                
                <nav>
                    <div class="type">
                        <p>容积</p>
                        <ul>
                            <li>
                                <p><img src="../../assets/images/choice2.jpg"></p>
                                <p>【新品推荐】535升纤薄机身</p>
                            </li>
                            <li>
                                <p><img src="../../assets/images/choice2.jpg"></p>
                                <p>【新品】</p>
                            </li>
                            <li>
                                <p><img src="../../assets/images/choice2.jpg"></p>
                                <p>【新品推荐】535升纤薄机身</p>
                            </li>
                            <li>
                                <p><img src="../../assets/images/choice2.jpg"></p>
                                <p>【新品推荐】535升纤薄机身</p>
                            </li>
                            <li>
                                <p><img src="../../assets/images/choice2.jpg"></p>
                                <p>【新品推荐】535</p>
                            </li>
                            <li>
                                <p><img src="../../assets/images/choice2.jpg"></p>
                                <p>【新品推荐】535升纤薄机身</p>
                            </li>
                        </ul>
                    </div>
                    <div class="type">
                        <p>容积</p>
                        <ul>
                            <li>
                                <p><img src="../../assets/images/choice2.jpg"></p>
                                <p>【新品推荐】535升纤薄机身</p>
                            </li>
                            <li>
                                <p><img src="../../assets/images/choice2.jpg"></p>
                                <p>【新品】</p>
                            </li>
                            <li>
                                <p><img src="../../assets/images/choice2.jpg"></p>
                                <p>【新品推荐】535升纤薄机身</p>
                            </li>
                            <li>
                                <p><img src="../../assets/images/choice2.jpg"></p>
                                <p>【新品推荐】535升纤薄机身</p>
                            </li>
                            <li>
                                <p><img src="../../assets/images/choice2.jpg"></p>
                                <p>【新品推荐】535</p>
                            </li>
                            <li>
                                <p><img src="../../assets/images/choice2.jpg"></p>
                                <p>【新品推荐】535升纤薄机身</p>
                            </li>
                        </ul>
                    </div>
                    <div class="type">
                        <p>容积</p>
                        <ul>
                            <li>
                                <p><img src="../../assets/images/choice2.jpg"></p>
                                <p>【新品推荐】535升纤薄机身</p>
                            </li>
                            <li>
                                <p><img src="../../assets/images/choice2.jpg"></p>
                                <p>【新品】</p>
                            </li>
                            <li>
                                <p><img src="../../assets/images/choice2.jpg"></p>
                                <p>【新品推荐】535升纤薄机身</p>
                            </li>
                            <li>
                                <p><img src="../../assets/images/choice2.jpg"></p>
                                <p>【新品推荐】535升纤薄机身</p>
                            </li>
                            <li>
                                <p><img src="../../assets/images/choice2.jpg"></p>
                                <p>【新品推荐】535</p>
                            </li>
                            <li>
                                <p><img src="../../assets/images/choice2.jpg"></p>
                                <p>【新品推荐】535升纤薄机身</p>
                            </li>
                        </ul>
                    </div>
                </nav>
                <span class="close" @click="close()"></span>
            </div>
            <div class="operate">
                <p class="discount">
                    当前商品可参加满减活动，将预计优惠300元
                </p>
                <div class="op">
                    <div>马上抢</div>
                    <div @click="goCart(shop,title,price,src)">加入购物车</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    
    export default{
        data(){
            return{
                isPlay:0,
                price:2999,
                title:'海尔统帅 537升 双门对开门两门双开门 变频家用厨房电冰箱 风冷无霜 大冷冻 智能wifi 冷藏保鲜 节能静音',
                decimal:0,
                src:'./src/assets/images/detail.jpg',
                shop:'海尔自营旗舰店'
            }
        },
        mounted(){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            if(this.$route.query.price == null){
                return;
            }
            this.price = this.$route.query.price;
            this.title = this.$route.query.title;
            var decimal = '.';
            console.log(this.price.toString().indexOf(decimal));
            var exist = this.price.toString().indexOf(decimal)
            if(exist > -1){
                this.decimal = this.price.slice(exist + 1,this.price.length);
                this.price = this.price.slice(0,exist);
            }
            this.src = this.$route.query.src;
            this.shop = this.$route.query.shop;

            
        },
        methods:{
            getBack(){
                // console.log(1);
                this.$router.go(-1);
            },
            product_choice(){
                $('#product_choice').slideDown();
                $('.cover').css('display','block');
                document.body.style.overflow='hidden';
            },
            close(){
                $('#product_choice').slideUp();
                $('.cover').css('display','none');
                document.body.style.overflow='';
            },
            play(){
                console.log(1);
                this.isPlay = this.isPlay == 0 ? 1:0;
                if(this.isPlay = 1){
                    $('.video-parent video').css('z-index','999');
                    $('.video-parent span').css('z-index','-1');
                    $('.video-parent video')[0].play();
                } else{
                    $('.video-parent video').css('z-index','-1');
                    $('.video-parent span').css('z-index','999');
                    $('.video-parent video')[0].pause();
                }
               
            }
        }
        
    }
</script>
<style scoped>
    .cover{
        position: fixed;
        display: none;
        top:0px;
        left: 0px;
        height: 100%;
        width:100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 0;
    }
    .close{
        width: 20px;
        height: 20px;
        background: url('../../assets/images/return.png') no-repeat;
        background-size: 100%;
        position: absolute;
        right:10px;
        top:10px;
        z-index:200;
    }
    #product_choice{
        width: 98%;
        margin-left: auto;
        margin-right: auto;
        border-radius: 15px;
        display: none;
        position: fixed;
        bottom: 0px;
        right: 0px;
        left: 0px;
        background-color: white;
        overflow: hidden;
        margin-bottom: 1%;
    }
    .operate .op div:nth-of-type(1){
        background-color: #FF6600;
        margin-right: 1%;
        height:34px;
        line-height: 34px;
    }
    .operate .op div:nth-of-type(2){
        background-color: #FFCC00;
        margin-left: 1%;
        height:34px;
        line-height: 34px;
    }
    .operate .op div{
        width: 49%;
        text-align: center;
        
        float: left;
    }
    .operate .op{
        width: 92%;
        margin-left: 3%;
        margin-right: 3%;
        margin-top:4%;
        overflow: hidden;
        border-radius: 5px;

    }
    .operate .discount{
        margin-left: auto;
        margin-right:auto;
        text-align: center;
        font-size: 12px;
        color:#999999;
        margin-top:4%;
    }
    .operate{
        width: 100%;
        height:87px;
        overflow: hidden;
    }
    .type li img{
        width: 25px;
        height: 25px;
        float: left;
    }
    .type p{
        color:black;
    }
    .type ul{
        margin-top:2%
    }
    .type li p:nth-of-type(2){
        float: right;
        height: 25px;
        line-height: 25px;
    }
    .type li p:nth-of-type(1){
        float: left;
    }
    .scroll .type li{
        padding-left: 2%;
        padding-top:2%;
        padding-bottom: 2%;
        padding-right:2%;
        float: left;
        font-size: 12px;
        background-color: #F6F6F6;
        margin-bottom: 2%;
        margin-right:2%;
        border-radius: 5px;
        color:black;
    }
    .scroll .type{
        width: 97%;
        padding-left: 3%;
    }
    .scroll .type ul{
        width: 100%;
        overflow: hidden;
    }
    .scroll{
        width:100%;
        height:246px;
        overflow: auto;
    }
    .header{
        width:94%;
        overflow: hidden;
        padding-top:8%;
        padding-left:2%;
        padding-right:4%;
    }
    .header .pic{
        float: left;
        width: 25%;
    }
    .header .pic img{
        width: 100%;
    }
    .header .infor{
        float: left;
        width:75%;
    }
    .header .infor .price{
        color:red;
    }
    .header .infor span{
        font-size: 16px;
    }
    .header .infor i{
        font-size:14px;
        font-style:normal;
        margin-left: 2%;
    }
    .header .infor .sn{
        font-size: 12px;
        color:#999999;
        margin:2% 0px;
    }
    .header .infor .product_title{
        font-size: 14px;
    }







    .tips{
        font-size:12px;
        margin-top:5%;
        width: 50%;
        text-align: center;
        margin-bottom: 15%;
        margin-right: auto;
        margin-left: auto;

    }
    .footer .right p:nth-of-type(1){
        background-color: #FFCC00;
        margin-right: 1%;
    }
    .footer .right p:nth-of-type(2){
        background-color:#FF6600;
        line-height: 33px;
        margin-left: 1%;
        color:white;
    }
    .footer .right p span{
        font-size: 12px;
    }
    .footer .right p{
        font-size: 13px;
        text-align: center;
        height: 33px;
        width: 49%;
        float: left;
        background-color: red;
    }
    .footer .right{
        float: right;
        width: 55%;
        overflow: hidden;
        border-radius: 5px;
        margin-top:2%;
    }
    .footer ul img{
        width: 100%;
    }
    .footer ul{
        float: left;
        height:50px;
        width: 45%;
        overflow: hidden;
    }
    .footer ul li{
        height:50px;
        width: 30%;
        float: left;
    }
    .footer{
        overflow: hidden;
        height:50px;
        width: 96%;
        position: fixed;
        padding-top:1%;
        bottom: 0px;
        left: 0px;
        right: 0px;
        background-color: white;
        padding-right:4%;
    }

    .body{
        background-color: #F2F2F2;
    }
    header{
        width: 100%;
        background-color:white;
    }
    header img{
        width: 100%;
    }
    .title{
        width: 100%;
        border: 1px solid #F2F2F2;
        padding-top:5%;
        padding-left:2%;
        background-color:white;
        box-sizing: border-box;
    }
    .title .price{
        color:red;
        font-size: 14px;
        font-weight: bold;
        width: 100%;
    }
    .title .price i{
        font-style: normal;
    }
    .title .price .cost{
        font-size:20px;
        font-weight: bold;
    }
    .title .price .lab{
        border: 1px solid red;
        padding:0px 1%;
        border-radius:10px;
        font-size: 12px;
        margin-left:3%;
        margin-bottom: 2%;
    }
    .title .price b{
        color:#999999;
        font-weight: normal;
        font-size: 12px;
        text-decoration: line-through;
    }
    .title .introduction{
        margin-top:3%;
        width: 86%;
        font-size:16px;
        font-weight: 600;
        position: relative;
    }
    .title .introduction span{
        position:absolute;
        width:35px;
        height:35px;
        right:-35px;
        top:0px;
        background-color: red;
        background: url("../../assets/images/attention.png") no-repeat;
        background-size: 100%;
    }
    .title .about{
        font-size:13px;
        width: 95%;
        margin-top:3%;
        margin-bottom: 3%;
        color:rgb(153, 153, 153)
    }
    .super{
        width:100%;
        margin-top:3%;
        background-color:white;
        padding-top:2%;
        padding-left: 2%;
        box-sizing: border-box;
        padding-bottom:3%;
    }
    .super p{
        margin-top:2%;
        width: 100%;
        overflow: hidden;
    }
    
    .super span.icon{
        width:15%;
        float: left;
    }
    .super img{
        width: 100%;
    }
    .super{
        font-size: 12px;
    }
    .super .left{
        width:50%;
        float: left;
        margin-left:2%;
    }
    .super .left i{
        font-style: normal;
        color:red;
    }
    .super .right,.more{
        float: right;
        width: 21%;
        position: relative;
        margin-right: 4%;
    }
    .super .right::after,.more::after{
        content:'';
        position: absolute;
        right:0px;
        top:1px;
        width: 15px;
        height:15px;
        background: url("../../assets/images/detail3.png") no-repeat;
        background-size: 100%;
    }

    .amortization{
        width:100%;
        margin-top:3%;
        background-color:white;
        padding-top:2%;
        padding-left: 2%;
        box-sizing: border-box;
        padding-bottom:3%;
    }
    .amortization p{
        margin-top:2%;
        width: 100%;
        overflow: hidden;
    }
    
    .amortization span.icon{
        width:15%;
        float: left;
        color:#999999;

    }
    .amortization img{
        width: 100%;
    }
    .amortization{
        font-size: 12px;
    }
    .amortization .left{
        width:50%;
        float: left;
        margin-left:2%;
    }
    .amortization .left i{
        font-style: normal;
        color:red;
    }
    .amortization .right{
        float: right;
        width: 21%;
        position: relative;
        margin-right: 4%;
    }
    .amortization .right::after{
        content:'';
        position: absolute;
        right:0px;
        top:1px;
        width: 15px;
        height:15px;
        background: url("../../assets/images/detail3.png") no-repeat;
        background-size: 100%;
    }
    .activity{
        width: 100%;
        background-color: white;
        margin-top:2%;
    }
    .activity .top{
        overflow: hidden;
    }


    .test{
        width:98%;
        padding-top:3%;
        padding-bottom: 3%;
        padding-left: 2%;
        
    }
    .test span:nth-of-type(1){
        width:5%;
        float: left;
    }
    .test span:nth-of-type(2){
        width:52%;
        float: left;
    }
    .test span:nth-of-type(3){
        width:20%;
        float: right;
        font-size: 12px;
        position: relative;
        margin-right: 4%;
    }
    .test span:nth-of-type(3)::after{
        content:'';
        position: absolute;
        right:0px;
        top:1px;
        width: 15px;
        height:15px;
        background: url("../../assets/images/detail3.png") no-repeat;
        background-size: 100%;
    }
    .test span i{
        font-style: normal;
    }
    .test span img{
        width: 100%;
    }
    .test span{
        font-size: 13px;
    }
    .activity .section{
        width: 95%;
        border-bottom: 1px solid #F9F9F9;
        margin-right: auto;
        margin-left: auto;
        padding-bottom: 3%;
    }
    .activity .section .promotion{
        width: 10%;
        font-size: 13px;
        float: left;
    }
    .activity .section .right{
        float: left;
        width: 70%;
    }
    .activity .section{
        overflow: hidden;
    }
    .activity .detail span{
        margin-bottom: 1%;
    }
    .activity .detail span:nth-of-type(1){
        border:1px solid #FFCC00;
        padding:0px 2%;
        font-size: 12px;
        border-radius: 5px;
    }
    .activity .detail span:nth-of-type(2){
        font-size: 13px;
    }
    .activity .bottom{
        width: 98%;
        padding-left: 2%;
        padding-top:3%;
        padding-bottom: 3%;
        overflow: hidden;
        position: relative;
    }
    .type{
        color:#DDDDDD;
        font-size: 13px;
        float: left;
        width: 10%;
    }
    .bottom .intro{
        width: 80%;
        float: left;
        font-size: 12px;
        overflow: hidden;
    }
    .bottom .intro>div{
        width: 21%;
        overflow: hidden;
        display: inline-block;
    }
    .bottom .intro>span{
        float: left;
    }
    .bottom .intro>span:nth-of-type(1){
        background-color: #FFCC00;
        border: 1px solid #FFCC00;
    }
    .bottom .intro>span:nth-of-type(2){
        background-color: white;
        border: 1px solid #FFCC00;
    }
    .bottom .intro>span:nth-of-type(3){
        margin-left: 1%;
    }
    .bottom::after{
        content:'';
        position: absolute;
        right:15px;
        width: 15px;
        height:15px;
        background: url("../../assets/images/detail3.png") no-repeat;
        background-size: 100%;
    }
    .exchange{
        width: 98%;
        background-color: white;
        margin-top:3%;
        padding-bottom: 2%;
        overflow: hidden;
    }
    .exchange span.lab{
        width: 25%;
    }
    .exchange span:nth-of-type(2){
        font-size: 14px;
        margin-left: 1%;
        width: 50%;
    }
    .choice{
        width: 100%;
        margin-top:2%;
        overflow: hidden;
        background-color: white;
    }
    .choice .bottom{
        width: 98%;
        padding-left: 2%;
        padding-top:3%;
        padding-bottom: 3%;
        overflow: hidden;
        position: relative;
    }
    .choice .selected .intro span{
        border:none;
        background-color: unset;
        font-weight: bold;
        font-size: 13px;
    }
    .choice .send .intro span{
        border:none;
        background-color: unset;
        margin:0px 1%;
        font-size: 13px;
    }
    .choice .send .intro{
        padding-left:4%;
        position: relative;
    }
    .choice .send .intro::before{
        content:'';
        position:absolute;
        width:20px;
        height:20px;
        left:0px;
        top:0px;
        background: url("../../assets/images/send.png") no-repeat;
        background-size: 50%;
    }
    .choice .payment .intro span{
        border:none;
        background-color: unset;
        font-size: 13px;
        margin:0px 1%;
    }
    .choice .freight .intro span{
        border:none;
        background-color: unset;
        font-size: 13px;
        margin:0px 1%;
    }
    .choice .service .intro span{
        border:none;
        background-color: unset;
        font-size: 13px;
        margin:0px 1%;
        padding-left:7%;
        position: relative;
    }
    .choice .service .intro span::before{
        content: '';
        position: absolute;
        width:20px;
        height:20px;
        left:0px;
        background: url('../../assets/images/service.png') no-repeat;
        background-size: 70%;
    }
    .evaluate{
        width: 100%;
        margin-top:2%;
        background-color: white;
        overflow: hidden;
        margin-bottom: 1%;
    }
    .evaluate .header{
        width:88%;
        padding-left:2%;
        padding-top:2%;
        padding-right:10%;
        overflow: hidden;
        position: relative;
    }
    .evaluate .header .left{
        font-size: 13px;
        font-weight:bold;
        float: left;
    }
    .evaluate .header .right{
        font-size: 13px;
        float: right;
        color:#999999;
    }
    .evaluate .header:after{
        content:'';
        position: absolute;
        right:15px;
        width: 15px;
        height:15px;
        background: url("../../assets/images/detail3.png") no-repeat;
        background-size: 100%;
    }
    .evaluate .user{
        width:94%;
        margin-top:5%;
        padding-left:2%;
        padding-right: 4%;
        overflow:hidden;
    }
    .evaluate .user .left{
        width:50%;
        float: left;
    }
    .evaluate .user span{
        width:25%;
        float: left;
    }
    .evaluate .user span:nth-of-type(1){
        width:16%;
        border-radius: 50%;
    }
    .evaluate .head img{
        border-radius: 50%;
    }
    .evaluate .user span:nth-of-type(2){
        width:25%;
        border-radius: 50%;
        font-size: 12px;
        vertical-align:middle;
        margin-top:2%;
        margin-left: 3%;
    }
    .evaluate .user span:nth-of-type(3){
        width:30%;
    }
    .evaluate .user .right{
        width:20%;
        float: right;
    }
    .evaluate img{
        width: 100%;
    }
    .evaluate .con{
        width:96%;
        padding-left: 2%;
        padding-right:2%;
        font-size:14px;
    }
    .evaluate .con .content{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 行数 */
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .evaluate .con ul{
        margin-top:2%;
        width:100%;
        overflow: hidden;
    }
    .evaluate .con li{
        width:25%;
        margin-right:1%;
        float: left;
    }
    .evaluate .eva_btn{
        width:34%;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        border:1px solid #CCCCCC;
        font-size:14px;
        border-radius: 5px;
        height:28px;
        line-height: 28px;
        margin-top:3%;
        margin-bottom:2%;
    }
    .question{
        width:100%;
        background-color:white;
        padding-bottom: 2%;
        overflow: hidden;
    }
    .question .top{
        width:88%;
        padding-left:2%;
        padding-right:10%;
        padding-top:2%;
        font-size:12px;
        overflow: hidden;
        position: relative;
    }
    .question .top .left{
        float:left;
        font-size:13px;
        font-weight: bold;
    }
    .question .top .right{
        float: right;
        color:#999999;
    }
    .question .top::after{
        content:'';
        position: absolute;
        right:15px;
        width: 15px;
        height:15px;
        background: url("../../assets/images/detail3.png") no-repeat;
        background-size: 100%;
    }
    .question .ques_list{
        width: 94%;
        padding-left:2%;
        padding-right:4%;
        font-size: 12px;
        margin-top:4%;
    }
    .question .ques_item{
        overflow: hidden;
        margin-bottom: 2%;
    }
    .question .ques_item span{
        width:auto;
        float: left;
        background-color: #FFCC00;
    }
    .question .ques_item p{
        float: left;
        margin-left:3%;
        width:74%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 行数 */
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .question .ques_item b{
        width:15%;
        float: right;
        font-weight:normal;
        color:#999999;
    }
    .store{
        width:100%;
        margin-top:1%;
        background-color: white;
    }
    .store .top{
        width: 94%;
        padding-left:2%;
        padding-right:4%;
        overflow: hidden;
    }
    .store .head{
        width:16%;
        float: left;
    }
    .store  img{
        width:100%;
    }
    .store .store_name{
        float: left;
        margin-left:3%;
        width:52%;

    }
    .store .store_name>div{
        
        padding-top:6%;
        overflow: hidden;
    }
    .store .store_name .left{
        width: 50%;
        font-size: 12px;
        font-weight:bold;
        float: left;
    }
    .store .store_name p{
        font-size:12px;
        color:#999999;
    }
    .store .store_name .right{
        width: 10%;
        float: right;
    }
    .store .go{
        margin-top:5%;
        width:25%;
        float:right;
        text-align: center;
        border-radius:5px;
        font-size:12px;
        padding:1% 0px;
        background-color:#FFCC00;
    }
    .store .grade{
        width:100%;
    }
    .store .grade ul{
        width: 98%;
        padding-left:2%;
        padding-bottom: 3%;
        overflow: hidden;
    }
    .store ul li{
        width:33%;
        float:left;
        text-align: center;
        font-size:12px;
        color:#999999;
    }
    .store ul span{
        margin-left:2%;
        color:red;
    }
    .store ul i{
        margin-left:2%;
        font-style: normal;
    }
    .topside {
        width:100%;
    }
    .video-parent img{
        position: absolute;
        top:0px;
        right: 0px;
        z-index: 0;
    }
    .video-parent video{
        z-index: -1;
    }
    .video-parent span{
        position: absolute;
        background-color:black;
        width: 30px;
        height:30px;
        top:50%;
        right: 50%;
        transform: translate(50%);
        z-index: 999;
        background: url('../../assets/images/sn-icon-playVideo.png') no-repeat;
        background-size: 100%;
    }
    .play{
        z-index: 999;
    }
    .pause{
        z-index: -1;
    }
    .back{
        width:30px;
        height:30px;
        position: absolute;
        left:10px;
        top:10px;
        background: url('../../assets/images/return1.png') no-repeat;
        background-size: 100%;
        
        z-index: 999;
    }
    header{
        position: relative;
    }
</style>
<style>
    
    .detail_swipe{
    width:100%;
    text-align:center;
    margin-left: auto;
    margin-right: auto;
    }
    .detail_swipe .video-parent{
        width: 100%;
        height:100%;
    }
    .detail_swipe video{
        width: 100%;
        height: 100%;
        background-color: black;
    }
    .detail_swipe img{
        width:100%;
        height: 100%;
    }
    .detail_swipe .mint-swipe-items-wrap{
        /* padding-bottom设置百分比，参照物是父级的宽度 */
        /* padding-bottom:29.46%; */
        padding-bottom:100%;
    }
</style>