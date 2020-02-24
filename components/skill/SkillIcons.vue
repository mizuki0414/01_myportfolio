<template>
  <v-layout
    align-center
    justify-center
  >
    <v-flex
      v-for="(item, index) in skillIcons"
      v-bind:key="index"
      class="sns"
      xs3
      sm3
      md3
    >
      <skill-icon
        v-bind:skill-name="item.name"
        v-bind:skill-class="item.class"
      >
      </skill-icon>
    </v-flex>
  </v-layout>
</template>

<script>
import SkillIcon from './SkillIcon.vue'
export default {
  name: 'ContactToolicon',
  components: {
    SkillIcon
  },
  props: {
    skillIcons: {
      name: String,
      class: String
    }
  }
}
</script>
