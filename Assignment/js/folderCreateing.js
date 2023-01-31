const fs = require('fs');
for (let index = 4; index < 30; index++) {
    let folderName = `${ index<10? `0${index}`:index } Question`
    console.log('Done' + folderName);
   fs.mkdir(folderName, (err) => {
    if (err) {
      console.error(err);
    } else {
      fs.writeFile(`./${folderName}/index.js`, '', (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('File created successfully.');
        }
      });
    }
  }); 
}
