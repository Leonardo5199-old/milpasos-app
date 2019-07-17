module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/milpasosapp-spa' : '/',
    productionSourceMap: false,
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    },
    css: {
        extract: false
    }
}
