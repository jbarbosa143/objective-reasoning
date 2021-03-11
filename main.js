// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(str){
    if(str.userRole === 'ADMIN'){
        return true;
    }else{
        return false;
    }
}
// ==========================
function getEmail(email){
    return((email.firstName.toLowerCase())+ "."+(email.lastName.toLowerCase()) + "@codeimmersives.com")
}
// ==================================
function getPlaylistLength(song){
    output = song.songs.length;
    return output;
}
// ===================================
function getHardestHomework(grade){
    var hardestName = "";
    var highestPos = 100;
    for(const score of grade){
        if(score.averageScore < highestPos){
            highestPos = score.averageScore;
            hardestName = score.name;
        }
    }
    return hardestName;
}
// ===================================
function createPhonebook(name,phone){
    var contactInfo = {};
    for(i =0; i < name.length; i++){
        contactInfo[name[i]] = phone[i];
    }
    return contactInfo;
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};