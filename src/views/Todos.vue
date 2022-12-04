<script>
// import VueHelmet from 'vue-helmet'
// Vue.use(VueHelmet);

export default {
    name: 'todos',
    data() {
        return {
            aa: [],
            title: [{ key: '編號' }, { key: '商品' }, { key: '價格' }, { key: '狀態' }, { key: '分數' }]
        }
    },
    // components: {
    //     VueHelmet
    // },
    methods: {
        handleAdd() {
            this.$router.push('/todos/add')
        },
        handleDelete(data) {
            this.aa = this.aa.filter(item => item.id !== data);
            const newData = this.aa;
            localStorage.setItem('data', JSON.stringify(newData));
        },
        handleEdit(data) {
            this.$router.push(`/todos/edit_${data}`)
        }
    },
    mounted() {
        const dataaa = JSON.parse(localStorage.getItem('data'));
        this.aa = dataaa
    }
}
</script>

<template>
    <div class="wrap">
        <div class="content">
            <div class="top">
                <div class="left">
                    <h4>Todos Practice</h4>
                </div>
                <div class="right">
                    <span class="add" @click="handleAdd"></span>
                    <span class="del"></span>
                </div>
            </div>
            <div class="center">
                <ul>
                    <li>
                        <ul>
                            <li v-for="data in title">{{ data.key }}</li>
                        </ul>
                    </li>
                    <li v-for="data, inx in aa" @click="handleEdit(data.id)">
                        <ul>
                            <li>{{ inx + 1 }}</li>
                            <li>{{ data.product }}</li>
                            <li>{{ data.price }}</li>
                            <li>{{ data.state }}</li>
                            <li>{{ data.score }}</li>
                            <li>
                                <span @click.stop="handleDelete(data.id)"></span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>>

<style scoped>
.wrap {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.wrap .content {
    width: 700px;
    height: 500px;
    /* background-color: #fda; */
}

.wrap .content .top {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
}

.wrap .content .top .left {
    height: 50px;
    display: flex;
    align-items: center;
}

.wrap .content .top .right {
    height: 50px;
    width: 100px;
    border-radius: 50px;
    background-color: rgb(236, 236, 236);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
}

.wrap .content .top .right span {
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    width: 28px;
    height: 28px;
    cursor: pointer;
}

.wrap .content .top .right .add {
    background-image: url('../assets/add.svg');
}

.wrap .content .top .right .del {
    background-image: url('../assets/del.svg');
}

.wrap .content .center {
    width: 100%;
    margin-top: 20px;
    height: 430px;
    border: 1px solid rgb(236, 236, 236);
}

.wrap .content .center>ul {}

.wrap .content .center>ul>li {
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 0 0 1rem;

}

.wrap .content .center>ul>li:not(:first-child) {
    border-bottom: 1px solid rgb(243, 243, 243);
    background-color: #fff;
    transition: 0.3s all ease-in-out;
    cursor: pointer;
}

.wrap .content .center>ul>li:not(:first-child):hover {
    background-color: rgb(247, 247, 247);
}

.wrap .content .center>ul>li:first-child {
    background-color: rgb(243, 243, 243);
}

.wrap .content .center>ul>li>ul {
    display: flex;
    gap: 1rem;

}

.wrap .content .center>ul>li:first-child>ul>li {
    border-left: 3px solid #fff;
    padding: 0 2rem 0 1rem;
}

.wrap .content .center>ul>li>ul>li {
    padding: 0 2rem 0 1.3rem;
    height: 20px;
    display: flex;
    align-items: center;
    width: 100px;
}

.wrap .content .center>ul>li:not(:first-child)>ul>li:last-child>span {
    display: block;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 24px;
    width: 60px;
    height: 28px;
    border-radius: 50px;
    cursor: pointer;
    background-color: rgb(236, 236, 236);
    background-image: url('../assets/del.svg');
}
</style>