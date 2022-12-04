<script>
import { uuid } from 'vue-uuid';



export default {
    name: 'edit',
    data() {
        return {
            product: '',
            price: '',
            state: '',
            score: '',
            proErr: '',
            priErr: '',
            staErr: '',
            scoErr: '',
            uuid: uuid.v1(),
        }
    },
    methods: {
        handleCancel() {
            this.$router.push('/todos')
        },
        handleSubmit() {
            const num = /^[0-9]{1}$/g;
            const fn_num = this.score.match(num);
            if (this.product !== '' && this.price !== '' && this.state !== '' && fn_num) {
                const dataaa = JSON.parse(localStorage.getItem('data'));
                const id = this.$route.params.id;
                console.log(dataaa)
                const newData = dataaa.map(item => {
                    if (item.id === id) {
                        item.product = this.product;
                        item.price = this.price;
                        item.state = this.state;
                        item.score = this.score;
                    } return item
                });
                localStorage.setItem('data', JSON.stringify(newData));
                this.$router.push('/todos')
            } else {
                this.product === '' ? this.proErr = '請勿為空' : this.proErr = '';
                this.price === '' ? this.priErr = '請勿為空' : this.priErr = '';
                this.state === '' ? this.staErr = '請勿為空' : this.staErr = '';
                this.score === '' ? this.scoErr = '請勿為空' : (fn_num ? this.scoErr = '' : this.scoErr = '請輸入正確格式');
            }
        }
    },
    mounted() {
        // console.log(this.$route.params.id)
        const id = this.$route.params.id
        const data = JSON.parse(localStorage.getItem('data'));
        const data2 = data.filter(item => item.id === id)[0];
        this.product = data2.product;
        this.price = data2.price;
        this.state = data2.state;
        this.score = data2.score
    }
}
</script>


<template>
    <div class="wrapqq">
        <div class="content">
            <form action="" @submit.prevent="handleSubmit">
                <div class="inputWrap">
                    <label for="">商品</label>
                    <input type="text" v-model="product">
                    <span>{{ proErr }}</span>
                </div>
                <div class="inputWrap">
                    <label for="">價格</label>
                    <input type="text" v-model="price">
                    <span>{{ priErr }}</span>
                </div>
                <div class="inputWrap">
                    <label for="">狀態</label>
                    <input type="text" v-model="state">
                    <span>{{ staErr }}</span>
                </div>
                <div class="inputWrap">
                    <label for="">分數</label>
                    <input type="text" v-model="score">
                    <span>{{ scoErr }}</span>
                </div>
                <div class="comfirmWrap">
                    <button>確認</button>
                    <button @click="handleCancel">取消</button>
                </div>
            </form>
        </div>
    </div>
</template>


<style scoped>
.wrapqq {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.wrapqq .content {
    width: 700px;
    height: auto;
    border: 1px solid rgb(236, 236, 236);
}

.wrapqq .content>form {
    width: 100%;
    height: 100%;
    padding: 2rem 3rem 2rem 3rem;
}

.wrapqq .content>form .inputWrap {
    width: 100%;
    height: 100px;
}

.wrapqq .content>form .inputWrap>label {
    width: 100%;
    font-size: 16px;
    font-weight: 900;
    line-height: 40px;
    height: 40px;
}

.wrapqq .content>form .comfirmWrap {
    width: 100%;
    height: 40px;
    display: flex;
    gap: 2rem;
    justify-content: center;
}

.wrapqq .content>form .comfirmWrap>button {
    width: 80px;
    height: 35px;
    border-radius: 5px;
    border: unset;
    color: #fff;
    font-weight: 900;
    cursor: pointer;
    transition: 0.3s all ease-in-out;
}

.wrapqq .content>form .comfirmWrap>button:first-child {
    background-color: rgb(41, 160, 230);
}

.wrapqq .content>form .comfirmWrap>button:first-child:hover {
    background-color: rgb(32, 141, 204);
}

.wrapqq .content>form .comfirmWrap>button:last-child {
    background-color: rgb(245, 88, 88);
}

.wrapqq .content>form .comfirmWrap>button:last-child:hover {
    background-color: rgb(219, 56, 56);
}

.wrapqq .content>form .inputWrap>input {
    width: 100%;
    height: 35px;
    border: unset;
    border: 1px solid rgb(211, 211, 211);
    padding: 0 0.5rem;
    outline: unset;
}

.wrapqq .content>form .inputWrap>span {
    width: 100%;
    height: 25px;
    line-height: 25px;
    color: rgb(202, 44, 44);
}
</style>