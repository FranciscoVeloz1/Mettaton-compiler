const excec = require('child_process').exec

excec('sh ./script.sh', (err, stdout) => {
    if(err) {
        throw err
    }

    console.log('comando ejecutado')
    console.log(stdout)
})