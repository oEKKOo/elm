const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: false,
  lintOnSave: false,
  css:{
    loaderOptions:{

      postcss:{

        postcssOptions:{

          plugins:[

            require('postcss-pxtorem')({rootValue:37.5,selectorBlackList:["vant","mu"],propList:['*']}),
        
          ]

      },

    },

    },

  }
})
