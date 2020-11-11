<template>
  <div id="product">
    <product-title class="section-title">
    </product-title>
    <product-content></product-content>
  </div>
</template>

<script>
import productTitle from './ProductTitle.vue'
import productContent from './ProductContent.vue'
export default {
  name: 'productSection',
  components: {
    productTitle,
    productContent
  }
}
</script>
