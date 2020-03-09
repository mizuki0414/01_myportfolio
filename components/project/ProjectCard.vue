<template>
  <v-card tile class="project-card">
    <v-img v-bind:src="imageurl" aspect-ratio="1.5" class="project-card__image">
    </v-img>
    <v-card-title class="project-card__text">
      <div class="text-box">
        <v-layout align-start justify-start column>
          <base-cardtitle v-bind:getting-title="title" class="project-card__text-title">
          </base-cardtitle>
          <base-description v-bind:getting-description="description" class="description">
          </base-description>
        </v-layout>
      </div>
    </v-card-title>
    <v-card-actions class="actions" style="text-align:center;">
    <a :href="link" target="_brank"><v-btn color="info" class="btn">Detail</v-btn></a>
    </v-card-actions>
  </v-card>
</template>
<script>
import BaseCardtitle from '../BaseCardtitle.vue'
import BaseDescription from '../BaseDescription.vue'
import BaseButton from '../BaseButton.vue'

export default {
  name: 'projectCard',
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
.project-card {
  border-radius: 5px;
  .project-card__image {
    border-radius: 5px 5px 0 0;
  }
  .project-card__text {
    margin: 12px;

    .project-card__text-title {
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
    margin: 0 auto;
    text-decoration: none;
  }
}
.btn {
  border-radius: 15px;
  background-color: #24b37c !important;
  text-align: center;
}
</style>
