<template>
<div class="topsection">
  <v-topsection>
    <v-img :src="imageurl" class="image" alt="MizukiOnogawa" aspect-ratio="1.0" height="300">
      <v-layout align-center column justify-center>
        <div id="toptext" style="margin-top: 100px">
          <h2 class="display-3 font-weight-black text">{{siteTitle}}</h2>
          <transition>
          <h5 class="headline text" v-if="show">{{siteDescription}}</h5>
          </transition>
        </div>
      </v-layout>
    </v-img>
  </v-topsection>
</div>
</template>
<script>
export default {
  name: 'TopSection',
  data () {
    return {
      imageurl: 'images/background.jpg',
      siteTitle: 'Mizuki Onogawa',
      siteDescription: '- works introduction -',
      show: true
    }
  }
}



</script>

<style lang="scss" scoped>
.topsection img{
  height: 10%;
  object-fit: cover;
}
.text {
  color: #fff;
}
.v-enter-active, .v-leave-active {
  transition: opacity 2s;
}
.v-enter, .v-leave {
  opacity: 0;
}
.display-3 {
    font-size: 50px !important;
}
</style>
