<template>
  <div>
    <a
      href="#"
      v-scroll-to="'#top'"
      class="to-top"
    >
      <i class="fas fa-arrow-up fa-border back-to-top"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'FooterBacktotop'
}
</script>

<style lang="scss" scoped>
.to-top {
  display: inline-block;
  margin-top: 24px;
  margin-bottom: 24px;

  .back-to-top {
    font-size: 2.5rem;
    color: rgba(0,0,0,0.7);
  }
  .fa-border {
    border: 0.1rem solid rgba(0,0,0,0.7);
    border-radius: 50%;
  }
}
.to-top:hover {
  opacity: 0.3;
}
</style>
