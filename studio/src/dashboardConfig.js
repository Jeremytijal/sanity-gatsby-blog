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
                  buildHookId: '5eac31e5fd1c5c7d84188274',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-4au4m7ws',
                  apiId: '88567dbf-9742-45c8-af83-10f3e3f24471'
                },
                {
                  buildHookId: '5eac31e5f75dc430fe75000a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-b8pm7onh',
                  apiId: 'c4c807e4-65e4-43ac-abb5-f24b1f855a8e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jeremytijal/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-b8pm7onh.netlify.app', category: 'apps' }
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
