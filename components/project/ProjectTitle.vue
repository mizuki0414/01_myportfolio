<template>
  <base-title v-bind:gettingTitle="title"></base-title>
</template>
<script>
import BaseTitle from '../BaseTitle.vue'
export default {
  name: 'projectTitle',
  components: {
    BaseTitle
  },
  data () {
    return {
      title: 'PROJECTS'
    }
  }
}
</script>
