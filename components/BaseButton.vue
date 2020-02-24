<template>
  <v-btn
    color="blue"
    round
    dark
    class="button"
  >
    {{gettingButtonName}}
  </v-btn>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    gettingButtonName: {
      type: String,
      required: true
    }
  }
}
</script>
