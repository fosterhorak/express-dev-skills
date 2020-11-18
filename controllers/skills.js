// controllers/skills.js

// Should name the model in uppercase and singular
const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill 
};

function newSkill(req, res) {
    res.render('skills/new');
}

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
}

function show(req, res) {
    const skill = Skill.getOne(req.params.skill);
    console.log(`req.params.skill is : ${req.params.skill}`);
    console.log(`show func...skill is: ${skill}`);
    res.render('skills/show', { skill });
}