<template>
  <div id="contact">
    <v-contactform class="contactform" v-bind:src="imageurl" height="500">
    <v-img :src="imageurl" class="image" alt="MizukiOnogawa" aspect-ratio="1.0" height="300">
      <v-layout align-center column justify-center>
        <contact-title class="section-title" style="color: white; margin-top: 50px;">
        </contact-title>
        <contact-content></contact-content>
      </v-layout>
    </v-img>
    </v-contactform>
  </div>
</template>

<script>
import ContactTitle from './ContactTitle.vue'
import ContactContent from './ContactContent.vue'
export default {
  name: 'ContactSection',
  components: {
    ContactTitle,
    ContactContent
  },
  data () {
    return {
      imageurl: 'images/background.jpg'
    }
  }
}
</script>

<style lang="scss" scoped>
.section-title {
  margin-bottom: 40px;
}
</style>
