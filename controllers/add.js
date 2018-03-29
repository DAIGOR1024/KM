var fs = require('fs');
module.exports.add = function (req, res) {
    fs.writeFile('./public/output/output.txt', req.body.content.toString(), "utf8", function (err) {
        if (err) throw err;
        res.send(req.body.content);
    });

};