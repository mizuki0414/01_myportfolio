<template>
  <base-title
    v-bind:gettingTitle="title"
  >
  </base-title>
</template>
<script>
import BaseTitle from '~/components/BaseTitle.vue'
export default {
  name: 'SkillTitle',
  components: {
    BaseTitle
  },
  data () {
    return {
      title: 'Skills'
    }
  }
}
</script>
