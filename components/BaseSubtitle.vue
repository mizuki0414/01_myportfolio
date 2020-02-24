<template>
  <h5 class="headline text-lg-left">{{gettingSubtitle}}</h5>
</template>
<script>
export default {
  name: 'BaseSubtitle',
  props: {
    gettingSubtitle: {
      type: String,
      required: true
    }
  }
}
</script>
