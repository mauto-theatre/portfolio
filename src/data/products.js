// Product(演劇)works — order here = prev/nextの循環順
// listed:false の作品は詳細ページは生成するが、一覧グリッドにはまだ出さない
export const products = [
  {
    slug: 'product-work1',
    docTitle: 'yagi no ayumi',
    breadcrumbTitle: 'ヤギの歩みに戻らない。',
    cardTitleHtml: '広報ビジュアル<br>『ヤギの歩みに戻らない。』',
    cardCover: 'product1.jpg',
    cardAlt: '作品の説明',
    listed: true,
    year: '2025年',
    descHtml: '内弁慶の立往生の３回めの本公演<br>2025年5月2日(金)〜4日(日)',
    heroImage: { src: 'product1.jpg', alt: '作品タイトル' },
    sliders: [
      {
        heading: '広報デザイン-フライヤー',
        images: [
          { src: 'theatre1-design5.jpg', alt: '広報デザイン5' },
          { src: 'theatre1-design6.jpg', alt: '広報デザイン6' },
        ],
      },
      {
        heading: '広報デザイン-役者紹介',
        images: [
          { src: 'theatre1-design1.jpg', alt: '広報デザイン1' },
          { src: 'theatre1-design2.jpg', alt: '広報デザイン2' },
          { src: 'theatre1-design3.jpg', alt: '広報デザイン3' },
          { src: 'theatre1-design4.jpg', alt: '広報デザイン4' },
        ],
      },
      {
        heading: '物販デザイン-上演台本',
        images: [
          { src: 'theatre1-design7.jpg', alt: '広報デザイン7' },
          { src: 'theatre1-design8.jpg', alt: '広報デザイン8' },
        ],
      },
    ],
    infoRows: [
      { label: '会場', value: '水性(suisei)' },
      { label: '出演', value: '舛舘奏楽 / 高井水 / 梅田絹子(劇団花束とマフラー) / 小椙優真(劇団透視図)' },
      {
        label: 'スタッフ',
        value:
          '作・演出 : 石垣統万<br>演出補佐 : 櫻井喬仁' +
          '<br><br>舞台 : 今野偉吹(人畜無蓋)' +
          '<br>音響 : 譜久島みずほ(劇団三日月座・劇団たつとり) / 桜木カコ' +
          '<br>照明 : 今村聡志 / 桜木カコ' +
          '<br>舞台監督 : 桜木カコ' +
          '<br>舞台監督補佐 : 神崎翔琥' +
          '<br><br>広報 : 今野偉吹(人畜無蓋)' +
          '<br>制作 : 平野晴哉' +
          '<br><br>協賛 : 株式会社セカツク',
      },
    ],
  },
  {
    slug: 'product-work2',
    docTitle: 'basho to tunagaru',
    breadcrumbTitle: '場所 と つながる',
    cardTitleHtml: '制作 <br>「場所 と つながる」',
    cardCover: 'product2.jpg',
    cardAlt: '作品の説明',
    listed: true,
    year: '2025年',
    descHtml: '横浜国立大学 卒業制作<br>2026年1月13日(月)〜15日(木)',
    heroImage: { src: 'product2.jpg', alt: '作品タイトル' },
    sliders: [
      {
        heading: '制作',
        images: [
          { src: 'product2-1.jpg', alt: '制作1' },
          { src: 'product2-2.jpg', alt: '制作2' },
          { src: 'product2-3.jpg', alt: '制作3' },
          { src: 'product2-4.jpg', alt: '制作4' },
          { src: 'product2-5.jpg', alt: '制作5' },
          { src: 'product2-6.jpg', alt: '制作6' },
          { src: 'product2-7.jpg', alt: '制作7' },
          { src: 'product2-8.jpg', alt: '制作8' },
          { src: 'product2-9.jpg', alt: '制作9' },
        ],
      },
      {
        heading: '完成後写真',
        inHero: true,
        images: [
          { src: 'product2-10.jpg', alt: '完成1' },
          { src: 'product2-11.jpg', alt: '完成2' },
          { src: 'product2-12.jpg', alt: '完成3' },
          { src: 'product2-13.jpg', alt: '完成4' },
          { src: 'product2-14.jpg', alt: '完成5' },
          { src: 'product2-15.jpg', alt: '完成6' },
          { src: 'product2-16.jpg', alt: '完成7' },
        ],
      },
    ],
    infoRows: [{ label: '会場', value: '横浜国立大学 都市科学部講義棟１階' }],
  },
  {
    slug: 'product-work3',
    docTitle: 'adballoon',
    breadcrumbTitle: 'アドバルーンよつれてって',
    cardTitleHtml: 'トレーラー<br>『アドバルーンよつれてって』',
    cardCover: 'theatre3-photo1.jpg',
    cardAlt: '作品の説明',
    listed: false,
    year: '2026年',
    descHtml: '内弁慶の立往生のきっと４回めの本公演<br>2026年2月27日(金)〜3月1日(日)',
    heroImage: null,
    sliders: [
      {
        heading: '本番写真',
        images: [
          { src: 'theatre3-photo1.jpg', alt: '本番写真1' },
          { src: 'theatre3-photo2.jpg', alt: '本番写真2' },
          { src: 'theatre3-photo3.jpg', alt: '本番写真3' },
          { src: 'theatre3-photo4.jpg', alt: '本番写真4' },
          { src: 'theatre3-photo5.jpg', alt: '本番写真5' },
          { src: 'theatre3-photo6.jpg', alt: '本番写真6' },
          { src: 'theatre3-photo7.jpg', alt: '本番写真7' },
          { src: 'theatre3-photo8.jpg', alt: '本番写真8' },
          { src: 'theatre3-photo9.jpg', alt: '本番写真9' },
        ],
      },
      {
        heading: '広報デザイン',
        images: [
          { src: 'theatre3-design1.jpg', alt: '広報デザイン1' },
          { src: 'theatre3-design2.jpg', alt: '広報デザイン2' },
          { src: 'theatre3-design3.jpg', alt: '広報デザイン3' },
          { src: 'theatre3-design4.jpg', alt: '広報デザイン4' },
          { src: 'theatre3-design5.jpg', alt: '広報デザイン5' },
          { src: 'theatre3-design6.jpg', alt: '広報デザイン6' },
          { src: 'theatre3-design7.jpg', alt: '広報デザイン7' },
          { src: 'theatre3-design8.jpg', alt: '広報デザイン8' },
        ],
      },
    ],
    infoRows: [
      { label: '会場', value: 'カフェムリウイ' },
      { label: '出演', value: 'たくま / 松晃生(劇団うめおにぎり) / 兼崎修太郎 / 石垣統万 / 深月リト' },
      {
        label: 'スタッフ',
        value:
          '石垣統万' +
          '<br>桜木カコ' +
          '<br>きかぜ' +
          '<br>(以上、内弁慶の立往生)' +
          '<br><br>阿曽進之介(劇団透視図)' +
          '<br>平野晴哉(劇団透視図)' +
          '<br><br>協賛：株式会社セカツク',
      },
    ],
  },
];
