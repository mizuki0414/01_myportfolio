<template>
<div class="topsection">
  <v-topsection>
    <v-img :src="imageurl" class="image" alt="MizukiOnogawa" aspect-ratio="1.0" height="300">
      <v-layout align-center column justify-center>
        <div id="toptext" style="margin-top: 100px">
          <h2 class="display-3 font-weight-black text">{{siteTitle}}</h2>
          <h5 class="headline text">{{siteDescription}}</h5>
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
      siteDescription: '- works introduction -'
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
</style>
