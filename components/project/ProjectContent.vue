<template>
  <v-container grid-list-xl>
    <v-layout row wrap align-center justify-center>
      <v-flex v-for="(card, index) in cards" v-bind:key="index" xs10 sm5 md4>
        <project-card
          v-bind:title="card.title"
          v-bind:description="card.description"
          v-bind:imageurl="card.imageurl"
          v-bind:link="card.link"
        >
        </project-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import projectCard from './projectCard.vue'

export default {
  name: 'projectContent',
  components: {
    projectCard
  },
  data () {
    return {
      cards: [
        { title: 'PortfolioSite作成',
          imageurl: 'images/thissite.png',
          description: '2020/03\n[App開発] 自主制作・当サイト作成\nNuxt.jsを用いたポートフォリオサイトを構築、デプロイの自動化も実施',
          link: '',
        },
        { title: 'Security対策支援',
          imageurl: 'images/wc.png',
          description: '2018/08~2018/11\n[Sec対策] 脆弱性分析・WAF導入\nサイトの脆弱性分析・有害アクセスのブロックを実施',
          link: '',
        },
        { title: 'Infra改善支援',
          imageurl: 'images/wc.png',
          description: '2018/08~2018/11\n[Infra支援] Dockerize・監視基盤構築\nアプリケーションの自動デプロイ・監視基盤の構築を実施',
          link: '',
        },
        { title: 'PMO支援(自動車業界)',
          imageurl: 'images/car.jpg',
          description: '2018/08~2018/11\n[Cons] セキュリティPMO・仕様策定\nECU(車載部品)のSWアップデート機能実装へ向けたPMO・仕様策定実施',
          link: '',
        },
        { title: 'Cloud移行支援(素材業界)',
          imageurl: 'images/glass.jpg',
          description: '2018/08~2018/11\n[Infra支援] オンプレ-Cloud環境移行\n業務システムのオンプレ環境からAWSへの移行・構築支援を実施',
          link: '',
        },
        { title: 'Miningマシン販促支援',
          imageurl: 'images/miningtokyo.jpg',
          description: '2018/08~2018/11\n[App開発] 製品販促サイト開発\nWordPressを用いて、Miningマシンの販促サイトを作成',
          link: '',
        },
        { title: 'CMS開発支援2(電力業界)',
          imageurl: 'images/denki2.jpg',
          description: '2017/05~2018/03\n[App開発] 電力小売事業者CMS開発\n電力自由化に伴う、顧客契約情報の編集作業自動化実施',
          link: '',
        },
                { title: 'CMS開発支援1(電力業界)',
          imageurl: 'images/denki1.png',
          description: '2017/05~2018/03\n[App開発] 電力小売事業者CMS開発\n電力自由化に伴う、電気料金計算自動化システムの作成(オフショア開発)',
          link: '',
        },
                { title: 'リラクゼーションサイト開発',
          imageurl: 'images/este.jpeg',
          description: '2017/05~2018/03\n[App開発] UI変更・SEO対策\nRubyonRailsを用いてリラクゼーションサイトデザイン改修を実施、SEO対策も考慮しレイアウト変更',
          link: '',
        }
      ]
    }
  }
}
</script>
