var fs = require('fs');

function check(){
	fs.mkdir('./public/output',(err)=>{
		if(err && err.code === 'EEXIST'){
			return 
		}
	})
}

function add(req, res) {
	check()
	var fileName = './public/output/output-'+Date.now()+'.txt'
    fs.writeFile(fileName, req.body.content.toString(), "utf8", (err)=> {
        if (err){
			console.log(err)
		}else{
			res.send({content:req.body.content,fileName:fileName});
		} 
    });
};

module.exports = {
	add:add
}
