<template>
  <v-card
    tile
    class="skill-card"
  >
    <v-card-title
      class="card-title"
    >
      <v-layout
        align-center
        justify-center
      >
        <base-cardtitle
          class="skill-card__title"
          v-bind:getting-title="skillTitle"
        >
        </base-cardtitle>
      </v-layout>
    </v-card-title>
    <v-divider></v-divider>
    <skill-icons
      v-bind:skill-icons="skillIcons"
    >
    </skill-icons>
    <v-list-tile
      v-for="(item, index) in skillInfomation"
      v-bind:key="index"
    >
      <v-list-tile-content>{{item.name}}</v-list-tile-content>
      <v-list-tile-content class="align-end">{{item.year}}</v-list-tile-content>
    </v-list-tile>
  </v-card>
</template>
<script>
import BaseCardtitle from '../BaseCardtitle.vue'
import SkillIcons from './SkillIcons.vue'
export default {
  name: 'SkillCard',
  components: {
    BaseCardtitle,
    SkillIcons
  },
  props: {
    skillTitle: String,
    skillIcons: {
      name: String,
      class: String
    },
    skillDescription: String,
    skillInfomation: {
      name: String,
      year: Number
      // year: Number
    },
  }
}
</script>

<style lang="scss" scoped>
.skill-card {
  border-radius: 24px;

  .card-title {
    background: #2196F3;
  }

  .skill-card__title {
    padding: 16px 0;
    color: #fff;
  }
}
</style>
