const skills = [
    {skill: 'css', level: 'newbie', has: true},
    {skill: 'debugging', level: 'newbie', has: true},
    {skill: 'emotionless', level: 'n/a', has: false}
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
    console.log(`updatedSkill: ${updatedSkill}`);

    const orgSkill = skills.find(s => s.skill === skill);
    Object.assign(orgSkill, updatedSkill);
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