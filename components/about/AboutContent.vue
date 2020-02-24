<template>
  <v-item-group>
    <v-container grid-list-xl>
      <v-layout wrap align-center justify-center row>
        <v-flex xs10 sm10 md6>
          <v-item>
            <about-image></about-image>
          </v-item>
        </v-flex>
        <v-flex xs10 sm8 md6>
          <v-item>
            <div>
              <about-subtitle class="my-name">
              </about-subtitle>
              <about-description></about-description>
                <base-sns></base-sns>
            </div>
          </v-item>
        </v-flex>
      </v-layout>
    </v-container>
  </v-item-group>
</template>

<script>
import AboutSubtitle from './AboutSubtitle.vue'
import AboutDescription from './AboutDescription.vue'
import AboutImage from './AboutImage.vue'
import BaseSns from '../BaseSns.vue'
export default {
  name: 'AboutContent',
  components: {
    AboutDescription,
    AboutImage,
    AboutSubtitle,
    BaseSns
  }
}
</script>

<style lang="scss" scoped>
.my-name {
  text-align: left;
  margin-bottom: 0.6rem;
}
</style>
