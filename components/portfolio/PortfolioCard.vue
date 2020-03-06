<template>
  <v-card tile class="portfolio-card">
    <v-img v-bind:src="imageurl" aspect-ratio="1.5" class="portfolio-card__image">
    </v-img>
    <v-card-title class="portfolio-card__text">
      <div class="text-box">
        <v-layout align-start justify-start column>
          <base-cardtitle v-bind:getting-title="title" class="portfolio-card__text-title">
          </base-cardtitle>
          <base-description v-bind:getting-description="description" class="description">
          </base-description>
          <v-card-actions class="actions">
            <a :href="link" target="_brank"><v-btn color="info" class="btn">Detail</v-btn></a>
          </v-card-actions>
        </v-layout>
      </div>
    </v-card-title>
  </v-card>
</template>
<script>
import BaseCardtitle from '../BaseCardtitle.vue'
import BaseDescription from '../BaseDescription.vue'
import BaseButton from '../BaseButton.vue'

export default {
  name: 'PortfolioCard',
  components: {
    BaseCardtitle,
    BaseDescription,
    BaseButton
  },
  props: {
    title: String,
    description: String,
    link: String,
    linkGit: String,
    imageurl: String
  },
  data () {
    return {
      buttonGithub: 'github',
      buttonLink: 'jump'
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio-card {
  border-radius: 5px;
  .portfolio-card__image {
    border-radius: 5px 5px 0 0;
  }
  .portfolio-card__text {
    margin: 12px;

    .portfolio-card__text-title {
      margin-bottom: 8px;
    }
  }
  .text-box {
    padding: 4px 0 0;
    .description {
      padding-bottom: 0;
    }

  }
  a {
    text-decoration: none;
  }
}
.btn {
  border-radius: 15px;
  background-color: #24b37c !important;
  text-align: center;
}
</style>
