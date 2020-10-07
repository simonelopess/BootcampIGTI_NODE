// //utilizando callbacks
// import fs from 'fs';
// fs.writeFile('teste.txt', 'bla bla bla', function (err) {
//   if (err) {
//     console.log(err);
//   }
//   fs.appendFile('teste.txt', ' teste append file', function (err) {
//     if (err) {
//       console.log(err);
//     }
//     fs.readFile('teste.txt', 'utf-8', function (err, data) {
//       if (err) {
//         console.log(err);
//       }
//       console.log(data);
//     });
//   });
// });

//utilizando promises
import { promises as fs } from 'fs';
// fs.writeFile('teste.txt', 'bla bla bla')
//   .then(() => {
//     fs.appendFile('teste.txt', '\nteste apend file')
//       .then(() => {
//         fs.readFile('teste.txt', 'utf-8').then((resp) => {
//           console.log(resp);
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//utilizando async await

init();
async function init() {
  try {
    await fs.writeFile('teste.txt', 'bla bla bla');
    await fs.appendFile('teste.txt', '\nteste apend file');
    const data = await fs.readFile('teste.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
