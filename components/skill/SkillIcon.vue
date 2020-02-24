<template>
  <v-layout align-center justify-center column>
    <v-flex>
      <i
        class="fab sns__icon"
        v-bind:class="skillClass"
      >
      </i>
    </v-flex>
    <v-flex>
      <span class="skill-name">{{skillName}}</span>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'ContactToolicon',
  props: {
    skillName: String,
    skillClass: String
  }
}
</script>
<style lang="scss" scoped>
.sns__icon {
  font-size: 4rem;
}
.skill-name {
  opacity: 0.8;
}
</style>
