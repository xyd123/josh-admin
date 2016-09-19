var fs = require('fs');
var path = require('path')
var config = require('../config')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var url = path.resolve(__dirname, '../src/pages')
var entryStats = [];

//** 同步筛选
var files = fs.readdirSync(url);
if(!files.length){
    return console.log('未读取到文件\n')
}
files.forEach(function(file){
    if(file[0] === '.'){
        return false
    }
    //** 同步筛选
    var stat =  fs.statSync(url + '/' + file);
    var exist =  fs.existsSync(url + '/' + file +'/' + 'main.js');

    if(stat.isDirectory() && exist){
        entryStats.push(file)
    }
})

exports.entryPlugin = function(){
    var entry ={}
    entryStats.forEach(function(file){
        var _file = config.base[file]
        if(!!_file && !!_file['entry']){
            entry[file] = path.posix.join(config.base[file]['entry'])
            return false
        }
        entry[file] = path.posix.join('./src/pages', file, 'main.js')
    })
   return entry;
}

exports.HtmlPlugin = function(){
    var outPutHtmlPlugin = []

    entryStats.forEach(function(file){

        var confPro = {
            filename: file + '.html',
            template: 'index.html',
            title:file,
            inject: true,
            minify: { //传递 html-minifier 选项给 minify 输出
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            chunks: ['vendor','manifest', file],
            chunksSortMode: 'dependency'
        }

        var confdev = {
            filename: file + '.html',
            template: 'index.html',
            inject: true,
            title:file,
            chunks: [file]
        }

        var conf = process.env.NODE_ENV === 'production'
            ? confPro
            : confdev


        if(!!config.base[file]){
            Object.assign(conf, config.base[file]['html']);
        }

        outPutHtmlPlugin.push(
            new HtmlWebpackPlugin(conf)
        )
    })
    return outPutHtmlPlugin;
}

