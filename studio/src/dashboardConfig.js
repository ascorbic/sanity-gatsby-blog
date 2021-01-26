export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601006f7cf7f8718eb91c8be',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-mt87usp2',
                  apiId: 'b8a5992a-01fe-4acb-8a50-d422598645db'
                },
                {
                  buildHookId: '601006f7bc544510e332887a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-tyrg2o2f',
                  apiId: '419a8f6f-4bac-4ed6-a2b6-3df278ca721f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ascorbic/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-tyrg2o2f.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
