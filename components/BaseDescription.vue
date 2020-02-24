<template>
  <p class="description body-2 text-lg-left">{{gettingDescription}}</p>
</template>
<script>
export default {
  name: 'BaseDescription',
  props: {
    gettingDescription: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.description {
  text-align: left;
  white-space: pre-wrap;
  word-wrap:break-word;
  line-height: 1.6rem;
}
</style>
