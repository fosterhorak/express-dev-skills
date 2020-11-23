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
    console.log(`req.body.has: ${req.body.has}`);
    console.log(`req.body.has: ${!!req.body.has}`);
    req.body.has = !!req.body.has;


    Skill.update(req.params.skill, req.body);
    res.redirect(`/skills/${req.body.skill}`);
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
    res.render ('skills/show', {
        skill: Skill.getOne(req.params.skill)

    });
}