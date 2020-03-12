const fm = require('./src/promisify');

fm.readFile('ritoo.jpg').then(data => console.log(data));