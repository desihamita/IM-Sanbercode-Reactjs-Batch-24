var filterBooksPromise = require('./promise2.js')
 
// Lanjutkan code untuk menjalankan function filterBookPromise
var filterBooksPromise = require('./promise2.js')

filterBooksPromise(true, 40).then((res)=>{
  console.log(res)
}).catch((err)=>{
  console.log(err.message)
})

const filterBook = async () =>{
  //first filter
  try{
    const firstFilter = await filterBooksPromise(false, 250)
    console.log(firstFilter)
  }catch(err){
    console.log(err.message)
  }

  // second filter
  try{
    const secondFilter = await filterBooksPromise(true, 30)
    console.log(secondFilter)
  }catch(err){
    console.log(err.message)
  }

}

filterBook()

