module.exports.output = function (req, res) {
    var filePath = './public/output/output.txt';
    res.download(filePath);
};
