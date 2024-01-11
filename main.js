const fs = require('node:fs/promises');
const path1 = require('node:path');

const foo = async () => {
    const basePath = path1.join(process.cwd(), 'base-folder');
    await fs.mkdir(basePath, {recursive: true});

    const folders = ['folder-1', 'folder-2','folder-3','folder-4'];
    const files = ['file-1', 'file-2','file-3','file-4'];

    for (const folder of folders) {
        const folderPath = path1.join(basePath, folder);
        await fs.mkdir(folderPath, {recursive: true});
    }
    for (const file of files) {
        const filePath = path1.join(basePath, file);
        await fs.writeFile(filePath, 'hey!!!');
    }

    const filesNames = await fs.readdir(basePath);
    for (const filesName of filesNames) {
        const stat = await  fs.stat(path1.join(basePath, filesName))
        console.log(filesName, stat.isDirectory())
    }
}
void foo();





//const fs = require('node:fs/promises');
// const pathToCreatedFolder = "./folders";

//
// fs.mkdir(pathToCreatedFolder, () => {
//     fs.mkdir('./folders/folder1', ()=>{
//
//     })
//     fs.mkdir('./folders/folder2', ()=>{
//
//     })
//     fs.mkdir('./folders/folder3', ()=>{
//
//     })
//     fs.mkdir('./folders/folder4', ()=>{
//
//     })
//     fs.mkdir('./folders/folder5', ()=>{
//
//     })
// });
//
// const pathToCreatedFile1 = "./folders/folder1/text1.txt";
// fs.writeFile(pathToCreatedFile1,'file is created', (err)=>{
//     if (err) throw new Error();
// })
//
// const pathToCreatedFile2 = "./folders/folder2/text2.txt";
// fs.writeFile(pathToCreatedFile2,'file is created', (err)=>{
//     if (err) throw new Error();
// })
//
// const pathToCreatedFile3 = "./folders/folder3/text3.txt";
// fs.writeFile(pathToCreatedFile3,'file is created', (err)=>{
//     if (err) throw new Error();
// })
//
// const pathToCreatedFile4 = "./folders/folder4/text4.txt";
// fs.writeFile(pathToCreatedFile4,'file is created', (err)=>{
//     if (err) throw new Error();
// })
//
// const pathToCreatedFile5 = "./folders/folder5/text5.txt";
// fs.writeFile(pathToCreatedFile5,'file is created', (err)=>{
//     if (err) throw new Error();
// })
//
//
//
//  const path = require('path');
// fs.readdir(pathToCreatedFolder, (err, files) => {
//     for (const element of files) {
//         const folderPath = path.join(pathToCreatedFolder, element);
//         fs.stat(folderPath, (err, stats) => {
//             if (!err) {
//                 if (stats.isFile()) {
//                     console.log('is file ? ' + stats.isFile());
//                 }
//                 else if (stats.isDirectory()) {
//                     console.log('is directory? ' + stats.isDirectory());
//                 }
//             }
//             else
//                 throw err;
//         })
//         for (const filePathElement of folderPath) {
//             const filePath = path.join(pathToCreatedFolder, element);
//             fs.stat(filePath, (err, stats) => {
//                 if (!err) {
//                     if (stats.isFile()) {
//                         console.log('is file ? ' + stats.isFile());
//                     }
//                     else if (stats.isDirectory()) {
//                         console.log('is directory? ' + stats.isDirectory());
//                     }
//                 }
//                 else
//                     throw err;
//             })
//
//         }
//     }
// })