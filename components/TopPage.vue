<template>
  <div>
    <top-section class="section"></top-section>
    <project-section class="section"></project-section>
    <skill-section class="section"></skill-section>
    <contact-section class="section"></contact-section>
    <about-section class="section"></about-section>
  </div>
</template>
<script>
import TopSection from './TopSection.vue'
import ProjectSection from './project/ProjectSection.vue'
import SkillSection from './skill/SkillSection.vue'
import ContactSection from './contact/ContactSection.vue'
import AboutSection from './about/AboutSection.vue'
export default {
  name: 'TopPage',
  components: {
    TopSection,
    ProjectSection,
    SkillSection,
    ContactSection,
    AboutSection
  }
}
</script>

<style lang="scss" scoped>
.section {
  margin-bottom: 136px;
}
</style>
