var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  let name = 'Boban Sugareski'
  res.render('index', { title: 'Express', name: name });
});

module.exports = router;
