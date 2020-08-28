<template>
   <div class="body">
      <header>
         购物车
         <span>编辑</span>
      </header>
      <div class="address">
         <p>广东广州荔枝湾区</p>
         <i></i>
      </div>
      <div class="cart">
         <ul>
            <li v-for="(shop_cart,shop_cart_index) in carts">
               <div class="cart_head">
                  <div class="box">
                     <span class="check" :class="{cart_choice:1==shop_cart.selected}" @click="allCheck(shop_cart,shop_cart_index)"></span>
                  </div>
                  <div class="info">
                     <div><img :src="shop_cart.src" alt=""></div>
                     <p>{{shop_cart.title}}</p>
                  </div>
               </div>
               <ul class="cart_list">
                  <li v-for="(cartItem,cartItem_index) in shop_cart.products">
                     <div class="box">
                        <span class="check" :class="{cart_choice:1==cartItem.selected}" @click="choice(cartItem,cartItem_index,shop_cart,shop_cart_index)"></span>
                     </div>
                     <div class="list">
                        <div class="pic"><img :src="cartItem.src" alt=""></div>
                        <div class="info">
                           <p class="title">{{cartItem.title}}</p>
                           <div class="type">
                              <span v-for="(type,type_index) in cartItem.types">{{type}}</span>
                           </div>
                           <div class="lab" v-if="cartItem.lab">
                              <img :src="cartItem.lab">
                           </div>
                           <p class="tip" v-if="cartItem.tip">{{cartItem.tip}}</p>
                           <div class="price">
                              <p>￥{{cartItem.price}}</p>
                              <div class="num">
                                 <span class="sub" @click="sub(cartItem,cartItem_index,shop_cart,shop_cart_index)"></span>
                                 <input type="text" class="amount" v-bind:value="cartItem.num" disabled>
                                 <span class="add" @click="add(cartItem,cartItem_index,shop_cart,shop_cart_index)"></span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </li>
               </ul>
            </li>
         </ul>
      </div>

      <div class="footer">
         <div class="left">
            <div  @click="allC()" :class="{cart_choice:1==allCh}">
            </div>
            <b>全部</b>
         </div>
         <div class="sum">
            <div>
               <p class="sumPrice">合计：<span>￥{{total}}</span></p>
               <p class="other">含运费:￥<i>0</i></p>
            </div>
         </div>
         <div class="right">
            去结算({{num}})
         </div>
      </div>
   </div>
