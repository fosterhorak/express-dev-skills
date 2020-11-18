var express = require('express');
const skills = require('../controllers/skills');
var router = express.Router();

var skillsCtrl = require('../controllers/skills');
const skill = require('../models/skill');

// All actual paths begin with "/skills"...

// GET /skills
router.get('/', skillsCtrl.index);
// GET /skills/new
router.get('/new', skillsCtrl.new);

// GET /skills/:skill
router.get('/:skill', skillsCtrl.show);

module.exports = router;
