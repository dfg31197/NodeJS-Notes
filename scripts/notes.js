const os = require('os');

module.exports.Note = {
  addNote: (title, body) => { console.log(`Adding ${title}`) },
  getUserInfo: () => os.userInfo(),
  removeNote: (title) => {console.log(`Removing ${title}`)},
}
