module.exports = {
  title: 'MSRC User Guide',
  description: ' ',
  themeConfig:{
    displayAllHeaders: 'true',
    sidebarDepth: 2,
    nav: [
        { text: 'Accountability', link: '/accountability/' },
        { text: 'Terminology', link: '/terminology/' },
        { text: 'Non-accountability', link: '/nonaccountability' }
    ],
    sidebar: [
      {
        title: 'Accountability',
        children: [
          '/accountability/'
        ]
      },
      {
        title: 'The Report Card',
        children: [
          '/reportcard/accountabilitydata',
          '/reportcard/nonaccountability',
          '/reportcard/othermeasures',
          '/reportcard/teachers',
          '/reportcard/schoolclimate'
          //'/reportcard/assessment',
          //'/reportcard/teachers',
          //'/reportcard/naep',
          //'/reportcard/graduation',
          //'/reportcard/goals',
          //'/reportcard/englishlearners',
          //'/reportcard/ppe',
          //'/reportcard/improvement' 
        ]
      }
    ]
    //sidebar: 'auto',
    //[
    //    {
    //      title: 'Accountability',
    //      collapsable: false,
    //      children: [
    //        '/accountability/accountabilityScores',
    //        '/accountability/accountabilityCategories'
    //      ]
    //    },
    //    {
    //      title: 'Report Card Data',
    //      collapsable: false,
    //      children: [
    //          '/reportcard/teachers'
    //      ]
    //    }
    //  ]
}
}
