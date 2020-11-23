const skills = [
    {skill: 'css', has: true},
    {skill: 'expert at debugging', has: false},
    {skill: 'proper indentation', has: true},
    {skill: 'understands recurssion', has: false}
];
  
module.exports = {
    getAll, 
    getOne,
    create,
    deleteOne,
    update
};
function update(skill, updatedSkill) {
    console.log(`skill: ${skill}`);
    console.log(`updatedSkillSkill: ${updatedSkill.skill}`);
    console.log(`updatedSkillHas: ${updatedSkill.has}`);

    const oSkill = skills.find(s => s.skill === `${skill}`);
    Object.assign(oSkill, updatedSkill);
}

function deleteOne(newSkill) {
    //console.log(`newSkill: ${newSkill}`)
    const idx = skills.findIndex(skill => newSkill === skill.skill);
    //console.log(`idx: ${idx}`);
    skills.splice(idx, 1);
    //console.log(skills);
}

function create(skill) {
    console.log(`skill: ${skill.skill}`);
    let newSkill = {}
    newSkill.skill = `${skill.skill}`;
    newSkill.level = 'n/a';
    newSkill.has = true;
    skills.push(newSkill);
}
function getAll() {
    return skills;
}

function getOne(skill) {
    //console.log(`getOne func... skill is: ${skill}`);
    return skills.find(f => f.skill === skill);
}