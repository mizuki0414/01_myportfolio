<template>
  <v-toolbar flat color=white class="tool-bar" height=64>
    <v-toolbar-items class="tool-bar__items" margin-right: auto; margin-left: auto>
      <v-layout row wrap align-center justify-center>
        <v-flex>
          <v-btn flat v-scroll-to="'#project'">
              Projects
          </v-btn>
        </v-flex>
        <v-flex>
          <v-btn flat v-scroll-to="'#skills'">
              Skills
          </v-btn>
        </v-flex>
        <v-flex>
          <v-btn flat v-scroll-to="'#contact'">
              Contact
          </v-btn>
        </v-flex>
        <v-flex>
          <v-btn flat v-scroll-to="'#about'">
              About me
          </v-btn>
        </v-flex>
      </v-layout>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  name: 'ToolBar',
  data () {
    return {
      siteLogo: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.tool-bar__logo {
  font-weight: bold;
}
@media (max-width: 760px) {
.tool-bar__logo {
    display: none;
    }
}
.v-toolbar__content > :first-child, .v-toolbar__extension > :first-child{
  margin-left: auto;
}
.v-toolbar__content > :last-child, .v-toolbar__extension > :last-child{
  margin-right: auto;
}
</style>