</template>
<script>
   export default{
      mounted(){
         for(var i=0;i<this.carts.length;i++){
            for(var y=0;y<this.carts[i].products.length;y++){
               if(this.carts[i].products[y].selected==1){
                  this.num = this.num + this.carts[i].products[y].num;
                  this.total = this.total + this.carts[i].products[y].price;
               } else {
                  this.carts[i].selected = 0;
                  this.allCh = 0;
               }
            }
         }
      },
      methods:{
         allC(){
            this.allCh = this.allCh == 1 ? 0 : 1;
            if(this.allCh == 1){
               for(var i=0;i<this.carts.length;i++){
               if(this.carts[i].selected == 1){
                  continue;
               }
               for(var y=0;y<this.carts[i].products.length;y++){
                  if(this.carts[i].products[y].selected==0){
                     this.num = this.num + this.carts[i].products[y].num;
                     this.total = this.total + this.carts[i].products[y].price;
                     this.carts[i].products[y].selected = 1;
                  }
               }
               this.carts[i].selected = 1;
               console.log(this.carts[i].selected);
               }
            } else {
               for(var i=0;i<this.carts.length;i++){
                  this.carts[i].selected = 0;
                  for(var y=0;y<this.carts[i].products.length;y++){
                     this.carts[i].products[y].selected = 0;
                  }
               }
               this.num = 0;
               this.total = 0;
            }
            
         },
         check(a){
            console.log(a);
         },
         sub(cartItem,cartItem_index,shop_cart,shop_cart_index){
            if(this.carts[shop_cart_index].products[cartItem_index].num == 1){
               return;
            }
            this.carts[shop_cart_index].products[cartItem_index].num--;
            if(this.carts[shop_cart_index].products[cartItem_index].selected == 0){
               return;
            }
            this.num--;
            this.total = this.total - this.carts[shop_cart_index].products[cartItem_index].price;
         },
         add(cartItem,cartItem_index,shop_cart,shop_cart_index){
            this.carts[shop_cart_index].products[cartItem_index].num++;
            if(this.carts[shop_cart_index].products[cartItem_index].selected == 0){
               return;
            }
            this.num++;
            this.total = this.total + this.carts[shop_cart_index].products[cartItem_index].price;
         },
         allCheck(shop_cart,index){
            var selected = this.carts[index].selected == 1? 0:1;
            //全不选
            if(selected == 0){
               for(var i=0;i<this.carts[index].products.length;i++){
                  this.total = this.total - this.carts[index].products[i].price;
                  this.num = this.num - this.carts[index].products[i].num;
               }
            //全选
            } else{
               for(var i=0;i<this.carts[index].products.length;i++){
                  //未选中的加入价格，数量
                  if(this.carts[index].products[i].selected == 0){
                     this.total = this.total + this.carts[index].products[i].price;
                     this.num = this.num + this.carts[index].products[i].num;
                  }
               }
            }
            this.carts[index].selected = selected;
            for(var i=0;i<this.carts[index].products.length;i++){
               this.carts[index].products[i].selected = selected;
            }

            //是否全选
            this.allCh = 1;
            for(var i=0;i<this.carts.length;i++){
               for(var y=0;y<this.carts[i].products.length;y++){
                  if(this.carts[i].products[y].selected==0){
                     this.carts[i].selected = 0;
                     this.allCh = 0;
                  }
               }
            }
         },
         choice(cartItem,cartItem_index,shop_cart,shop_cart_index){
            this.carts[shop_cart_index].products[cartItem_index].selected = this.carts[shop_cart_index].products[cartItem_index].selected == 1 ? 0:1;
            if(this.carts[shop_cart_index].products[cartItem_index].selected == 0){
               this.total = this.total - this.carts[shop_cart_index].products[cartItem_index].price;
               this.num = this.num - this.carts[shop_cart_index].products[cartItem_index].num;
               this.allCh = 0;
            } else{     
               this.total = this.total + this.carts[shop_cart_index].products[cartItem_index].price;
               this.num = this.num + this.carts[shop_cart_index].products[cartItem_index].num;
               
            }
            for(var i = 0;i < this.carts[shop_cart_index].products.length;i++){
               if(this.carts[shop_cart_index].products[i].selected == 0){
                  this.carts[shop_cart_index].selected = 0;
                  return;
               }
            }
            this.carts[shop_cart_index].selected = 1;
            for(var i=0;i<this.carts.length;i++){
               if(this.carts[i].selected == 0){
                  this.allCh = 0;
                  return;
               }
            }
            this.allCh = 1;
         },


      },
      data(){
         return{
            product:'',
            num:0,
            total:0,
            allCh:0,
            carts:[
               {
                  title:"苏宁自营旗舰店",
                  selected:1,
                  src:"./src/assets/images/lion.png",
                  products:[
                     {
                        src:"./src/assets/images/huawei.jpg",
                        selected:1,
                        title:'华为/HUAWEI 畅享10S 6GB+64GB 翡冷翠 炫彩OLED指纹屏幕 4800万AI三摄 移动联通电信4G全面屏全网通手机',
                        types:[
                           "翡冷翠","6GB+64G","购买服务"
                        ],
                        lab:"./src/assets/images/huawei1.png",
                        price:1299,
                        num:1
                     },
                     {
                        src:"./src/assets/images/car2.jpg",
                        selected:1,
                        title:'小米（MI）10 5G  8GB+128GB 冰海蓝 骁龙865 1亿像素8k电影相机30W疾速闪充支持无线充电学生游戏拍照5G手机',
                        types:[
                           "(5G版本）8GB+128GB",   "购买服务"
                        ],
                        price:3799,
                        num:1
                     },
                     {
                        src:"./src/assets/images/apple.jpg",
                        selected:0,
                        title:'Apple iPhone 11 128G 白色 移动联通电信4G全网通手机',
                        types:[
                           "白色","128G","购买服务"
                        ],
                        lab:"./src/assets/images/huawei1.png",
                        price:4999,
                        num:1
                     },
                     {
                        src:"./src/assets/images/honor.jpg",
                        selected:1,
                        title:'华为/荣耀V30 PRO双模5G 麒麟990 5G SOC芯片 突破性相机矩阵 双超级快充 8GB+256GB 魅海星蓝 5G全网通双卡双待 拍照游戏女性全面屏手机',
                        types:[
                           "魅海星蓝","5G全网通 8GB+256GB","购买服务"
                        ],
                        lab:"./src/assets/images/huawei1.png",
                        price:3699,
                        num:1
                     }
                  ]
               },

               {
                  title:"百雀羚官方旗舰店",
                  selected:1,
                  src:"./src/assets/images/lion.png",
                  products:[
                     {
                        src:"./src/assets/images/bql1.jpg",
                        selected:1,
                        title:'百雀羚三生花花酿高保湿套装（体验装非正装）（水20+乳20+面霜8）',
                        types:[
                           "购买服务"
                        ],
                        price:10,
                        num:1
                     },
                     {
                        src:"./src/assets/images/bql2.png",
                        selected:1,
                        title:'PECHOIN百雀羚 防晒霜女防晒乳50+隔离正品官方旗舰店补水保湿男女（城市版）',
                        types:[
                           "购买服务"
                        ],
                        price:48,
                        num:1
                     },
                     {
                        src:"./src/assets/images/bql3.jpg",
                        selected:1,
                        title:'百雀羚一刻音乐面膜贴 滋润提亮肤色舒缓学生男女免洗25片官方旗舰店正品',
                        types:[
                           "一刻面膜20片组合","购买服务"
                        ],
                        price:66,
                        num:1
                     },
                     {
                        src:"./src/assets/images/huawei.jpg",
                        selected:1,
                        title:'华为/HUAWEI 畅享10S 6GB+64GB 翡冷翠 炫彩OLED指纹屏幕 4800万AI三摄 移动联通电信4G全面屏全网通手机',
                        types:[
                           "翡冷翠","6GB+64G","购买服务"
                        ],
                        lab:"./src/assets/images/huawei1.png",
                        price:1299,
                        num:1
                     }
                  ]
               },
               {
                  title:"海尔官方旗舰店",
                  selected:0,
                  src:"./src/assets/images/haier.png",
                  products:[
                     {
                        src:"./src/assets/images/haier1.jpg",
                        selected:0,
                        title:'海尔（Haier）BCD-451WDEMU1 451升对开门双门冰箱 风冷无霜 智能 节能静音 白色家用双门冰箱',
                        types:[
                           "【白色外观】451升云智能","购买服务"
                        ],
                        lab:"./src/assets/images/haigou.jpg",
                        price:2999,
                        num:1
                     },
                     {
                        src:"./src/assets/images/haier2.jpg",
                        selected:1,
                        title:'Haier/海尔 EB100F959U1 10公斤大容量 幂动力防磨损防缠绕 智能波轮洗衣机',
                        types:[
                           "【幂动力】10公斤","购买服务"
                        ],
                        price:1699,
                        num:1
                     }
                  ]
               }

               
            ]
         }
      }
   }
