const excec = require('child_process').exec

excec('script.bat', (err, stdout) => {
    if(err) {
        throw err
    }

    console.log('comando ejecutado')
    console.log(stdout)
})