const fs = require('fs');
const Notes = require('./scripts/notes.js').Note;
const args = require('./scripts/static/arguements.js').ARGS;
const yargs = require('yargs');


switch(yargs.argv._[0]) {
  case args.USER_DATA:
  Notes.getUserInfo();
  break;

  case args.ADD:
  Notes.addNote(yargs.argv.title, yargs.argv.body);
  break;

  case args.REMOVE:
  Notes.removeNote(yargs.argv.title);
  break;

  case args.ALL:
  Notes.showData();
  break;

  case args.UPDATE:
  Notes.updateInfo(yargs.argv.title, yargs.argv.body);
  break;

  case args.CLEAR:
  Notes.clearAll();
  break;
  
  default:
  console.log(`Notes: '${yargs.argv._[0]}' command not found.`);
}
