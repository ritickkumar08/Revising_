const { log } = require('console');
const fs = require('fs')


//create
// fs.writeFileSync("ritick.txt", "hey! ritick welcome to code" )

// fs.writeFile("noor.txt", "hey! noori noor", {flag:'w', encoding:'utf-8'}, (err, result)=>{
//     if(err) throw err
//     else{
//         console.log('file was written successfully')
//     }
// })

//read
// const resul = fs.readFileSync("ritick.txt", 'utf-8')
// console.log(resul);


// const rexult = fs.readFile("ritick.txt",'utf-8', (err, result)=>{
//     if(err) throw err;
//     else{
//         console.log("the file was read successfully!");
//     }
// })

//to update or make changes in the files
// fs.appendFileSync("noor.txt", " hey! you are really cute!")

// fs.appendFile("ritick.txt", " hey man you are handsome too! ", {encoding:'utf-8'}, (err, result)=>{
//     if(err) throw err
//     else{
//         console.log("success");
//     }
// })

//delete
// fs.unlinkSync("noor.txt")

// console.log("1");

// setTimeout(() => console.log("2"), 0);

// Promise.resolve().then(() => console.log("3"));

// console.log("4");

const os = require('os')
console.log(os.cpus().length);
