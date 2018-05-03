const os = require('os');
const fs = require('fs');
const storeLocation = __dirname + '/../storage/note-store.json';
function fetchData() {
  try {
    const data = fs.readFileSync(storeLocation);
    return JSON.parse(data);
  }
  catch (err) {
    return [];
  }
}

function isValid(title,oldData) {
  const filtered = oldData.filter( data => data.title !== title);
  if(filtered.length !== oldData.length) {
    console.log(`${title} already exists`);
    return false;
  } else {
    return true;
  }
}

function handleUpdate(flag,entry) {
  switch (flag) {
    case 0:
      console.log(`Couldn't find ${title}`);
      break;

   case 1:
     fs.writeFileSync(storeLocation,JSON.stringify(entry));
     console.log(`Changes Saved successfully!`);
     break;

   case 2:
     console.log(`Nothing to change`);
     break;

    default:
    console.log("Something went wrong");
  }
}

module.exports.Note = {
  addNote: (title, body) => {
    const oldData = fetchData();
    if(isValid(title,oldData)){
      const payload = [...oldData, {title,body}];
      fs.writeFileSync(storeLocation, JSON.stringify(payload));
      console.log(`${title} added!`)
    }
  },

  getUserInfo: () => os.userInfo(),

  removeNote: (title) => {
    const data = fetchData();
    const payload = data.filter( old => old.title !== title);
    if(payload.length === data.length) {
      console.log(`${title} doesn't exist`);
    } else {
      fs.writeFileSync(storeLocation, JSON.stringify(payload));
      console.log(`${title} removed!`);
    }
   },

   clearAll: () => {
     fs.writeFileSync(storeLocation,"[]");
     console.log(`Notes cleared!`);
   },

   updateInfo: (title, body) => {
     const data = fetchData();
     let flag = 0;
     const entry = data.map( old => {
       if(old.title === title) {
         if(old.body === body) {
           flag = 2;
           return old;
         } else {
           flag = 1;
           return {title,body}
         }
       }
       return old;
     });
     handleUpdate(flag,entry);
   },

  showData: () => {
    const data = fetchData();
    if(data.length === 0) {
      console.log("No notes present. Add a note using the 'add' command!")
      return;
    }
    
    data.map((entry,index) => {
      console.log(
        `\n${index+1}. <h1>${entry.title}</h1>\n<p>${entry.body}</p>\n`
      );
    });
  },
};
