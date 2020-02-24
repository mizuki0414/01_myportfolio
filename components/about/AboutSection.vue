<template>
  <div id="about">
    <about-title
      class="section-title"
    >
    </about-title>
    <about-content></about-content>
  </div>
</template>

<script>
import AboutTitle from './AboutTitle.vue'
import AboutContent from './AboutContent.vue'
export default {
  name: 'AboutSection',
  components: {
    AboutTitle,
    AboutContent
  }
}
</script>
