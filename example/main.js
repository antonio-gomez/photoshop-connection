'use strict'

const photoshop = require('/Users/antoniogomez/Development/antonio-gomez/photoshop-connection/dist/photoshop-connection.js')

let options = {
    hostname: '127.0.0.1',
    password: 'password',
    port: 49494
}

photoshop.createClient(options)