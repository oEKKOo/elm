<template>
    <div class="home">
        <div class="content">
            <div class="header">
                <div class="text">饿了么</div>
                <div class="location">
                    <van-icon name="location-o" />
                    <span>武汉市洪山区华中科技大学</span>
                    <van-icon name="arrow" />
                </div>
            </div>
            <div class="main">
                <div class="main-bg">
                    <div class="search">
                        <input type="text">
                        <div class="search-text">搜索</div>
                    </div>
                    <div class="sort">
                        <div v-for="(item,index) in sort" :key="index">
                        <svg class="icon" aria-hidden="true">
                            <use :xlink:href="`#${item.icon}`"></use>
                        </svg>
                        {{item.name}}
                    </div>
                    </div>
                </div>
                <van-tabs v-model:active="active" class="van-tabs">
                    <van-tab title="标签1">内容1</van-tab>
                    <van-tab title="标签2">内容2</van-tab>
                    <van-tab title="标签3">内容3</van-tab>
                    <van-tab title="标签4">内容4</van-tab>
                </van-tabs>
            </div>
        </div>
    <Footer />
    </div>
</template>
<script>
import Footer from"../../components/Footer.vue";
import{reactive,toRefs, ref }from'vue';
export default {
    components:{
        Footer,
    },
    setup(){
        let data=reactive({
            sort:[
                {
                    name:"美食外卖",
                    icon:"icon-meishi",
                },
                {
                    name:"甜品饮品",
                    icon:"icon-tiandian",
                },
                {
                    name:"超市便利",
                    icon:"icon-chaoshigouwu",
                },
                {
                    name:"生鲜果蔬",
                    icon:"icon-shengxian-ganju",
                },
                {
                    name:"医药用品",
                    icon:"icon-zhichiyiyuanyaodian",
                },
            ],
        });
        const active = ref(0);
        return{
            ...toRefs(data),  
            active
        };
    }
};  
</script>

<style lang="less" scoped>
.home{
    display:flex;
    flex-flow:column;      //垂直自由
    height:100%;            //占据全部高度
    font-size:12px;
    .content{
        flex:1;
        overflow-y:auto;      //上下滑动
        .header
        {
            background-image:linear-gradient(#66b3ff,#fff);
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding:20px 20px 40px 20px;
            .text{
                font-size: 20px;
                font-weight:600;
            }
            .location{
                span{
                    margin:0 5px;
                }
                font-size:14px;
            }
        }
        .main{
            margin-top: -30px;
            .main-bg{
                background-image:linear-gradient(#fff,#f5f5f5);
                padding:10px 20px 0px 20px;
                border-radius:30px 30px 0 0;
                .search{
                    position:relative;
                    input{
                        width:100%;
                        border:1px solid #66b3ff;
                        border-radius:20px;
                        height:30px;
                    }
                    .search-text{
                        position:absolute;
                        right:-5px;
                        top:1px;
                        background-color:#66b3ff;
                        border-radius:16px;
                        width:50px;
                        height:32px;
                        line-height:32px;
                        text-align:center;
                    }
                }
                .sort{
                    padding:20px 0;
                    display:flex;
                    div{
                        flex:1;
                        display:flex;
                        justify-content:center;
                        flex-flow:column;
                        align-items:center;
                        .icon{
                            width:50px;
                            height:50px;
                            margin-bottom:5px;
                        }
                    }
                }
            }
            .van-tabs{
                padding:0 20px 10px;
            }
        }
    }
}

/deep/ .van-tabs_wrap{
    border-radius: 10px;
}
</style>