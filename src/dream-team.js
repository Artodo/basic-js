/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }
    let letters = [];
    members.forEach(name => {
        if (typeof name === 'string') {
            const trimmedName = name.trim();
            const trimmedNameArr = trimmedName.split(' ');
            letters.push(trimmedNameArr[0][0].toUpperCase());
        }
    });
    const result = letters.sort().join('');
    return result === '' ? false : result;
}

module.exports = {
    createDreamTeam
};