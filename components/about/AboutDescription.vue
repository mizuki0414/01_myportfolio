<template>
  <div>
    <base-description v-bind:gettingDescription="description">
    </base-description>
  </div>
</template>
<script>
import BaseDescription from '~/components/BaseDescription.vue'
export default {
  name: 'AboutTitle',
  components: {
    BaseDescription
  },
  data () {
    return {
      description: '東京在住、1991年生まれ。\nAccenture卒\n東京工業大学大学院知能システム科学専攻卒\n同志社大学電子工学化卒\n埼玉県立浦和高校卒\n\n-略歴\n大学院を修了後、2017年新卒にてアクセンチュア入社。\nシステム開発~コンサルティング業務を経験。\nテクノロジー/セキュリティコンサルティング部を経て退職。2020/04~GsAcademyLab 9th\n'
    }
  }
}
</script>
