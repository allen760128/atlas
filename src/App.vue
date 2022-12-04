<script setup>
import { RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

</script>

<template>

  <RouterView></RouterView>
</template>


<!-- <script>
import { RouterView } from 'vue-router'
// import TheWelcome from '../components/TheWelcome.vue'
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import Pic1 from './assets/sec2_3.png';
import Pic2 from './assets/sec2_4.png';
import Pic3 from './assets/sec2_5.png';
import Pic4 from './assets/sec2_6.png';
import Pic5 from './assets/user_1.png';
import Pic6 from './assets/user_2.png';
import Pic7 from './assets/user_3.png';
import Pic8 from './assets/user_4.png';
import Pic9 from './assets/user_5.png';
import Pic10 from './assets/user_6.png';
import { routerKey, RouterLink } from 'vue-router';

export default {
  data() {
    return {
      items: [
        { id: 1, title: '聽說讀寫分流合擊', content: '依照聽說讀寫不同項目，設計不同的訓練方式 ；閱讀聽力採系統訓練，口說寫作為線上1對1教學，老師都出自於菁英國際優秀的名師。', pic: Pic1 },
        { id: 2, title: '發現學習法直擊弱點', content: '主張發現式學習法，將思考權還給學生。先測驗，再依成績結果分析，由專業師資對症下藥，直擊學生痛點。', pic: Pic2 },
        { id: 3, title: '系統導航自動規劃課程', content: '堪稱學習界「特斯拉」為學生自動導航，只需嚴格按照課程安排，按部就班便能看見成長曲線!', pic: Pic3 },
        { id: 4, title: '真人助教全程陪伴', content: '每位學生都會安排助教進行學習監督，也同時是你的學習小幫手。碰到任何學習問題都可以即時請教小助教喔！讓線上學習不在孤單...', pic: Pic4 },
      ],
      comments1: [{
        id: 1, title: 'Kasper', subtitle: '臺灣科技大學 四年級', comment: '我覺得我在Atlas101不只學到托福的考試技巧，我同時更懂得用英文去表達自己的想法，這對於我未來想從事的航空業有很大的加分效果。如果你也想提升自己的口說跟寫作能力的話，我認為Atlas101是一個值得信賴的選擇！',
        pic: Pic5
      }, {
        id: 2, title: '佩娟 ', subtitle: '臺灣科技大學 四年級', comment: '自己希望加強口說與寫作的能力，因為成績一直不是很理想。而Atlas101用數據分析跟我說明，若要拉高口說與寫作的分數，就必須先更強化自己的閱讀與聽力的能力。所以在前幾個月，我特別加強閱讀與聽力課程，少部分時間就會上口說或寫作課。因為一步一步打好基礎，現在獲得不少口說和寫作的做題信心，老師給予的意見反饋也越來越好了。',
        pic: Pic6
      }, {
        id: 3, title: '陳徹', subtitle: '高中二年級社會組', comment: '照著每日系統課程的安排，平日每天晚上回家可用40-60分鐘進行學習，壓力不大也能學到很多東西，且英文的聽說讀寫分配平均，無所偏廢。由於又是一對一能給予許多貼切的指導建議，同時也能與老師商討學習難點狀況，使課程內容更符合自身需求。幾個月下來，英文由原本的後段班，逐漸拉升至前十的佳績。',
        pic: Pic7
      },
      ],
      comments2: [{
        id: 1, title: 'Zoe', subtitle: '外商科技公司擔任行銷企劃', comment: '會選擇Atlas101作為我增強英語能力的夥伴。第一當然是因為Atlas101是英文證照考試為導向的線上學習平台，且上課的時間很彈性，我能夠在通勤的時間，去複習一些課程。以托福考試為基底去設計的課程，使用一個全球最嚴謹英文測驗為教學內容去設計，不只是幫助考試同時也大幅提升聽、說、讀、寫的英文能力，實質應用在我的工作上。',
        pic: Pic8
      }, {
        id: 2, title: '惠茹', subtitle: '銷售服務業', comment: 'Atlas101與坊間的線上學習系統不同，它彌補了自主學習的弱點，又同時兼顧讓學習者掌握自己的學習步調。最先吸引到我的是口說及寫作課，兩項是英語學習者普遍的弱點，Atlas101是一對一的線上教學，並且在上課前須完成作業，上課時老師針對作業中犯錯的地方與我討論，並且針對我的弱點及不足的地方提供很多的技巧，讓我可以不再害怕說出口及寫作文章更加言之有物，能有更紮實的準備，面對考試也更有信心。',
        pic: Pic9
      }, {
        id: 3, title: '瑩瑜', subtitle: '藝術教育服務業', comment: '報名Atlas101後，因為有系統自動安排每日進度與時間限制，有效地讓我轉「時間壓力」為「學習動力」，而且系統的使用介面清楚明瞭，可以很快找到單元分類，回去複習也不會迷失方向。系統有提供圖像化的個人學習地圖，搭配數據化學習分析，顯示自己每種題型的強項弱項。外加上有顯示單元的獎勵點數，每單元訓練完成整個成就滿滿！',
        pic: Pic10
      },
      ],
      name: '',
      tel: '',
      line: '',
      nameErr: '',
      telErr: '',
      lineErr: ''
    }
  },
  components: {
    Nav,
    Footer
  },
  methods: {
    setName(e) {
      this.name = e.target.value;
    },
    setTel(e) {
      this.tel = e.target.value;
    },
    setLine(e) {
      this.line = e.target.value;
    },
    handleSubmit() {
      // this.nameErr = '';
      // this.telErr = '';
      // this.lineErr = '';
      if (this.name !== '' && this.tel !== '' && this.line !== '') {
        this.$router.push('/todos')
      } else {
        this.name === '' ? this.nameErr = '請勿為空' : this.nameErr = '';
        this.tel === '' ? this.telErr = '請勿為空' : this.telErr = '';
        this.line === '' ? this.lineErr = '請勿為空' : this.lineErr = '';
      }
    },
    handleToFeature(e) {
      e.preventDefault();
      window.scrollTo({ top: this.$refs.feature.offsetTop, behavior: 'smooth' })
      // this.$router.push('/about')
    },
    handleToMethods(e) {
      e.preventDefault();
      window.scrollTo({ top: this.$refs.methods.offsetTop, behavior: 'smooth' })
    },
    handleToComment(e) {
      e.preventDefault();
      window.scrollTo({ top: this.$refs.comments.offsetTop, behavior: 'smooth' })
    },
    handleToForm(e) {
      e.preventDefault();
      window.scrollTo({ top: this.$refs.form.offsetTop, behavior: 'smooth' })
    },
  },
}
</script>

<template>
  <div class="wrap">
    <Nav :handleToMethods="handleToMethods" :handleToFeature="handleToFeature" :handleToComment="handleToComment"
      :handleToForm="handleToForm">
    </Nav>
    <div class="content_1">

      <div class="title">
        <h1>首創線上導航式學習<br />只要4週看見托福進步曲線</h1>
        <h3>黃金比例結合：系統互動引導＋真人一對一</h3>
        <div class="pic_1"></div>
        <div class="pic_2"></div>
        <div class="pic_3" @click="handleToForm"></div>
        <div class="pic_4"></div>
        <div class="pic_5"></div>
      </div>
    </div>
    <div class="content_2" ref="feature">
      <div class="title2">
        <h2>由25年以上托福教學權威<span></span></h2>
        <h2><span></span>100%研發</h2>
      </div>
      <div class='content'>
        <div class="left">
          <div class="title">
            <h2>Atlas101<br />如何與別人不同
            </h2>
          </div>
          <span></span>
        </div>
        <div class="right">
          <ul class="rightUl">
            <li v-for="item in items">
              <span :style="{ backgroundImage: 'url(' + item.pic + ')' }"></span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.content }}</p>
            </li>

          </ul>
        </div>
      </div>
    </div>
    <div class="content_3" ref="methods">
      <div class="title2">
        <h2>Atlas101聽說讀寫怎麼上？</h2>
      </div>
      <div class="content">
        <ul class="video">
          <li>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/tidgsqAf_tI"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </li>
          <li>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/FT3ODSg1GFE"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </li>
          <li>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/I-t2mwrYc6s"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </li>
        </ul>
      </div>
    </div>
    <div class="content_4" ref="comments">
      <div class="title2">
        <h2>Atlas101學長姐真心推薦...</h2>
        <h4>Atlas101線上學習系統，陪伴眾多高分考生尋得<br />最有效的備考方式。唯有親身經歷過才能體會，<br />立刻聽聽優秀學長姐怎麼說？</h4>
      </div>
      <div class="content">
        <div class="left">
          <ul>
            <li v-for="item in comments1">
              <p>{{ item.comment }}</p>
              <div class="bottom">
                <img :src='`${item.pic}`' alt="" width="100%">
                <div class="user">
                  <h5>{{ item.title }}</h5>
                  <p>{{ item.subtitle }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="right">
          <ul>
            <li v-for="item in comments2">
              <p>{{ item.comment }}</p>
              <div class="bottom">
                <img :src='`${item.pic}`' alt="" width="100%">
                <div class="user">
                  <h5>{{ item.title }}</h5>
                  <p>{{ item.subtitle }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="formData" ref="form">
      <div class="content">
        <span class="pic3" style=" backgroundImage: url('/img/formData_1.svg') "></span>
        <div class="pic1">
          <div class="left">
            <div class="title">
              <h2>申請課程體驗
                <span class="pic4" style=" backgroundImage: url('/img/formData_2.png') ">
                </span>
              </h2>
              <h4>5/31止填表諮詢體驗，享最高折扣12,000元

              </h4>
            </div>
          </div>
          <div class="right">
            <form action="" @submit.prevent="handleSubmit">
              <div class="inputWrap">
                <label for="">您的姓名</label>
                <input type="text" v-model="name">
                <span>{{ nameErr }}</span>
              </div>
              <div class="inputWrap">
                <label for="">電話</label>
                <input type="text" v-model="tel">
                <span>{{ telErr }}</span>
              </div>
              <div class="inputWrap">
                <label for="">LINE ID</label>
                <input type="text" v-model="line">
                <span>{{ lineErr }}</span>
              </div>
              <button>立即申請 課程體驗</button>
            </form>

          </div>
        </div>

        <span class="pic5" style=" backgroundImage: url('/img/formData_3.svg') ">
        </span>
        <span class="pic2"></span>
      </div>
    </div>
    <RouterLink to="/todos">Home</RouterLink>
    <Footer></Footer>
  </div>

</template>


<style scoped>
.wrap {
  width: 100%;
  height: auto;
  color: #fff;
  background: linear-gradient(174.72deg, #112233 -7.11%, #2A5298 112.92%, #2A5298 112.92%);
}

.wrap .content_1 {
  max-width: 1440px;
  margin: 0 auto;
  height: 1100px;
  padding: 3rem 2rem 2rem 2rem;
}

.wrap .content_1 .title {
  position: relative;
}

.wrap .content_1 .title .pic_1 {
  position: absolute;
  background-image: url('./assets/sec_1.png');
  background-repeat: no-repeat;
  background-size: 1100px;
  width: 800px;
  height: 1000px;
  top: 0px;
  left: 80px;
  z-index: 10;
}

.wrap .content_1 .title .pic_2 {
  position: absolute;
  background-image: url('./assets/sec_2.png');
  background-repeat: no-repeat;
  background-size: 600px;
  width: 900px;
  height: 800px;
  top: 120px;
  right: -150px;
  z-index: 8;
}

.wrap .content_1 .title .pic_3 {
  position: absolute;
  background-image: url('./assets/sec_3.png');
  background-repeat: no-repeat;
  background-size: 300px;
  width: 300px;
  height: 210px;
  top: 700px;
  right: 200px;
  cursor: pointer;
  z-index: 20;
}


.wrap .content_1 .title .pic_4 {
  position: absolute;
  background-image: url('./assets/sec_4.svg');
  background-repeat: no-repeat;
  background-size: 400px;
  width: 400px;
  height: 300px;
  top: -80px;
  left: 500px;
  z-index: 50;
}

.wrap .content_1 .title .pic_5 {
  position: absolute;
  background-image: url('./assets/sec_5.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 600px;
  top: -50px;
  left: 00px;
  z-index: 1;
}

.wrap .content_2 {
  max-width: 1440px;
  margin: 0 auto;
  height: auto;
  padding: 3rem 2rem 2rem 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}


.wrap .content_2 .title2>h2 {
  position: relative;
  text-align: right;
}

.wrap .content_2 .title2>h2:nth-child(2) {
  margin-right: -5rem;

}

.wrap .content_2 .title2>h2>span {
  position: absolute;
  display: block;
  background-image: url('./assets/sec2_1.png');
  background-repeat: no-repeat;
  background-size: 80px;
  width: 200px;
  height: 90px;
  top: -15px;
  right: -210px;
}

.wrap .content_2 .title2>h2:nth-child(2)>span {
  position: absolute;
  display: block;
  background-image: url('./assets/sec2_2.svg');
  background-repeat: no-repeat;
  background-size: 450px;
  width: 450px;
  height: 90px;
  top: -10px;
  left: -90px;
}

.wrap .content_2 .content {
  width: 100%;
  padding: 10rem 0 3rem 0;
  display: flex;
}

.wrap .content_2 .content h2 {
  line-height: 56px;
  width: 100%;
}

.wrap .content_2 .content .left>span {
  display: block;
  background-image: url('./assets/sec2_7.svg');
  background-repeat: no-repeat;
  background-size: 20px 170px;
  width: 20px;
  height: 170px;
  margin-top: 8rem;
  cursor: pointer;
}

.wrap .content_2 .content .left {
  width: 40%;
}

.wrap .content_2 .content .right {
  width: 60%;
}

.wrap .content_2 .content .right .rightUl {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 4%;
}

.wrap .content_2 .content .right .rightUl>li {
  width: 48%;
  text-align: justify;
  padding-bottom: 4rem;
}

.wrap .content_2 .content .right .rightUl>li>span {
  display: block;
  background-repeat: no-repeat;
  background-size: 80px;
  width: 80px;
  height: 80px;
}

.wrap .content_2 .content .right .rightUl>li>h3 {
  font-weight: 700;
  line-height: 38px;
  padding-bottom: 0.5rem;
}

.wrap .content_3 {
  max-width: 1440px;
  margin: 0 auto;
  height: auto;
  padding: 3rem 2rem 2rem 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.wrap .content_3 .title2 {
  padding: 0 0 5rem 0;
}

.wrap .content_3 .content {
  width: 100%;
  height: 400px;
  background: rgba(246, 249, 255, 0.28);
  backdrop-filter: blur(12.5px);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrap .content_3 .content .video {
  width: 90%;
  height: 300px;
  display: flex;
  justify-content: space-between;
}

.wrap .content_3 .content .video>li {
  width: 30%;
  height: 300px;
  display: flex;
  align-items: center;
}

.wrap .content_3 .content .video>li>iframe {
  width: 100%;
  height: 300px;
}

.wrap .content_4 {
  max-width: 1440px;
  margin: 0 auto;
  height: auto;
  padding: 10rem 2rem 2rem 2rem;
}

.wrap .content_4 .content {
  width: 100%;
  padding: 3rem 0 0 0;
  display: flex;
  gap: 4%;
}

.wrap .content_4 .content .left {
  width: 48%;
}

.wrap .content_4 .content .right {
  width: 48%;
  padding: 10rem 0 0 0;
}

.wrap .content_4 .content ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.wrap .content_4 .content ul>li {
  background: #FFFFFF;
  box-shadow: 0px 5px 14px rgba(8, 15, 52, 0.04);
  border-radius: 20px;
  width: 100%;
  height: 280px;
  padding: 2rem 2rem 0rem 2rem;
  /* display: flex;
  flex-wrap: wrap; */
  margin-bottom: 2rem;
}

.wrap .content_4 .content ul>li>p {
  color: #514F6E;
  font-size: 16px;
  height: 150px;
  overflow: hidden;
  text-align: justify;
  margin-bottom: 0.5rem;
}

.wrap .content_4 .content ul>li .bottom {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.wrap .content_4 .content ul>li .bottom>img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.wrap .content_4 .content ul>li .bottom .user>h5 {
  color: #170F49;
  font-weight: 700;
}

.wrap .content_4 .content ul>li .bottom .user>p {
  color: #4F4F4F;
  font-weight: 500;
}

.wrap .formData {
  max-width: 1440px;
  margin: 0 auto;
  height: auto;
  padding: 10rem 2rem 2rem 2rem;
}

.wrap .formData .content {
  position: relative;
  width: 100%;
  height: 600px;
}

.wrap .formData .content .pic2 {
  position: absolute;
  background-image: url('./assets/formData_5.svg');
  background-repeat: no-repeat;
  background-size: 100%;
  width: 95%;
  height: 520px;
  top: 0;
  right: 0;
  z-index: 14;
}

.wrap .formData .content .pic3 {
  position: absolute;
  background-repeat: no-repeat;
  background-size: 230px;
  width: 230px;
  height: 230px;
  top: -50px;
  right: 0;
  z-index: 13;
  mix-blend-mode: luminosity;
  /* transform: matrix(-0.99, -0.1, 0.11, -1, 0, 0); */
}

.wrap .formData .content .pic4 {
  position: absolute;
  background-repeat: no-repeat;
  background-size: 150px;
  width: 150px;
  height: 150px;
  top: -70px;
  right: 150px;
  z-index: 16;
}

.wrap .formData .content .pic5 {
  position: absolute;
  background-repeat: no-repeat;
  background-size: 150px;
  width: 150px;
  height: 150px;
  bottom: 0px;
  left: 0px;
  z-index: 16;
  mix-blend-mode: luminosity;
}

.wrap .formData .content .pic1 {
  position: absolute;
  background-image: url('./assets/formData_4.svg');
  background-repeat: no-repeat;
  background-size: 100%;
  width: 95%;
  height: 520px;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: flex;
  padding: 4rem 3rem 0 3rem;
  gap: 2rem;
}

.wrap .formData .content .pic1 .left {
  width: 50%;
  height: 300px;
}

.wrap .formData .content .pic1 .left .title {}

.wrap .formData .content .pic1 .left .title>h2 {
  font-weight: 700;
  position: relative;
}

.wrap .formData .content .pic1 .left .title>h4 {
  font-weight: 700;
}

.wrap .formData .content .pic1 .right {
  width: 50%;
  height: 300px;
}


.wrap .formData .content .pic1 .right>form .inputWrap {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  padding-bottom: 0.5rem;
}

.wrap .formData .content .pic1 .right>form .inputWrap>label {
  width: 100%;
  padding-bottom: 0.5rem;
  font-size: 16px;
}

.wrap .formData .content .pic1 .right>form .inputWrap>input {
  width: 100%;
  height: 40px;
  border: unset;
  outline: unset;
  padding: 0 0.5rem;
  font-size: 16px;
  border-radius: 5px;
}

.wrap .formData .content .pic1 .right>form .inputWrap>span {
  display: block;
  width: 100%;
  color: rgb(235, 255, 59);
  font-size: 16px;
  height: 28px;
}

.wrap .formData .content .pic1 .right>form>button {
  width: 80%;
  height: 40px;
  border-radius: 5px;
  background-color: #003465;
  color: #fff;
  border: unset;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  margin-top: 0.5rem;
  font-size: 16px;
}

.wrap .formData .content .pic1 .right>form>button:hover {
  background-color: #072949;
}






@media(max-width:768px) {
  .wrap .content_1 {
    height: 600px;
    padding: 2rem 1rem 2rem 1rem;
  }

  .wrap .content_1 .title>h1>br {
    display: none;
  }

  .wrap .content_1 .title .pic_1 {
    background-size: 350px;
    width: 350px;
    height: 350px;
    top: 220px;
    left: 0px;
  }

  .wrap .content_1 .title .pic_2 {
    background-size: 200px;
    width: 200px;
    height: 300px;
    top: 250px;
    right: 0px;
  }

  .wrap .content_1 .title .pic_3 {
    background-size: 100px;
    width: 100px;
    height: 210px;
    top: 450px;
    right: 0px;
  }


  .wrap .content_1 .title .pic_4 {
    background-size: 250px;
    width: 250px;
    height: 200px;
    top: 150px;
    left: unset;
    right: 150px;
  }

  .wrap .content_1 .title .pic_5 {
    background-size: 100%;
    width: 100%;
    height: 180px;
    left: 15px;
    top: 200px;
  }

  .wrap .content_1 .title>h3 {
    width: 80%;
    padding-top: 1rem;
  }

  .wrap .content_2 {
    padding: 2rem 1rem 2rem 1rem;
  }

  .wrap .content_2 .title2 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border-top: 1px solid #C4C4C4;
    border-bottom: 1px solid #C4C4C4;
    padding: 3rem 0;
  }

  .wrap .content_2 .title2>h2 {
    width: 60%;
    text-align: center;
  }


  .wrap .content_2 .title2>h2:nth-child(2) {
    margin-top: 3rem;
    margin-right: 0rem;

  }

  .wrap .content_2 .title2>h2>span {
    display: none;
  }

  .wrap .content_2 .title2>h2:nth-child(2)>span {
    background-size: 250px;
    width: 250px;
    height: 70px;
    top: -50px;
    left: -25px;
  }

  .wrap .content_2 .content {
    width: 100%;
    padding: 4rem 0 3rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .wrap .content_2 .content h2 {
    line-height: 40px;
    text-align: center;
    width: 100%;
  }

  .wrap .content_2 .content .left>span {
    display: none;
  }

  .wrap .content_2 .content .left {
    width: 100%;
  }

  .wrap .content_2 .content .right {
    width: 100%;
  }

  .wrap .content_2 .content .right .rightUl {
    width: 100%;
  }

  .wrap .content_2 .content .right .rightUl>li {
    width: 100%;
    text-align: center;
    padding: 0 2rem 4rem 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

  }

  .wrap .content_2 .content .right .rightUl>li>span {
    width: 80px;
    height: 80px;
  }

  .wrap .content_2 .content .right .rightUl>li>h3 {
    padding-bottom: 0.5rem;
    width: 100%;
  }

  .wrap .content_3 {
    padding: 3rem 1rem 2rem 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .wrap .content_3 .title2 {
    padding: 4rem 1rem 1rem 1rem;
    text-align: center;
    background: rgba(246, 249, 255, 0.28);
    backdrop-filter: unset;
    width: 100%;
    border-radius: 40px 40px 0px 0px;
  }


  .wrap .content_3 .content {
    width: 100%;
    height: 1000px;
    border-radius: 0px 0px 40px 40px;
    align-items: flex-start;
  }

  .wrap .content_3 .content .video {
    width: 90%;
    height: 600px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .wrap .content_3 .content .video>li {
    width: 90%;
    height: 310px;
  }


  .wrap .content_4 {
    padding: 4rem 1rem 2rem 1rem;
  }

  .wrap .content_4 .title2 {
    text-align: center;
  }

  .wrap .content_4 .content {
    padding: 3rem 0 0 0;
    display: flex;
    flex-wrap: wrap;
  }

  .wrap .content_4 .content .left {
    width: 100%;
  }

  .wrap .content_4 .content .right {
    width: 100%;
    padding: 0rem 0 0 0;
  }

  .wrap .content_4 .content ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .wrap .content_4 .content ul>li {
    width: 100%;
    height: auto;
    padding: 1rem 1.5rem 1rem 1.5rem;
    margin-bottom: 2rem;
  }

  .wrap .content_4 .content ul>li>p {
    font-size: 14px;
    height: auto;
    margin-bottom: 1rem;
  }


  .wrap .formData {
    padding: 3rem 1rem 2rem 1rem;
  }

  .wrap .formData .content {
    height: 600px;
  }

  .wrap .formData .content .pic2 {
    background-size: 100%;
    background-image: url('./assets/formData_7.svg');
    width: 95%;
    height: 700px;
    top: 0;
    right: 0;
  }

  .wrap .formData .content .pic3 {
    display: none;
  }

  .wrap .formData .content .pic4 {
    top: -100px;
    right: -80px;
  }

  .wrap .formData .content .pic5 {
    background-size: 120px;
    width: 120px;
    height: 120px;
    bottom: -100px;
    left: 0px;
  }

  .wrap .formData .content .pic1 {
    background-size: 100%;
    background-image: url('./assets/formData_6.svg');
    width: 95%;
    height: 540px;
    bottom: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    padding: 2rem 3rem 0 3rem;
    gap: 0rem;
  }

  .wrap .formData .content .pic1 .left {
    width: 100%;
    height: 120px;
  }

  .wrap .formData .content .pic1 .left .title {}

  .wrap .formData .content .pic1 .left .title>h2 {
    font-weight: 700;
    position: relative;
  }

  .wrap .formData .content .pic1 .left .title>h4 {
    font-weight: 700;
  }

  .wrap .formData .content .pic1 .right {
    width: 100%;
    height: auto;
  }


  .wrap .formData .content .pic1 .right>form .inputWrap {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom: 0rem;
    height: 90px
  }

  .wrap .formData .content .pic1 .right>form .inputWrap>label {
    width: 100%;
    padding-bottom: 0.2rem;
    font-size: 14px;
  }

  .wrap .formData .content .pic1 .right>form .inputWrap>input {
    height: 40px;
    font-size: 14px;
  }

  .wrap .formData .content .pic1 .right>form .inputWrap>span {

    font-size: 14px;
    height: 20px;
  }

  .wrap .formData .content .pic1 .right>form>button {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background-color: #003465;
    color: #fff;
    border: unset;
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    margin-top: 0.5rem;
    font-size: 16px;
  }

  .wrap .formData .content .pic1 .right>form>button:hover {
    background-color: #072949;
  }

}
</style> -->