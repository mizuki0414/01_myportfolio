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
import TopSection from '~/components/TopSection.vue'
import ProjectSection from '~/components/project/ProjectSection.vue'
import SkillSection from '~/components/skill/SkillSection.vue'
import ContactSection from '~/components/contact/ContactSection.vue'
import AboutSection from '~/components/about/AboutSection.vue'
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
