/*
 *
 *  Photoshop-Connection
 *  Node.js module for connecting to Adobe Photoshop Server.
 *  Author: Antonio Gomez (https://github.com/antonio-gomez)
 * 
 *
 *  @link https://github.com/antonio-gomez/photoshop-connection
 *  @version v1.1.0
 *  @license MIT
 *
 */

module.exports = {
	target: 'node',
    entry: `${__dirname}/src/photoshop-connection.js`,
    output: {
        path: `${__dirname}/dist`,
        libraryTarget: 'commonjs2',
        filename: 'photoshop-connection.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', query: { presets: ['es2015'] } }
        ]
    }
}