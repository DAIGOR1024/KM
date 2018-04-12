var fs = require('fs');

function check(){
    fs.mkdir('./public/output',(err)=>{
        if(err && err.code === 'EEXIST'){
            return
        }
    })

    fs.mkdir('./public/uploads',(err)=>{
        if(err && err.code === 'EEXIST'){
        return
        }
    })
}


module.exports = {
    check:check
}
