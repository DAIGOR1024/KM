var fs = require('fs');
var upload = require('../public/backend-tools/upload').single('file-to-upload');
var iconv = require('iconv-lite');

function input(req, res) {
    upload(req, res, function (err) {
        if (req.file === undefined) {
            res.status(500).send({ error: 'Missing upload File!' });
        } else {
            fs.readFile(req.file.path, function (err, data) {
                if (err) {
                    throw err;
                }
                else {
                    data = iconv.decode(data, 'gbk');
                    console.info(data.toString());
                    res.send(data.toString() + '\r\n');
                }
            });
        }
    });
};

module.exports = {
	input: input
}
