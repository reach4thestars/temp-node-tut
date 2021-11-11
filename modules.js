//CommonJS, every file is module(by default)
// Modules - encapsulated code (only share minimum)

const names = require('./2.names')
const sayHi = require('./3.utils')
const data = require('./6-alternative-flavor')
require('./7-mirror-grenade')

//sayHi('lulu')
//sayHi(names.john)
//sayHi(names.peter)
