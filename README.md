## Photoshop-Connection

[![npm-image](https://img.shields.io/badge/npm-v1.0.0-ff69b4.svg)](https://www.npmjs.com/package/photoshop-connection)
![version-image](https://img.shields.io/badge/license-MIT-ff69b4.svg)


#### Install
--------

```
npm install photoshop-connection --save
```


#### Description
-----------

Node.js module for connecting to Adobe Photoshop Server. Based on connection libraries of [Adobe Generator][0].


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


#### Example
--------

[Example Project][1] demostrating module basic functionality.

The module creates a new client instance, once a connection is established, it sends a basic command as String to be evaluated on Adobe Photoshop.


#### Scope
--------

Tested in Adobe Photoshop CC2014 (v15.x), Adobe Photoshop CC2015 (v16.x), Adobe Photoshop CC2015.5 (v17.x), Adobe Photoshop CC2017 (v18.x)


#### Changelog
--------

**1.0.0 (Nov 29 2016)**
*    Create a connection client based on the provided options.
*    Send commands to Photoshop based on a JSX String.
*    Catch any connections errors.


**0.0.0 (Nov 27 2016)**
*    Initial development.

--------
## License
MIT © [Antonio Gomez][2]

[0]: https://github.com/adobe-photoshop/generator-core
[1]: https://github.com/antonio-gomez/photoshop-connection/tree/master/example
[2]: http://antoniogomez.me/