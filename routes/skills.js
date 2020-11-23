var express = require('express');
var router = express.Router();

//const skills = require('../controllers/skills'); --think this was a typo
var skillsCtrl = require('../controllers/skills');
const skill = require('../models/skill');

// All actual paths begin with "/skills"...

// GET /skills
router.get('/', skillsCtrl.index);
// GET /skills/new
router.get('/new', skillsCtrl.new);
// GET /skills/:skill
router.get('/:skill', skillsCtrl.show);
// POST /skills
router.post('/', skillsCtrl.create);
// DELETE /skills/:skill
router.delete('/:skill', skillsCtrl.delete);
// GET /skills/:skill/edit
router.get('/:skill/edit', skillsCtrl.edit);
// PUT /skills/:skill
router.put('/:skill', skillsCtrl.update);

module.exports = router;
