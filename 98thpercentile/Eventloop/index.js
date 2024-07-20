const fs = require('fs')

// 1

fs.readFile('./test.txt', (err, data) => {
    console.log('I/O finished')

    console.log('--------------')

    setTimeout(() => console.log('Timeout 1'), 0);
    setImmediate(() => console.log('immediate'))

    process.nextTick(()=>console.log('next tick'))
})

setImmediate(() => console.log('immediate'))
setTimeout(() => console.log('Timeout 1'),0);

console.log('top level code is executed')


// 2.

setTimeout(() => console.log('Timeout 1'), 0);
setImmediate(() => console.log('immediate'))