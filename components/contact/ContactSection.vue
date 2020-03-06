<template>
  <div id="contact">
    <v-contactform class="contactform" v-bind:src="imageurl" height="500">
      <v-layout align-center column justify-center>
        <contact-title class="section-title">
        </contact-title>
        <contact-content></contact-content>
      </v-layout>
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
