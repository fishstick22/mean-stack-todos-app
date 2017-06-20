var express = require('express');
var router = express.Router();

// Get Todos
router.get('/todos', function(req, res, next){
    res.send('TODOS API under construction');
});

module.exports = router;