<template>
  <div>
    <v-img
      :src="imageurl"
      class="image"
      alt="私の写真"
      aspect-ratio="1.5"
      contain
      max-width=480
    >
    </v-img>
  </div>
</template>
<script>
export default {
  name: 'AboutImage',
  data () {
    return {
      imageurl: 'images/mizuki.png'
    }
  }
}
</script>
<style lang="scss" scoped>
.image {
  margin-left: auto;
  border-radius: 24px;
}

@media (max-width: 960px) {
  .image {
    margin: auto;
  }
}
</style>
