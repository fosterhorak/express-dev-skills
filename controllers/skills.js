// controllers/skills.js

// Should name the model in uppercase and singular
const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill, 
    create,
    delete: deleteSkill,
    edit, 
    update,
};

function update(req, res) {
    req.body.has = !!req.body.has;
    console.log(`req.params.skill: ${req.params.skill}`);
    console.log(`req.body.has: ${req.body.has}`);
    console.log(`req.body: ${req.body}`);

    Skill.update(req.params.skill, req.body);
    res.redirect(`/skills/${req.params.skill}`)
}

function edit(req, res) {
    const skill = Skill.getOne(req.params.skill);
    res.render('skills/edit', { skill });
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.skill);
    res.redirect('/skills');
}

function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
}

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