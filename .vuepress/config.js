module.exports = {
  title: 'MSRC User Guide',
  description: ' ',
  themeConfig:{
    nav: [
        { text: 'Accountability', link: '/accountability/' },
        { text: 'Terminology', link: '/terminology/' },
        { text: 'Non-accountability', link: '/nonaccountability' }
    ],
    sidebar: [
        {
          title: 'Accountability',
          collapsable: false,
          children: [
            '/accountability/accountabilityScores',
            '/accountability/accountabilityCategories'
          ]
        },
        {
          title: 'API Guide',
          collapsable: false,
          children: [
              '/guide/guide',
              '/guide/api'
          ]
        }
      ]
}
}
