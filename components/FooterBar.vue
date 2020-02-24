<template>
  <div>
    <footer-toolbar></footer-toolbar>
    <footer-backtotop></footer-backtotop>
    <v-footer
      color="white"
    >
      <v-layout
        align-center
        justify-center
      >
        <div>&copy; {{ new Date().getFullYear() }} Mizuki Onogawa</div>
      </v-layout>
    </v-footer>
  </div>
</template>

<script>
import FooterToolbar from '~/components/FooterToolbar.vue'
import FooterBacktotop from '~/components/FooterBacktotop.vue'
export default {
  name: 'FooterBar',
  components: {
    FooterToolbar,
    FooterBacktotop
  }
}
</script>
