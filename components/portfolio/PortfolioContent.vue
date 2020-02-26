<template>
  <v-container
    grid-list-xl
  >
    <v-layout
      row
      wrap
      align-center
      justify-center
    >
      <v-flex
        v-for="(card, index) in cards"
        v-bind:key="index"
        xs10
        sm5
        md4
      >
        <portfolio-card
          v-bind:title="card.title"
          v-bind:description="card.description"
          v-bind:imageurl="card.imageurl"
          v-bind:link="card.link"
        >
        </portfolio-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PortfolioCard from './PortfolioCard.vue'

export default {
  name: 'PortfolioContent',
  components: {
    PortfolioCard
  },
  data () {
    return {
      cards: [
        { title: 'Portfolio site',
          imageurl: 'images/thissite.png',
          description: '2020/02\n当サイトです。\nNuxt.js',
          link: '',
        },
        { title: 'Security対策支援',
          imageurl: 'images/wc.png',
          description: '2018/08~2018/11\n脆弱性分析・WAF導入支援\nWP',
          link: '',
        },
        { title: 'Infra改善支援',
          imageurl: 'images/wc.png',
          description: '2018/08~2018/11\nコンテナ化、監視基盤の構築\nWP',
          link: '',
        },
        { title: 'PMO支援(自動車業界)',
          imageurl: 'images/car.jpg',
          description: '2018/08~2018/11\nセキュリティPMO・仕様策定担当\nWP',
          link: '',
        },
        { title: 'Cloud移行支援(素材業界)',
          imageurl: 'images/glass.jpg',
          description: '2018/08~2018/11\nオンプレ⇒Cloud環境移行担当\nWIN/SAP ERP6.0',
          link: '',
        },
        { title: 'Miningマシン販促支援',
          imageurl: 'images/miningtokyo.jpg',
          description: '2018/08~2018/11\nMiningマシン宣伝サイト開発担当\nWP',
          link: '',
        },
        { title: 'CMS開発支援(電力業界)',
          imageurl: 'images/denki2.jpg',
          description: '2017/05~2018/03\n運用保守/新規機能開発担当\nWIN/SAP ERP6.0',
          link: '',
        },
                { title: 'CMS開発支援(電力業界)',
          imageurl: 'images/denki1.png',
          description: '2017/05~2018/03\n運用保守/新規機能開発担当\nWIN/SAP ERP6.0',
          link: '',
        },
                { title: 'CMS開発支援(電力業界)',
          imageurl: 'images/este.jpeg',
          description: '2017/05~2018/03\n運用保守/新規機能開発担当\nWIN/SAP ERP6.0',
          link: '',
        }
      ]
    }
  }
}
</script>
