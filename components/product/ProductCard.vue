<template>
  <v-card tile class="product-card">
    <iframe v-bind:src="imageurl" width="100%" height="100%" frameborder="0" class="product-card__image">
    </iframe>
    <v-card-title class="product-card__text">
      <div class="text-box">
        <v-layout align-start justify-start column>
          <base-cardtitle v-bind:getting-title="title" class="product-card__text-title">
          </base-cardtitle>
          <base-description v-bind:getting-description="description" class="description">
          </base-description>
        </v-layout>
      </div>
    </v-card-title>
    <v-card-actions class="actions" style="text-align:left;">
      <a target="_brank">
        <v-btn color="info" class="btn" @click="openModal">Detail</v-btn>
      </a>
      <MyModal @close="closeModal" v-if="modal">
        <p v-html="subdescription"></p>
        <template slot="footer">
          <button @click="closeBtn">close</button>
        </template>
      </MyModal>
    </v-card-actions>
  </v-card>
</template>
<script>
import BaseCardtitle from '../BaseCardtitle.vue'
import BaseDescription from '../BaseDescription.vue'
import BaseButton from '../BaseButton.vue'
import MyModal from './MyModal.vue'

export default {
  name: 'ProductCard',
  components: {
    BaseCardtitle,
    BaseDescription,
    BaseButton,
    MyModal,
  },
  props: {
    title: String,
    description: String,
    subdescription: String,
    link: String,
    linkGit: String,
    imageurl: String
  },
  data () {
    return {
      buttonGithub: 'github',
      buttonLink: 'jump',
      modal: false,
      message: ''
    }
  },
  methods:{
  openModal() {
        this.modal = true
      },
      closeModal() {
        this.modal = false
      },
      closeBtn() {
        this.modal = false
      }
  }
}
</script>

<style lang="scss" scoped>
.product-card {
  border-radius: 5px;
  .product-card__image {
    border-radius: 5px 5px 0 0;
    background-color: black;
  }
  .product-card__text {
    margin: 12px;

    .product-card__text-title {
      margin-bottom: 8px;
    }
  }
  .text-box {
    padding: 4px 0 0;
    .description {
      padding-bottom: 0;
    }

  }
  a {
    margin: 0 auto;
    text-decoration: none;
  }
}
.btn {
  border-radius: 15px;
  background-color: #24b37c !important;
  text-align: center;
}
.overlay{
  /*　要素を重ねた時の順番　*/
  z-index:1;

  /*　画面全体を覆う設定　*/
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);

  /*　画面の中央に要素を表示させる設定　*/
  display: flex;
  align-items: center;
  justify-content: center;

}
.content{
  z-index:2;
  width:50%;
  padding: 1em;
  background:#fff;
}
.p {
    margin-bottom: 4px !important;
}
</style>
