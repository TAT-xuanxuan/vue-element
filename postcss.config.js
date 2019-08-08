// const HtmlWebpackPlugin = require('postcss-scss');

module.exports = {
    parser: 'postcss-scss',	
	plugins:[
  		require("autoprefixer")
	]
}