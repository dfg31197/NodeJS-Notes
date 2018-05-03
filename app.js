const fs = require('fs');
const Notes = require('./scripts/notes.js').Note;
const arguements = require('./scripts/static/arguements.js');
const args = arguements.ARGS;
const yargs = require('yargs');

const argv = yargs
.command(args.USER_DATA.name, args.USER_DATA.meta, args.USER_DATA.validation)
.command(args.ADD.name, args.ADD.meta, args.ADD.validation)
.command(args.REMOVE.name, args.REMOVE.meta, args.REMOVE.validation)
.command(args.ALL.name, args.ALL.meta, args.ALL.validation)
.command(args.UPDATE.name, args.UPDATE.meta, args.UPDATE.validation)
.command(args.CLEAR.name, args.CLEAR.meta, args.CLEAR.validation)
.help()
.argv;


const command = argv._[0];

switch(command) {
  case args.USER_DATA.name:
  Notes.getUserInfo();
  break;

  case args.ADD.name:
  Notes.addNote(yargs.argv.title, yargs.argv.body);
  break;

  case args.REMOVE.name:
  Notes.removeNote(yargs.argv.title);
  break;

  case args.ALL.name:
  Notes.showData();
  break;

  case args.UPDATE.name:
  Notes.updateInfo(yargs.argv.title, yargs.argv.body);
  break;

  case args.CLEAR.name:
  Notes.clearAll();
  break;

  default:
  console.log(`Notes: '${command}' command not found.`);
}
