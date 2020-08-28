<template>
    <div class="body">
        <ul class="section">
            <li v-for="(item,index) in list">
                <h3>{{item.title}}</h3>
                <ul class="pics" v-if="item.products!=''">
                    <li v-for="(product,index) in item.products">
                        <img :src="product.src" alt="">
                        <p v-if="product.name">{{product.name}}</p>
                        <div v-if="item.discount">
                            <b v-if="product.discount">{{product.discount}}</b>
                        </div>
                        <span v-if="product.price">￥{{product.price}}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        props:['list']
    }
</script>
<style scoped>
    .section .pics p{
        font-size: 12px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 行数 */
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        margin-left: 2%;
        margin-bottom: 2%;
    }
    .section .pics b{
        text-align: center;
        font-size: 12px;
        color:red;
        border:1px solid red;
        font-weight: normal;
        background-color: #FFEDFF;
    }
    .body {
        background-color: #F2F2F2;
    }
    .section{
        width: 96%;
        margin-left: 2%;
        margin-right:2%;
        overflow: hidden;
        padding-bottom: 20%;
    }

    .section>li{
        width: 99%;
        background-color: white;
        margin-top:3%;
        padding-bottom: 5%;
    }
    .section h3{
        width: 99%;
        font-size: 16px;
        font-weight: bold;
        padding-left: 1%;
        padding-top:2%;
        color: rgba(0, 0, 0, 0.8);
    }
    .section .pics{
        width: 100%;
        overflow: hidden;
        padding-top:2%;
    }
    .section .pics div{
        height:20px;
    }
    .section .pics li{
        width: 33%;
        float: left;
        text-align: center;
        
    }
    .section .pics span{
        font-size: 12px;
        color:rgba(159, 159, 159, 0.8);
        font-weight: bold;
    }
    .section .pics img{
        width: 90%;
    }
</style>