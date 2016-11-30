## Photoshop-Connection

[![npm-image](https://img.shields.io/badge/npm-v0.0.0-ff69b4.svg)](https://www.npmjs.com/package/photoshop-connection)
![version-image](https://img.shields.io/badge/license-MIT-ff69b4.svg)


#### Install
--------

```
npm install photoshop-connection --save
```


#### Description
-----------

Node.js module for connecting to Adobe Photoshop Server.


#### Usage
--------

```
const photoshopConnection = require('photoshop-connection')

let options = {
    hostname: '127.0.0.1',
    password: 'password',
    port: 49494
}

photoshopConnection.createClient(options)
	.then((photoshopClient) => {
		photoshopClient.sendCommand(`alert('Hello from ExtendScript!');`)
	})
	.catch((err) => {
		console.log(`Connection Error: ${err}`)
	})
```


#### Scope
--------

Tested in Adobe Photoshop CC2014 (v15.x), Adobe Photoshop CC2015 (v16.x), Adobe Photoshop CC2015.5 (v17.x), Adobe Photoshop CC2017 (v18.x)


#### Changelog
--------

**0.0.0 (Nov 27 2016)**
*    Initial development.

--------
## License
MIT © [Antonio Gomez][1]

[1]: http://antoniogomez.me/