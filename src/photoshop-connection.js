/*
 *
 *  Photoshop-Connection
 *  Node.js module for connecting to Adobe Photoshop Server.
 *  Author: Antonio Gomez (https://github.com/antonio-gomez)
 * 
 *
 *  @link https://github.com/antonio-gomez/photoshop-connection
 *  @version v0.0.0
 *  @license MIT
 *
 */

'use strict'

import { PhotoshopClient } from './lib/PhotoshopClient'

// Factory class
class Photoshop {
    constructor() {
        //
    }
    
    createClient(options) {
        return new PhotoshopClient(options)
    }
}

export let photoshop = new Photoshop()
module.exports = new Photoshop()