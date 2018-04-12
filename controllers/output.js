function output(req, res) {
    res.download(req.body.fileName);
};

module.exports = {
	output:output
}