</script>
<style scoped>
   .footer .left div{
      width: 15px;
      height: 15px;
      float: left;
      border-radius: 50%;
      margin-right:10%;
      border: 1px solid #DDDDDD;
      box-sizing: border-box;
   }
   .footer .left b{
      font-weight: normal;
   }
   .footer .left{
      width:20%;
      float: left;
      overflow: hidden;
      padding-top:2%;
      font-size: 13px;
      
   }
   .footer .sum i{
      font-style: normal;
   }
   .footer .sum .sumPrice b{
      font-size:13px;
   }
   .footer .sum .other{
      font-size: 12px;
      text-align: right;
   }
   .footer .sum span{
      font-size: 12px;
   }
   .footer .sum div{
      float: right;
   }
   .footer .sum{
      width: 50%;
      float: left;
      overflow: hidden;
      font-size:13px;
   }
   .footer .right{
      float: right;
      width: 25%;
      background-color: #FFCC00;
      padding-left: 2%;
      padding-top:2%;
      padding-bottom:2%;
      text-align: center;
      border-radius: 10px;
      font-size:13px;
      font-weight: bold;
   }
   .body{
      position: relative;
   }
   .footer{
      padding-left:2%;
      padding-right:2%;
      overflow: hidden;
      position: fixed;
      width: 96%;
      padding-top:1%;
      padding-bottom: 1%;
      left: 0px;
      bottom:50px;
      background-color: white;
   }
   .cart>ul>li{
      margin-bottom: 5%;
   }
   .cart>ul{
      padding-bottom: 26%;
   }
   .cart_choice{
      width: 100%;
      height:100%;
      background: url('../../assets/images/icon-selected.png') no-repeat;
      background-size: 100%;
   }
   .num .sub{
      position: absolute;
      width: 20px;
      height: 20px;
      left: 1px;
      top:50%;
      transform: translateY(-50%);
      background: url('../../assets/images/black-reduce.png') no-repeat;
      background-size: 100%;
   }
   .num .add{
      width: 25%;
      position: absolute;
      width: 20px;
      height: 20px;
      right: 1px;
      top:50%;
      transform: translateY(-50%);
      background: url('../../assets/images/black-add.png') no-repeat;
      background-size: 100%;
   }
   .num .amount{
      width:100%;
      text-align: center;
      font-size:12px;
      border: none;
      outline:none;
      height: 100%;
   }
   .num{
      padding-left: 8%;
      width: 20%;
      background-color: white;
      position: relative;
      border-radius: 50px;
      border:1px solid #999999;
      padding-top:1%;
      padding-bottom:2%;
      float: right;
      padding-right: 8%;
   }
   .cart_list .price p{
      font-size: 12px;
      color:red;
      font-weight: bold;
      float: left;
   }
   .cart_list .price{
      margin-top:8%;
      width: 100%;
      overflow: hidden;
   }
   .cart_list .tip{
      margin-top:1%;
      color:red;
      font-size: 13px;
   }
   .cart_list>li{
      margin-top:2%;
      padding-bottom: 5%;
   }
   .cart_list .lab img{
      width: 28%;
   }
   .cart_list .type span::after{
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      right:0px;
      top:0px;
      background: url('../../assets/images/color-d.png') no-repeat;
      background-size: 100%;
   }
   .cart_list .type{
      margin-top:1%;
      margin-bottom: 1%;
      overflow: hidden;
   }
   .cart_list .type span{
      background-color: #F6F6F6;
      padding-right:6%;
      font-size: 12px;
      margin-right: 2%;
      float: left;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      /* 行数 */
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;

      position: relative;
   }
   .cart_list .info .type{
      width: 100%;
   }
   .cart_list .info .title{
      font-size: 12px;
      font-weight: bold;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      /* 行数 */
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
   }
   .cart_list .pic img{
      width: 100%;
   }
   .cart_list .list .pic{
      float: left;
      width: 27%;
   }
   .cart_list .info{
      width: 70%  ;
      float: right;

   }
   .list .info{
      float: left;
   }
   .list{
      overflow: hidden;
   }
   .cart_list{
      width: 98%;
      padding-left: 1%;
   }
   .cart_list .box{
      margin-top:5%;
   }
   .cart_head .info p{
      float: left;
   }
   .cart_head .info{
      width: 90%;
      overflow: hidden;
   }
   .cart_head .box{
      height: 22px;
   }
   .cart_head .info div img{
      width: 100%;
   }
   .cart_head .info div{
      width: 20px;
      height:20px;

      margin-right: 2%;
      float: left;
   }
   .cart_head div.info{
      float: left;
   }
   .cart_head p{
      font-size: 13px;
   }
   .check{
      width: 20px;
      height:20px;
      background-color: white;
      border: 1px solid #999999;
      position: absolute;
      top:50%;
      transform: translateY(-50%);
      border-radius: 50%;
   }
   .box{
      width:10%;
      float: left;
      height: 3.6rem;
      position: relative;
   }
   .list{
      float: left;
      width: 90%;
   }
   .cart_list>li{
      overflow: hidden;
   }
   .buy{
      background: url('../../assets/images/icon-selected.png') no-repeat;
      background-size: 100%;
   }
   .cart_head{
      overflow: hidden;
      width: 98%;
      padding-top:4%;
      padding-left: 1%;
      padding-bottom: 2%;
   }
   .cart>ul>li {
      background-color: white;
   }
   .cart>ul{
      width: 100%;
   }
   .cart{
      width:90%;
      margin-top:3%;
      margin-left: auto;
      margin-right: auto;
   }
   .body{
      background-color: #F5F5F9;
   }
   header{
      width: 95%;
      background-color:white;
      text-align: center;
      padding-top: 2%;
      padding-bottom: 2%;
      padding-right:3%;
      padding-left:2%;
      font-size: 17px;
   }
   .address{
      width: 90%;
      background-color: #FFE37E;
      margin-right: auto;
      margin-left:auto;
      margin-top:3%;
      font-size:13px;
      padding-top:3%;
      padding-left:3%;
      padding-bottom:3%;
      border-radius:10px;
      position: relative;
   }
   .address i{
      position:absolute;
      width: 20px;
      height:20px;
      right:10px;
      top:50%;
      transform:translateY(-50%);
      background: url('../../assets/images/cart_r.png') no-repeat;
      background-size: 100%;
   }

   header span{
      float: right;
      font-size: 14px;
      color:#338CFF;
   }
</style>