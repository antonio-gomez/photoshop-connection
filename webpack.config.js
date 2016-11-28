module.exports = {
    entry: `${__dirname}/src/photoshop-connection.js`,
    output: {
        path: `${__dirname}/dist`,
        filename: 'photoshop-connection.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', query: { presets: ['es2015'] } }
        ]
    },
    // Ignoring libraries that are not intended for
    // in-browser usage: https://github.com/webpack/react-starter/issues/3
    node: {
        net: 'empty',
        fs: 'empty',
        crypto: 'empty'
    }
}