<template>
  <div class="description" style="color: white;">
    <p>{{ description }}</p>
  </div>
</template>

<script>
import BaseDescription from '../BaseDescription.vue'
export default {
  name: 'ContactDescription',
  components: {
    BaseDescription
  },
  data () {
    return {
      description: 'FBよりお気軽にご連絡ください'
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  text-align: center;
}
</style>
