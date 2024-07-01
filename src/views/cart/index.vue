<template>
    <div class="cart">
        <div class="content"></div>
    <Footer />
    </div>
</template>
<script>
import Footer from"../../components/Footer.vue";

export default {
    components:{
        Footer,
    },
};
</script>

<style lang="less" scoped>
.cart{
    display:flex;
    flex-flow:column;      //垂直自由
    height:100%;            //占据全部高度
    .content{
        flex:1;
        overflow-y:auto;      //上下滑动
    }
}
</style>