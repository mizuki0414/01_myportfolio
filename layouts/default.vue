<template>
  <div id="app">
    <v-app>
      <v-content>
          <tool-bar></tool-bar>
          <nuxt />
          <footer-bar class="footer"></footer-bar>
      </v-content>
    </v-app>
  </div>
</template>



<script>
import ToolBar from '~/components/ToolBar.vue'
import FooterBar from '~/components/FooterBar.vue'
export default {
  name: 'App',
  components: {
    ToolBar,
    FooterBar,
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  background-color: #fff;
}
.section-title {
  margin-bottom: 64px;
}
.section {
  margin-bottom: 136px;
}
.contact-section {
  margin-bottom: 54px;
}
.footer {
  margin-bottom: 32px;
}

</style>
