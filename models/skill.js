const skills = [
    {skill: 'css', level: 'newbie', has: true},
    {skill: 'debugging', level: 'newbie', has: true},
    {skill: 'emotionless', level: 'n/a', has: false}
];
  
module.exports = {
    getAll, 
    getOne,
};
  
function getAll() {
    return skills;
}

function getOne(skill) {
    console.log(`getOne func... skill is: ${skill}`);
    return skills.find(f => f.skill === skill);
}