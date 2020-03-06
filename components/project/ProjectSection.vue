<template>
  <div id="project">
    <project-title class="section-title">
    </project-title>
    <project-content></project-content>
  </div>
</template>

<script>
import projectTitle from './projectTitle.vue'
import projectContent from './projectContent.vue'
export default {
  name: 'projectSection',
  components: {
    projectTitle,
    projectContent
  }
}
</script>
