<template>
  <div>
    <the-parallax1 class="section"></the-parallax1>
    <about-section class="section"></about-section>
    <skill-section class="section"></skill-section>
    <portfolio-section class="section"></portfolio-section>
    <contact-section class="section"></contact-section>
  </div>
</template>
<script>
import TheParallax1 from './TheParallax1.vue'
import AboutSection from './about/AboutSection.vue'
import SkillSection from './skill/SkillSection.vue'
import PortfolioSection from './portfolio/PortfolioSection.vue'
import ContactSection from './contact/ContactSection.vue'
export default {
  name: 'TopPage',
  components: {
    TheParallax1,
    AboutSection,
    SkillSection,
    PortfolioSection,
    ContactSection
  }
}
</script>

<style lang="scss" scoped>
.section {
  margin-bottom: 136px;
}
</style>
