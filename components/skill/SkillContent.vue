<template>
  <v-container
    grid-list-xl
  >
    <v-layout
      row
      wrap
      align-start
      justify-start
    >
      <v-flex
        v-for="(card, index) in cards"
        v-bind:key="index"
        xs12
        sm6
        md4
      >
        <skill-card
          v-bind:skill-title="card.title"
          v-bind:skill-icons="card.skillIcons"
          v-bind:skill-description="card.description"
          v-bind:skill-infomation="card.skillInfomation"
        >
        </skill-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SkillCard from './SkillCard.vue'
export default {
  name: 'SkillContent',
  components: {
    SkillCard
  },
  data () {
    return {
      a: '10',
      cards: [
        { title: 'コーディング',
          skillIcons: [
            {name: 'HTML5', class: 'fa-html5'},
            {name: 'CSS3', class: 'fa-css3'},
          ],
          skillInfomation: [
            {name: 'HTML5', year: '8 months'},
            {name: 'CSS3', year: '8 months'},
            {name: 'SASS', year: '4 months'},
            {name: 'Bulma', year: '2 months'},
            {name: 'Bootstrap', year: '4 months'}
          ]
        },
        {title: 'フロントエンド',
          skillIcons: [
            {name: 'JavaScript', class: 'fa-js'},
            {name: 'Vue.js', class: 'fa-vuejs'}
          ],
          skillInfomation: [
            {name: 'JavaScript', year: '5 months'},
            {name: 'jQuery', year: '5 months'},
            {name: 'Vue.js', year: '3 months'},
            {name: 'Nuxt.js', year: '2 months'}
          ]
        },
        { title: 'バックエンド',
          skillIcons: [
            {name: 'PHP', class: 'fa-php'},
            {name: 'Laravel', class: 'fa-laravel'}
          ],
          skillInfomation: [
            {name: 'PHP', year: '5 months'},
            {name: 'Laravel', year: '4 months'},
            {name: 'MySQL', year: '5 months'},
          ]
        },
        { title: 'Others',
          skillIcons: [
            {name: 'Python', class: 'fa-python'},
            {name: 'Github', class: 'fa-github'}
          ],
          skillInfomation: [
            {name: 'Python', year: '1 months'},
            {name: 'Github', year: '5 months'},
            {name: 'WordPress', year: '1 months'},
          ]
        },
      ]
    }
  },
}
</script>
