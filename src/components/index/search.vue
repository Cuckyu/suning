<template>
    <div>
        <header>
            <span class="left" @click="goBack()"></span>
            <div class="search">
                <b></b>
                <input type="text" placeholder="请输入您要找的商品" v-model="msg">
                <span></span>
            </div>
            <span class="show">{{search}}</span>
        </header>
        <section>
            <component :is="list"></component>
        </section>
    </div>
</template>
<script>
    import hot from './hot.vue'
    import list from './list.vue'
    export default{
        mounted(){
            this.msg=this.$route.params.msg;
            if(this.msg == "null"){
                this.msg='';
                this.list='v-hot'
            }else{
                this.list='v-list'
            }
        },
        data(){
            return{
                search:'搜索',
                list:'v-list',
                msg:''
            }
        },
        components:{
            'v-hot':hot,
            'v-list':list
        },
        methods:{
            goBack(){
                this.$router.go(-1);
                console.log(this.msg);
            }
        }
    }
</script>
<style scoped>
    .search{
        width:60%;
        background-color: #EEEEEE;
        margin-left: auto;
        margin-right:auto;
        margin-top:2%;
        padding-left:8%;
        padding-right:7%;
        padding-top:1%;
        padding-bottom:2%;
        height:20px;
        position: relative;
        border-radius: 5px;
    }
    .search input{
        width: 100%;
        height: 15px;
        font-size: 12px;
        outline: none;
        border:none;
        background-color: #EEEEEE;
    }
    header{
        height:45px;
        width:100%;
        position: relative;
        border-bottom:1px solid #DDDDDD;
        box-sizing: border-box;
        overflow: hidden;
    }
    header .left{
        position: absolute;
        width:15px;
        height: 15px;
        left: 17px;
        top:14px;
        border-left: 1px solid black;
        border-bottom: 1px solid black;
        box-sizing: border-box;
        transform: rotate(45deg);
    }
    header .search b{
        position: absolute;
        width:15px;
        height:15px;
        background-color: red;
        left:7px;
        top:9px;
        background: url("../../assets/images/search-icon3.png");
        background-size: 100%;
    }
    header .show{
        position: absolute;
        width: 40px;
        height: 20px;
        right:4px;
        top:12px;
        text-align: center;
        font-size: 15px;
    }
</style>