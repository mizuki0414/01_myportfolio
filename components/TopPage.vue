<template>
  <div>
    <top-section class="section"></top-section>
    <about-section class="section"></about-section>
    <skill-section class="section"></skill-section>
    <project-section class="section"></project-section>
    <contact-section class="section"></contact-section>
  </div>
</template>
<script>
import TopSection from './TopSection.vue'
import AboutSection from './about/AboutSection.vue'
import SkillSection from './skill/SkillSection.vue'
import projectSection from './project/projectSection.vue'
import ContactSection from './contact/ContactSection.vue'
export default {
  name: 'TopPage',
  components: {
    TopSection,
    AboutSection,
    SkillSection,
    projectSection,
    ContactSection
  }
}
</script>

<style lang="scss" scoped>
.section {
  margin-bottom: 136px;
}
</style>
