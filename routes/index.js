var express = require('express');
var router = express.Router();
var inputCtrl = require('../controllers/input');
var addCtrl = require('../controllers/add');
var outputCtrl = require('../controllers/output');

router.get('/', function (req, res) {
    res.render('index', {title: 'Demo', data: '', result: '',error:''});
});
router.post('/input', inputCtrl.input);
router.post('/add', addCtrl.add);
router.post('/output', outputCtrl.output);

module.exports = router;
