<template>
  <div class="description">
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
      description: 'お気軽にご連絡下さい!'
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  text-align: center;
}
</style>
