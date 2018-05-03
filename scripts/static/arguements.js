const validations = {
  title: {
    describe: 'Title of your note',
    demand: true,
    alias: 't'
  },

  body: {
    describe: 'Body of your note',
    demand: true,
    alias : 'b'
  },
}

module.exports.ARGS = {
  USER_DATA: {
    name: 'userinfo',
    meta: 'Get info about your computer',
    validation: {},
 },
  ADD: {
    name: 'add',
    meta: 'Add a note',
    validation: {
      title: validations.title,
      body: validations.body,
    }
 },
  REMOVE: {
    name: 'remove',
    meta: 'Remove a note',
    validation: {
      title: validations.title,
    }
 },
  ALL: {
    name: 'all',
    meta: 'Shows all available notes',
    validation: {}
 },
  UPDATE: {
    name: 'change',
    meta: 'Changes the body of a note',
    validation: {
      title: validations.title,
      body: validations.body,
    }
 },

  CLEAR: {
    name: 'clearall',
    meta: 'Removes all notes PERMANENTLY',
    validation: {},
 },

};
