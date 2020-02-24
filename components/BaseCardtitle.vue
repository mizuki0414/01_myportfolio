<template>
  <h3 class="title font-weight-regular">
    {{gettingTitle}}
  </h3>
</template>
<script>
export default {
  name: 'SkillCardtitle',
  props: {
    gettingTitle: {
      type: String,
      required: true
    }
  }
}
</script>
