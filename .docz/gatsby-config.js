const { mergeWith } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Advent Of Code',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: 'C:\\misc\\src\\throwaway\\temp\\advent-of-code\\.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Advent Of Code',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\misc\\src\\throwaway\\temp\\advent-of-code',
          templates:
            'C:\\misc\\src\\throwaway\\temp\\advent-of-code\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\misc\\src\\throwaway\\temp\\advent-of-code\\.docz',
          cache:
            'C:\\misc\\src\\throwaway\\temp\\advent-of-code\\.docz\\.cache',
          app: 'C:\\misc\\src\\throwaway\\temp\\advent-of-code\\.docz\\app',
          appPackageJson:
            'C:\\misc\\src\\throwaway\\temp\\advent-of-code\\package.json',
          gatsbyConfig:
            'C:\\misc\\src\\throwaway\\temp\\advent-of-code\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\misc\\src\\throwaway\\temp\\advent-of-code\\gatsby-browser.js',
          gatsbyNode:
            'C:\\misc\\src\\throwaway\\temp\\advent-of-code\\gatsby-node.js',
          gatsbySSR:
            'C:\\misc\\src\\throwaway\\temp\\advent-of-code\\gatsby-ssr.js',
          importsJs:
            'C:\\misc\\src\\throwaway\\temp\\advent-of-code\\.docz\\app\\imports.js',
          rootJs:
            'C:\\misc\\src\\throwaway\\temp\\advent-of-code\\.docz\\app\\root.jsx',
          indexJs:
            'C:\\misc\\src\\throwaway\\temp\\advent-of-code\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\misc\\src\\throwaway\\temp\\advent-of-code\\.docz\\app\\index.html',
          db:
            'C:\\misc\\src\\throwaway\\temp\\advent-of-code\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
