<template>
<div class="sns-box">
  <v-flex v-for="(icon, index) in icons" v-bind:key="index" class="sns" xs2 sm2 md2>
    <a v-bind:href="icon.link" class="sns__link" text-left target="_brank">
      <i class="fab sns__icon" v-bind:class="icon.class"></i>
    </a>
  </v-flex>
</div>
</template>

<script>
export default {
  name: 'ContactToolicon',
  data () {
    return {
      icons: [
        {class: 'fa-linkedin-in', link: 'https://www.linkedin.com/in/%E7%91%9E%E5%AD%A3-%E5%B0%8F%E9%87%8E%E5%B7%9D-407aa1113/'},
        {class: 'fa-instagram', link: 'https://www.instagram.com/mizukii0414/?hl=ja'},
        {class: 'fa-facebook', link: 'https://www.facebook.com/mizuki.onogawa'},
        {class: 'fa-github', link: 'https://github.com/mizuki0414'}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.sns-box {
  text-align: left;
  margin-left: 2px;
.sns {
  display: inline-block;
  .sns__link {
    text-decoration: none;
    color: #000;
    text-align: left;

    .sns__icon {
      font-size: 1.8rem;
    }
    .sns__icon:hover {
      opacity: 0.3;
      transition: 0.1s ease;
    }
  }
}

}
@media (max-width: 960px) {
  .sns-box {
    text-align: center;
    .sns {
      margin: auto;
    }
  }
}
</style>
