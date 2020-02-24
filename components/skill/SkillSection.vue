<template>
<div id="skills">
  <skill-title
    class="section-title"
  >
  </skill-title>
  <v-container>
    <v-layout
      align-center
      justify-center
    >
      <v-flex
        xs10
        sm11
        md12
      >
        <skill-content></skill-content>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
import SkillContent from './SkillContent.vue'
import SkillTitle from './SkillTitle.vue'
export default {
  name: 'SkillSection',
  components: {
    SkillContent,
    SkillTitle
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.skill-content {
}
</style>
