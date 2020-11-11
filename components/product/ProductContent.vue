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
        { title: '#9 PortfolioSite作成',
          imageurl: 'https://player.vimeo.com/video/448971918',
          description: '期間:2020/02~2020/03\n[App開発] 自主制作・当サイト作成\nNuxt.jsを用いたポートフォリオサイトを構築、デプロイの自動化実施',
          link: '',
          subdescription: '<h4>自主開発によるPortfolioSite作成</h4><h4>【使用した技術スタック】</h4><p style="margin-bottom: 2px; font-size: 10px;">Nuxt.js/Vue/Netlify</p><h4>【概要】</h4><p style="margin-bottom: 2px; font-size: 10px;">これ迄関わってきた複数のプロジェクトの棚卸し、Nuxtのキャッチアップもかねて作成</p><p style="margin-bottom: 2px; font-size: 10px;">修士在学中より述べ8プロジェクトに参画しアプリ開発~コンサルティング案件を経験</p>'
        },
        { title: '#8 Infra改善支援',
          imageurl: 'images/wc.png',
          description: '期間:2019/10~2020/05\n[Infra業務] CICD自動化・Dockerize・監視基盤構築\nアプリケーションの自動デプロイ・監視基盤の構築を実施',
          link: '',
          subdescription: 'Coming Soon'
        },
        { title: '#7 Security対策支援',
          imageurl: 'images/wc.png',
          description: '期間:2019/05~2019/12\n[Security業務] 脆弱性分析・WAF導入\nサイトの脆弱性分析・有害アクセスのブロックを実施',
          link: '',
          subdescription: '<h4>美容業界向け人材紹介事業者様、監視基盤構築・脆弱性分析・セキュリティ対策支援</h4><h4>【使用した技術スタック】</h4><p style="margin-bottom: 2px; font-size: 10px;">アプリ/インフラ関連(Ruby/JavaScript/Python/Shell/PowerShell/Docker)</p><p style="margin-bottom: 2px; font-size: 10px;">AWS Managed Service関連(EC2/ECS/ECR/VPC/ELB/AWSWAF/S3/SG/Glue/IAM/Lambda/ AWSWAF)</p><p style="margin-bottom: 2px; font-size: 10px;">セキュリティ関連ツール (WAFCharm/VirusTotal/OWASP ZAP)</p><h4>【職務概要】</h4><p style="margin-bottom: 2px; font-size: 10px;">Webシステムに対しサーバ/プロセス稼働状況可視化の為、監視基盤を構築した。セキュリ</p><p style="margin-bottom: 2px; font-size: 10px;">ティ面では脆弱性分析を行い、分析結果から施策を実施しセキュリティ対策を実施した。</p><h4>【実績・業務成果】</h4><h5>■成果</h5><p style="margin-bottom: 2px; font-size: 10px;">一部機能を除いてOSSツールを用いてのプロジェクト推進となったため、コスト面で</p><p style="margin-bottom: 2px; font-size: 10px;">安価かつ効果的な施策を実施出来た。</p><h5>■プロジェクトを通しての課題</h5><p style="margin-bottom: 2px; font-size: 10px;">インフラ/セキュリティ改善施策を検討する前に、現状のシステム構成では収集できる分析</p><p style="margin-bottom: 2px; font-size: 10px;">データが不十分であった点。</p><h5>■解決方法</h5><p style="margin-bottom: 2px; font-size: 10px;">OSSを活用しシステムから様々な分析情報を取得出来る基盤を構築し、施策(セキュリティ)を検討した。</p><h5>■解決方法を採用した結果</h5><p style="margin-bottom: 2px; font-size: 10px;">サービスダウンタイムの短縮化によるユーザビリティの向上、インスタンス最適化に</p><p style="margin-bottom: 2px; font-size: 10px;">よる運用コストの削減、サービスへの攻撃遮断を実現した。(4300件⇨10件)</p>'
        },
        { title: '#6 PMO支援(自動車業界)',
          imageurl: 'images/car.jpeg',
          description: '期間:2019/05~2019/12\n[Cons業務] セキュリティPMO・仕様策定\nECU(車載部品)のSWアップデート機能実装へ向けたPMO・仕様策定実施',
          link: '',
          subdescription: '<h4>国内大手自動車会社様、コネクティッドカー新サービス仕様策定/PMO支援</h4><h4>【使用した技術スタック】</h4><p style="margin-bottom: 2px; font-size: 10px;">FOTA/JIRA/Office関連</p><h4>【職務概要】</h4><p style="margin-bottom: 2px; font-size: 10px;">自動車に搭載された電子制御ユニットに対する、ファームウェア・データの無線更新機能</p><p style="margin-bottom: 2px; font-size: 10px;">(FOTA: Firmware Over The Air)の機能実装における要件定義の実施、テスト計画設計、</p><p style="margin-bottom: 2px; font-size: 10px;">プロジェクト進捗管理、アライアンス企業との討議資料作成を担当した。</p><h4>【実績・業務成果】</h4><h5>■成果</h5><p style="margin-bottom: 2px; font-size: 10px;">アライアンス企業複数社を巻き込みFOTA機能の仕様策定・合意を実施。また開発・</p><p style="margin-bottom: 2px; font-size: 10px;">テストフローの定義を行い、プロジェクト進捗をリカバリした。</p><h5>■プロジェクトを通しての課題</h5><p style="margin-bottom: 2px; font-size: 10px;">仕様が文書化されておらず状況、開発スケジュールが停滞をしていた点。</p><h5>■解決方法</h5><p style="margin-bottom: 2px; font-size: 10px;">仕様を把握しているクライアント・アライアンス企業の関係者を巻き込み仮説を立て、</p><p style="margin-bottom: 2px; font-size: 10px;">現状の問題と課題のヒアリングを実施し具体的な機能要件までを抽出した。</p><h5>■解決方法を採用した結果</h5><p style="margin-bottom: 2px; font-size: 10px;">トレーサビリティの仕組みのひとつとして、仕様をドキュメントとして書き起こした</p><p style="margin-bottom: 2px; font-size: 10px;">結果、関係者と合意形成がスムーズとなり、次のフェーズへスケジュールを予定通り</p><p style="margin-bottom: 2px; font-size: 10px;">に進める事が出来た。</p>'
        },
        { title: '#5 Cloud移行支援(素材業界)',
          imageurl: 'images/glass.jpg',
          description: '期間:2018/05~2019/4\n[Infra業務] オンプレ-Cloud環境移行\n業務システムのオンプレ環境からAWSへの移行・構築支援を実施',
          link: '',
          subdescription: '<h4>国内大手素材メーカ様、全業務システム基盤移行支援</h4><h4>【使用した技術スタック】</h4><p style="margin-bottom: 2px; font-size: 10px;">WinServer2016/EC2/SG/IAM/SQS/SAP ERP6.0/SAP BW7.5/Zabbix/JP1/HULFT</p><h4>【職務概要】</h4><p style="margin-bottom: 2px; font-size: 10px;">AWS環境のサーバ/ネットワーク環境構築、SAPアプリケーションのバージョ</p><p style="margin-bottom: 2px; font-size: 10px;">ンアップから運用作業の自動化をインフラメンバとして実施した。</p><h4>【実績・業務成果】</h4><h5>■成果</h5><p style="margin-bottom: 2px; font-size: 10px;">オンプレミス環境からAWSへの移行によって運用コスト削減。SAPのアップ</p><p style="margin-bottom: 2px; font-size: 10px;">グレードと合わせて、処理性能の向上を実現した。</p><h5>■プロジェクトを通しての課題</h5><p style="margin-bottom: 2px; font-size: 10px;">AWSへの移行に伴い、ジョブ・ミドルウェアとの連携部分が想定していた</p><p style="margin-bottom: 2px; font-size: 10px;">以上に改修範囲が広く、一時的に運用作業が増大し、プロジェクトコストが増大した点。</p><h5>■解決方法</h5><p style="margin-bottom: 2px; font-size: 10px;">PowerShellスクリプトを用いて運用作業を自動化した。また、オフショア</p><p style="margin-bottom: 2px; font-size: 10px;">開発メンバを育成し、定常作業を移管した。</p><h5>■解決方法を採用した結果</h5><p style="margin-bottom: 2px; font-size: 10px;">自動化作業によりシステム基盤移行後の運用工数を今までより、月50H程</p><p style="margin-bottom: 2px; font-size: 10px;">削減した。また作業単価の低いオフショアメンバへの業務移管により、安</p><p style="margin-bottom: 2px; font-size: 10px;">価なコストで定常業務のPDCAを回せるように実現した。</p>'
        },
        { title: '#4 Miningマシン販促支援',
          imageurl: 'images/miningtokyo.jpg',
          description: '期間:2018/08~2018/11\n[App開発] 製品販促サイト開発\nWordPressを用いて、Miningマシンの販促サイトを作成',
          link: '',
          subdescription: 'Coming Soon'
        },
        { title: '#3 CMS開発支援2(電力業界)',
          imageurl: 'images/jx.jpg',
          description: '期間:2017/05~2018/03\n[App開発] 電力小売事業者CMS開発\n電力自由化に伴う、顧客契約情報の編集作業自動化実施',
          link: '',
          subdescription: '<h4>国内大手電力会社様、小売り事業者向け顧客管理システム開発支援</h4><h4>【使用した技術スタック】</h4><p style="margin-bottom: 2px; font-size: 10px;">WinServer2012/SAP ERP6.0/JP1/HULFT/PowerShell/Asteria</p><h4>【職務概要】</h4><p style="margin-bottom: 2px; font-size: 10px;">システム運用・保守業務担当の後新規機能開発へ、顧客契約情報の編集作業</p><p style="margin-bottom: 2px; font-size: 10px;">の自動化案件を担当。要件定義、技術調査、影響分析並びに開発を実施した。</p><h4>【実績・業務成果】</h4><h5>■成果</h5><p style="margin-bottom: 2px; font-size: 10px;">手作業による顧客情報修正業務を自動化したことにより、</p><p style="margin-bottom: 2px; font-size: 10px;">クライアントサイドの運用工数を削減</p><h5>■プロジェクトを通しての課題</h5><p style="margin-bottom: 2px; font-size: 10px;">外部連携システム（電力広域機関）の仕様が短期間でアップデートされる</p><p style="margin-bottom: 2px; font-size: 10px;">為、追加改修のサイクルが短く開発工数が大きかった点。</p><h5>■解決方法</h5><p style="margin-bottom: 2px; font-size: 10px;">改修が最小減で抑えられるように、モジュール化をした上での実装。</p><p style="margin-bottom: 2px; font-size: 10px;">テストの自動化を行い、繰り返し発生するテスト作業の工数を削減した。</p><h5>■解決方法を採用した結果</h5>\<p style="margin-bottom: 2px; font-size: 10px;">仕様変更による改修工数、障害発生時の調査工数が削減され、</p><p style="margin-bottom: 2px; font-size: 10px;">クイックな開発~デプロイの実現を行うことが出来、クライアントの運用工数削減に</p><p style="margin-bottom: 2px; font-size: 10px;">直結することが出来た。</p>'
        },
        { title: '#2 CMS開発支援1(電力業界)',
          imageurl: 'images/power.jpg',
          description: '期間:2016/05~2016/10\n[App開発] 電力小売事業者CMS開発\n電力自由化に伴う、電気料金計算自動化システムの作成(オフショア開発)',
          link: '',
          subdescription: 'Coming Soon'
        },
        { title: '#1 リラクゼーションサイト開発',
          imageurl: 'images/este.jpeg',
          description: '期間:2016/01~2016/04\n[App開発] UI変更・SEO対策\nRubyonRailsを用いてリラクゼーションサイトデザイン改修を実施、SEO対策も考慮しレイアウト変更',
          link: '',
          subdescription: 'Coming Soon'
        }
      ]
    }
  }
}
</script>
