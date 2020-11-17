const skills = [
    {skill: 'css', level: 'Beginner', has: true},
    {skill: 'debugging', level: 'Beginner', has: true},
    {skill: 'emotionless', level: 'n/a', has: false}
];
  
module.exports = {
    getAll, 
    getOne,
};
  
function getAll() {
    return skills;
}

function getOne(s) {
    return skills[s];
}