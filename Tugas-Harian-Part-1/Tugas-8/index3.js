var filterBooksPromise = require('./promise2.js')
 
// Lanjutkan code untuk menjalankan function filterBookPromise
async function filterBooks(){
    try {
        let data = await filterBooksPromise('books')
        console.log(data)

        var data2 = await filterBooksPromise ('books')
        console.log(data2)
    } catch(Error){
      console.log(Error)
    }
}

filterBooks()
