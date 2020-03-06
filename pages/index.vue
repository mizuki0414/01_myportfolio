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
import TopSection from '~/components/TopSection.vue'
import AboutSection from '~/components/about/AboutSection.vue'
import ProjectSection from '~/components/project/ProjectSection.vue'
import SkillSection from '~/components/skill/SkillSection.vue'
import ContactSection from '~/components/contact/ContactSection.vue'
export default {
  name: 'TopPage',
  components: {
    TopSection,
    AboutSection,
    ProjectSection,
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
