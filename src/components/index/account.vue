<template>
    <div class="mbc">
        <div class="account">
            <input type="text" placeholder="请输入手机号">
        </div>
        <div class="password">
            <input type="password" placeholder="密码">
            <span>忘记密码</span>
            <b></b>
        </div>
    </div>
</template>
<style scoped>
    .mbc{
        width: 82%;
        margin-left: auto;
        margin-right: auto;
        margin-top:10%;
    }
    .mbc div{
        padding-left: 4%;
    }
    .account{
        width: 100%;
        border-bottom:1px solid #DDDDDD;
    }
    .account input{
        height:40px;
        border:none;
        outline:none;
        
    }
    .password{
        margin-top:5%;
        width: 100%;
        border-bottom:1px solid #DDDDDD;
        position:relative;
    }
    .password input{
        height:40px;
        border:none;
        outline:none;
        
    }
    .password span{
        position:absolute;
        right:0px;
        bottom: 8px;
        font-size:12px;
    }
    .password b{
        position:absolute;
        width:24px;
        height:24px;
        background:url("../../assets/images/password.png") no-repeat;
        background-size: 100%;
        right:60px;
        bottom:2px;
    }
</style>