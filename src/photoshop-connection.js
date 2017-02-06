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

'use strict'

import { PhotoshopClient } from './lib/PhotoshopClient'

class Photoshop {
    constructor() {
        //
    }
    
    createClient(options) {
		const photoshopClient = new PhotoshopClient(options)
		
		return new Promise((resolve, reject) => {
			photoshopClient.connectToPhotoshop()
				.then((photoshopClient) => {
					resolve(photoshopClient)
				})
				.catch((err) => {
					reject(err)
				})
		})
    }
}

export let photoshop = new Photoshop()
module.exports = new Photoshop()