<template>
    <div class="mbc">
        <div class="account">
            <input type="text" placeholder="请输入手机号">
        </div>
        <div class="ver">
            <div class="num">
                <input type="text">
            </div>
            <div class="num">
                <input type="text">
            </div>
            <div class="num">
                <input type="text">
            </div>
            <div class="num">
                <input type="text">
            </div>
            <div class="code">
                获取验证码
            </div>
        </div>
        <p>未注册的手机号验证后自动注册</p>
    </div>
</template>
<style scoped>
    .mbc{
        width: 82%;
        margin-left: auto;
        margin-right: auto;
        margin-top:10%;
    }
    
    .account{
        padding-left: 4%;
        width: 100%;
        border-bottom:1px solid #DDDDDD;
    }
    .account input{
        height:40px;
        border:none;
        outline:none;
        
    }
    .ver div{
        float: left;
    }
    .ver .num{
        margin-right: 4%;
        width:12%;
        border-bottom: 1px solid #DDDDDD;
    }
    .ver input{
        width: 100%;
        outline:none;
        text-align: center;
        border:none;
        height:37px;
    }
    .ver .code{
        width:30%;
        border: 1px solid #DDDDDD;
        text-align: center;
        height:37px;
        line-height: 37px;
        padding-left:2%;
        padding-right:2%;
        border-radius:5px;
        font-size:15px;
        color:#DDDDDD;
    }
    .ver {
        margin-top:5%;
        overflow: hidden;
    }
    .mbc p{
        font-size: 12px;
        margin-top:2%;
        color:rgb(153, 153, 153);
    }
</style>