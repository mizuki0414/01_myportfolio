<template>
  <v-container grid-list-xl>
    <v-layout row wrap align-center justify-center>
      <v-flex v-for="(card, index) in cards" v-bind:key="index" xs10 sm5 md4>
        <product-card
          v-bind:title="card.title"
          v-bind:description="card.description"
          v-bind:imageurl="card.imageurl"
          v-bind:link="card.link"
          v-bind:subdescription="card.subdescription"
        >
        </product-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import productCard from './ProductCard.vue'

export default {
  name: 'productContent',
  components: {
    productCard
  },
  data () {
    return {
      cards: [
        { title: 'ChiScene',
          imageurl: 'https://player.vimeo.com/video/477569442',
          description: '[#WebApp]\nインタラクティブなオンデマンド講義を可能にする配信プラットフォーム',
          link: '',
          subdescription: '<h4>自主開発によるPortfolioSite作成</h4><h4>【使用した技術スタック】</h4><p style="margin-bottom: 2px; font-size: 10px;">Nuxt.js/Vue/Netlify</p><h4>【概要】</h4><p style="margin-bottom: 2px; font-size: 10px;">これ迄関わってきた複数のプロジェクトの棚卸し、Nuxtのキャッチアップもかねて作成</p><p style="margin-bottom: 2px; font-size: 10px;">修士在学中より述べ8プロジェクトに参画しアプリ開発~コンサルティング案件を経験</p>'
        },
        { title: '世界からもしイデアが無くなったら',
          imageurl: 'https://player.vimeo.com/video/478087973',
          description: '[#MediaArt]\n落合陽一氏講義メディアアート作品 鹿の剥製を用いたインスタレーションアート',
          link: '',
          subdescription: 'Coming Soon'
        },
        { title: '肩の上の秘書',
          imageurl: 'https://player.vimeo.com/video/478094441',
          description: '[#VUIApp] \n星新一の小説「肩の上の秘書」に登場する人工知能を持ったオウム',
          link: '',
          subdescription: '<h4>美容業界向け人材紹介事業者様、監視基盤構築・脆弱性分析・セキュリティ対策支援</h4><h4>【使用した技術スタック】</h4><p style="margin-bottom: 2px; font-size: 10px;">アプリ/インフラ関連(Ruby/JavaScript/Python/Shell/PowerShell/Docker)</p><p style="margin-bottom: 2px; font-size: 10px;">AWS Managed Service関連(EC2/ECS/ECR/VPC/ELB/AWSWAF/S3/SG/Glue/IAM/Lambda/ AWSWAF)</p><p style="margin-bottom: 2px; font-size: 10px;">セキュリティ関連ツール (WAFCharm/VirusTotal/OWASP ZAP)</p><h4>【職務概要】</h4><p style="margin-bottom: 2px; font-size: 10px;">Webシステムに対しサーバ/プロセス稼働状況可視化の為、監視基盤を構築した。セキュリ</p><p style="margin-bottom: 2px; font-size: 10px;">ティ面では脆弱性分析を行い、分析結果から施策を実施しセキュリティ対策を実施した。</p><h4>【実績・業務成果】</h4><h5>■成果</h5><p style="margin-bottom: 2px; font-size: 10px;">一部機能を除いてOSSツールを用いてのプロジェクト推進となったため、コスト面で</p><p style="margin-bottom: 2px; font-size: 10px;">安価かつ効果的な施策を実施出来た。</p><h5>■プロジェクトを通しての課題</h5><p style="margin-bottom: 2px; font-size: 10px;">インフラ/セキュリティ改善施策を検討する前に、現状のシステム構成では収集できる分析</p><p style="margin-bottom: 2px; font-size: 10px;">データが不十分であった点。</p><h5>■解決方法</h5><p style="margin-bottom: 2px; font-size: 10px;">OSSを活用しシステムから様々な分析情報を取得出来る基盤を構築し、施策(セキュリティ)を検討した。</p><h5>■解決方法を採用した結果</h5><p style="margin-bottom: 2px; font-size: 10px;">サービスダウンタイムの短縮化によるユーザビリティの向上、インスタンス最適化に</p><p style="margin-bottom: 2px; font-size: 10px;">よる運用コストの削減、サービスへの攻撃遮断を実現した。(4300件⇨10件)</p>'
        },
        { title: 'FOTON',
          imageurl: 'https://player.vimeo.com/video/448971918',
          description: '[#WebApp] \n2030年のコネクティッドカー新サービス、自動運転車両管理プラットフォームの姿',
          link: '',
          subdescription: '<h4>国内大手自動車会社様、コネクティッドカー新サービス仕様策定/PMO支援</h4><h4>【使用した技術スタック】</h4><p style="margin-bottom: 2px; font-size: 10px;">FOTA/JIRA/Office関連</p><h4>【職務概要】</h4><p style="margin-bottom: 2px; font-size: 10px;">自動車に搭載された電子制御ユニットに対する、ファームウェア・データの無線更新機能</p><p style="margin-bottom: 2px; font-size: 10px;">(FOTA: Firmware Over The Air)の機能実装における要件定義の実施、テスト計画設計、</p><p style="margin-bottom: 2px; font-size: 10px;">プロジェクト進捗管理、アライアンス企業との討議資料作成を担当した。</p><h4>【実績・業務成果】</h4><h5>■成果</h5><p style="margin-bottom: 2px; font-size: 10px;">アライアンス企業複数社を巻き込みFOTA機能の仕様策定・合意を実施。また開発・</p><p style="margin-bottom: 2px; font-size: 10px;">テストフローの定義を行い、プロジェクト進捗をリカバリした。</p><h5>■プロジェクトを通しての課題</h5><p style="margin-bottom: 2px; font-size: 10px;">仕様が文書化されておらず状況、開発スケジュールが停滞をしていた点。</p><h5>■解決方法</h5><p style="margin-bottom: 2px; font-size: 10px;">仕様を把握しているクライアント・アライアンス企業の関係者を巻き込み仮説を立て、</p><p style="margin-bottom: 2px; font-size: 10px;">現状の問題と課題のヒアリングを実施し具体的な機能要件までを抽出した。</p><h5>■解決方法を採用した結果</h5><p style="margin-bottom: 2px; font-size: 10px;">トレーサビリティの仕組みのひとつとして、仕様をドキュメントとして書き起こした</p><p style="margin-bottom: 2px; font-size: 10px;">結果、関係者と合意形成がスムーズとなり、次のフェーズへスケジュールを予定通り</p><p style="margin-bottom: 2px; font-size: 10px;">に進める事が出来た。</p>'
        },
        { title: 'EisenhowerTaskMap',
          imageurl: 'https://player.vimeo.com/video/478104326',
          description: '[#WebApp] \n緊急度×重要度からタスクの優先順位を自動算出してくれるTask管理ツール',
          link: '',
          subdescription: '<h4>国内大手素材メーカ様、全業務システム基盤移行支援</h4><h4>【使用した技術スタック】</h4><p style="margin-bottom: 2px; font-size: 10px;">WinServer2016/EC2/SG/IAM/SQS/SAP ERP6.0/SAP BW7.5/Zabbix/JP1/HULFT</p><h4>【職務概要】</h4><p style="margin-bottom: 2px; font-size: 10px;">AWS環境のサーバ/ネットワーク環境構築、SAPアプリケーションのバージョ</p><p style="margin-bottom: 2px; font-size: 10px;">ンアップから運用作業の自動化をインフラメンバとして実施した。</p><h4>【実績・業務成果】</h4><h5>■成果</h5><p style="margin-bottom: 2px; font-size: 10px;">オンプレミス環境からAWSへの移行によって運用コスト削減。SAPのアップ</p><p style="margin-bottom: 2px; font-size: 10px;">グレードと合わせて、処理性能の向上を実現した。</p><h5>■プロジェクトを通しての課題</h5><p style="margin-bottom: 2px; font-size: 10px;">AWSへの移行に伴い、ジョブ・ミドルウェアとの連携部分が想定していた</p><p style="margin-bottom: 2px; font-size: 10px;">以上に改修範囲が広く、一時的に運用作業が増大し、プロジェクトコストが増大した点。</p><h5>■解決方法</h5><p style="margin-bottom: 2px; font-size: 10px;">PowerShellスクリプトを用いて運用作業を自動化した。また、オフショア</p><p style="margin-bottom: 2px; font-size: 10px;">開発メンバを育成し、定常作業を移管した。</p><h5>■解決方法を採用した結果</h5><p style="margin-bottom: 2px; font-size: 10px;">自動化作業によりシステム基盤移行後の運用工数を今までより、月50H程</p><p style="margin-bottom: 2px; font-size: 10px;">削減した。また作業単価の低いオフショアメンバへの業務移管により、安</p><p style="margin-bottom: 2px; font-size: 10px;">価なコストで定常業務のPDCAを回せるように実現した。</p>'
        },
        { title: 'AND MORE...',
          imageurl: 'https://player.vimeo.com/video/85683143',
          description: 'twitter:@MizukiOnogawa https://twitter.com/MizukiOnogawa\n\n',
          link: '',
          subdescription: ''
        },
      ]
    }
  }
}
</script>
