var fs = require('fs');
var upload = require('../public/backend-tools/upload').single('file-to-upload');

module.exports.input = function (req, res) {
    upload(req, res, function (err) {
        if (req.file === undefined) {
            res.status(500).send({ error: 'Missing upload File!' });
        } else {
            fs.readFile(req.file.path, "utf8", function (err, data) {
                if (err) {
                    throw err;
                }
                else {
                    res.send(data.toString() + '\r\n');
                }
            });
        }
    });
};