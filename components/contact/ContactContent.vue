<template>
    <div>
      <contact-description class="desc"></contact-description>
      <contact-toolicon class="tool"></contact-toolicon>
    </div>
</template>

<script>
import ContactDescription from './ContactDescription.vue'
import ContactToolicon from './ContactToolicon.vue'
export default {
  name: 'ContactContent',
  components: {
    ContactDescription,
    ContactToolicon
  }
}
</script>

<style lang="scss">
.desc {
  margin-bottom: 32px;
}
</style>

