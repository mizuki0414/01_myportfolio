<template>
  <v-toolbar flat color=white class="tool-bar" height=64>
    <v-toolbar-title class="tool-bar__logo">
      {{siteLogo}}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="tool-bar__items">
        <v-btn v-for="(item, index) in menus" :key="index" flat>
          <div v-scroll-to="item.link">
            {{item.title}}
          </div>
        </v-btn>
    </v-toolbar-items>
    <v-toolbar-side-icon class="tool-bar__icon">
      <i class="fas fa-bars"></i>
    </v-toolbar-side-icon>
  </v-toolbar>
</template>
<script>
export default {
  name: 'ToolBar',
  data () {
    return {
      siteLogo: 'Mizuki Onogawa project',
      menus: [
        {title: 'project', link: "'#project'"},
        {title: 'Skills' , link: "'#skills'"},
        {title: 'Contact', link: "'#contact'"},
        {title: 'About me', link: "'#about'"}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
// 960px以下ではタブメニューを非表示にし、ハンバーガーアイコンを表示させる
.tool-bar__icon {
    display: none;
}

@media (max-width: 960px) {
  .tool-bar__logo {
    display: none;
  }
  .tool-bar__items{
    display: none;
  }
  .tool-bar__icon {
    display: block;
  }
}
</style>
