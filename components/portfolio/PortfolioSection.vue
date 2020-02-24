<template>
  <div id="portfolio">
    <portfolio-title class="section-title">
    </portfolio-title>
    <portfolio-content></portfolio-content>
  </div>
</template>

<script>
import PortfolioTitle from './PortfolioTitle.vue'
import PortfolioContent from './PortfolioContent.vue'
export default {
  name: 'PortfolioSection',
  components: {
    PortfolioTitle,
    PortfolioContent
  }
}
</script>
