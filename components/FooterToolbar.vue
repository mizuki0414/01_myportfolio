<template>
  <v-toolbar
    flat
    color=white
  >
    <v-layout
      align-center
      justify-center
    >
      <v-toolbar-items class="menus">
        <v-btn flat v-scroll-to="'#product'">
            Products
        </v-btn>
        <v-btn flat v-scroll-to="'#project'">
            Projects
        </v-btn>
        <v-btn flat v-scroll-to="'#skills'">
            Skills
        </v-btn>
        <v-btn flat v-scroll-to="'#contact'">
            Contact
        </v-btn>
        <v-btn flat v-scroll-to="'#about'">
            About me
        </v-btn>
      </v-toolbar-items>
    </v-layout>
  </v-toolbar>
</template>

<script>
export default {
  name: 'FooterToolbar'
}
</script>

<style lang="scss" scoped>
.menus {
  margin: auto;
}
</style>
