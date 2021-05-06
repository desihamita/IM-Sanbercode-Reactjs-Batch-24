var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

// Lanjutkan code untuk menjalankan function readBooksPromise
const execute = (time, books,i) => {
    if(i < books.length){
        readBooksPromise(time, books[i], i)
        .then((sisaWaktu) => {
            if(sisaWaktu > 0){
                i += 1;
                execute(sisaWaktu, books, i);
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }
}
execute(10000, books,0)

// const execute = (time, index, booksQueue)=>{
//     readBooksPromise(time, books[index]).then((remainingTime)=>{
//         booksQueue = booksQueue - 1
//         if (booksQueue > 0){
//             execute(remainingTime, index+1, booksQueue)
//         }
//     }).catch((err)=>{
//         console.log(err)
//     })
// }

// execute(10000, 0, books.length)
