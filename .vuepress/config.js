module.exports = {
  title: 'MSRC',
  description: 'Welcome to the user guide.',
  lastUpdated: 'Last Updated',
  themeConfig:{
    displayAllHeaders: 'true',
    sidebarDepth: 2,
    nav: [
        { text: 'Accountability System', link: '/accountability/' },
        { text: 'Report Cards', link: '/terminology/' },
        { text: 'msrc.mdk12.org', link: 'https://msrc.mdek12.org' },
        { text: 'MDE', link: 'https://www.mdek12.org' },
    ],
    sidebar: [
      {
        title: 'Accountability',
        children: [
          '/accountability/',
          '/accountability/terminology'
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
        ]
      }
    ]
}
}
