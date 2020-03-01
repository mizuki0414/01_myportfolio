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
import TheParallax1 from '~/components/TheParallax1.vue'
import AboutSection from '~/components/about/AboutSection.vue'
import PortfolioSection from '~/components/portfolio/PortfolioSection.vue'
import SkillSection from '~/components/skill/SkillSection.vue'
import ContactSection from '~/components/contact/ContactSection.vue'
export default {
  name: 'TopPage',
  components: {
    TheParallax1,
    AboutSection,
    PortfolioSection,
    SkillSection,
    ContactSection
  }
}
</script>

<style lang="scss" scoped>
.section {
  margin-bottom: 136px;
}
</style>
