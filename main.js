//todo EVENTS
//admin panel as example - event user bought something
const Events = require('events');

const eventEmitter = new Events();

eventEmitter.on('click', ()=>{
    console.log('click click click')
});

eventEmitter.once('move', ()=>{
    console.log('move move move')
});
eventEmitter.emit('move');
eventEmitter.emit('move');
eventEmitter.emit('move');
eventEmitter.emit('move');
eventEmitter.emit('move');
eventEmitter.emit('click');
eventEmitter.emit('click');
eventEmitter.emit('click');
eventEmitter.emit('click');
eventEmitter.emit('click');

//once works only one time
//on work as many are they are called


const fs = require('fs');
const path = require('path');

const pathToRead = path.resolve('data', 'read.txt')
const pathToWrite = path.resolve('data','write.txt')



const readStream = fs.createReadStream(pathToRead);
const writeStream = fs.createWriteStream(pathToWrite);

//todo to add text from read to write

// readStream.on('data', (chunk) => {
//     console.log(chunk);
//     writeStream.write(chunk);
// })

//для того щоб спростити код вище
readStream.pipe(writeStream);



