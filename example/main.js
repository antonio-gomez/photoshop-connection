/*
 *
 *  Photoshop-Connection Example
 *  Node.js module for connecting to Adobe Photoshop Server.
 *  Author: Antonio Gomez (https://github.com/antonio-gomez)
 * 
 *
 *  @link https://github.com/antonio-gomez/photoshop-connection
 *  @version v1.1.0
 *  @license MIT
 *
 */

'use strict'

const photoshopConnection = require('../dist/photoshop-connection')

let options = {
    hostname: '127.0.0.1',
    password: 'password',
    port: 49494
}

photoshopConnection.createClient(options)
	.then((photoshopClient) => {
		return photoshopClient.evaluateESString(``, `alert("Hello from evaluate JSX!")`)
	})
	.catch((err) => {
		console.log(`Connection Error: ${err}`)
	})