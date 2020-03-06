<template>
<div class="topsection">
  <v-topsection　id="top" class="top_img" :src="imageurl" height="600" jumbotron>
    <v-layout align-center column justify-center>
      <h2 class="display-3 font-weight-black text">{{siteTitle}}</h2>
      <h5 class="headline text">{{siteDescription}}</h5>
    </v-layout>
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
      siteDescription: '- works introduction -'
    }
  }
}
</script>

<style lang="scss" scoped>
.topsection img{
  height: 100%;
  object-fit: cover;
}
.text {
  color: #fff;
}
</style>
