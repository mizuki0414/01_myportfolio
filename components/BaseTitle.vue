<template>
  <h3 class="display-2 font-weight-regular base-title">
    {{ gettingTitle }}
  </h3>
</template>
<script>
export default {
  name: 'BaseTitle',
  props: {
    gettingTitle: {
      type: String,
      required: true
    }
  }
}
</script>
