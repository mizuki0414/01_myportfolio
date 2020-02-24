<template>
  <!-- <base-description
    v-bind:gettingDescription="description"
    class="text"
  >
  </base-description> -->
  <div class="description">
    <p>Mailまたは Messenger にてお気軽にご連絡下さい。</p>
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
      description: 'メール、または Messenger にてお気軽にご連絡下さい。\nMessenger をクリックするか、メールアドレスに直接ご連絡下さい。'
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  text-align: center;
}
</style>
