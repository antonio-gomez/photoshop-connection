/*
 *
 *  Photoshop-Connection
 *  Node.js module for connecting to Adobe Photoshop Server.
 *  Author: Antonio Gomez (https://github.com/antonio-gomez)
 * 
 *
 *  @link https://github.com/antonio-gomez/photoshop-connection
 *  @version v1.0.0
 *  @license MIT
 *
 */

'use strict'

const photoshop = require('./vendor/Photoshop')

export class PhotoshopClient {
    constructor(options) {
        this.options = options
		this._photoshop = null
    }
	
	connectToPhotoshop() {
		this._photoshop = photoshop.createClient(this.options)
		
		return new Promise((resolve, reject) => {
			this._photoshop.once('connect', () => {
				console.log(`Connected to Photoshop on port ${this.options.port}`)
				resolve(this._photoshop)
			})
			
			this._photoshop.on('error', (err) => {
				reject(err)
			})
    	})
	}
}