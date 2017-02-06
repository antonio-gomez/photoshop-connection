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

export class PhotoshopHelper {
	constructor(photoshop) {
		this._photoshop = photoshop
	}
	
	evaluateESString(params, str) {
		this._photoshop.sendCommand(str)
	}	
	
	evaluateESFile(params, filepath) {
		//
	}
}