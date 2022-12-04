<script>
import { RouterLink } from 'vue-router'
export default {
    props: ['handleToFeature', 'handleToMethods', 'handleToComment', 'handleToForm']
}
</script>

<template>
    <div class="wrap1">
        <div class="inner">
            <div class="left">
                <span>
                    <RouterLink to="/"></RouterLink>
                </span>
            </div>
            <div class="right">
                <ul class="navUl">
                    <li @click="handleToFeature">
                        <RouterLink to="/">課程特色</RouterLink>
                    </li>
                    <li @click="handleToMethods">
                        <RouterLink to="/">上課方式</RouterLink>
                    </li>
                    <li @click="handleToComment">
                        <RouterLink to="/">學員評價</RouterLink>
                    </li>
                    <li @click="handleToForm">
                        <RouterLink to="/">立即申請</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrap1 {
    width: 100%;
    height: 80px;
}

.wrap1 .inner {
    max-width: 1440px;
    color: #fff;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    height: 80px;
    justify-content: space-between;
}

.wrap1 .inner .left>span {
    background-image: url('../assets/nav_1.svg');
    background-repeat: no-repeat;
    display: block;
    background-size: 144px;
    width: 144px;
    height: 50px;
}

.wrap1 .inner .left>span>a {
    width: 144px;
    height: 50px;
    display: block;
}

.wrap1 .inner .right .navUl {
    height: 50px;
    display: flex;
    align-items: center;
    gap: 3rem
}

.wrap1 .inner .right .navUl>li {}

.wrap1 .inner .right .navUl>li:last-child {
    background: linear-gradient(182.59deg, #F16529 25.48%, #E44D26 97.84%);
    border-radius: 100px;
    width: 140px;
    height: 40px;
}

.wrap1 .inner .right .navUl>li>a {
    color: #fff;
    display: block;
}

.wrap1 .inner .right .navUl>li:last-child>a {
    border-radius: 100px;
    width: 140px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media(max-width:768px) {
    .wrap1 {
        width: 100%;
        height: 80px;
    }

    .wrap1 .inner {
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 1rem;
        display: flex;
        align-items: center;
        height: 80px;
        justify-content: space-between;
    }

    .wrap1 .inner .left>span {
        background-size: 144px;
        width: 144px;
        height: 50px;
    }

    .wrap1 .inner .right .navUl {
        height: 50px;
        display: flex;
        align-items: center;
        gap: 3rem
    }

    .wrap1 .inner .right .navUl>li:last-child {
        width: 140px;
        height: 40px;
    }

    .wrap1 .inner .right .navUl>li:not(:last-child) {
        display: none;
    }

}
</style>