const path = require('path');

module.exports = {
    entry:{
        'application':'./source/es2015/application'
    },
    output:{
        path:path.join(__dirname, '/distribution/javascript'),
        filename:'[name].js'
    },
    module: {
        rules: [
          {
            test:/¥.js/,
            exclude:/node_modules/,
            use: 'babel'
          },
        ]
      },
      resolve: {
        extensions: ['.js'],
      },
    mode:'development',
};