module.exports.output = function (req, res) {
    res.download(req.body.fileName);
};
