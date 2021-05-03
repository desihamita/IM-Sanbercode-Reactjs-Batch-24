//Soal Pertama 
//Jawaban soal pertama
console.log("--- Soal Pertmama --\n")

const LuasLingkaran = (r, phi = 22/7) => {
    return parseInt(phi * r * r);
}
const KelilingLingkaran = (r, phi = 22/7) => {
    return parseInt(2 * phi * r);
}

console.log(LuasLingkaran(7))
console.log(KelilingLingkaran(7))



//Soal kedua
//Jawaban Soal kedua 
console.log("\n--- Soal Kedua ---\n")
const introduce = (...rest) =>{ 
    let [nama, usia,jenisKelamin, pekerjaan] = rest
    return `pak ${nama} adalah seorang ${pekerjaan} yang berusia ${usia} tahun`
} 

const perkenalan = introduce("John", "30", "Laki-Laki", "penulis")
console.log(perkenalan)



//Soal ketiga
//Jawaban soal ketiga
console.log("\n--- Soal Ketiga ---\n")
const newFunction = (firstName, lastName) => {
    return {
      firstName,
      lastName,
      fullName () {
        console.log(firstName + " " + lastName)
      }
    }
  }
    
console.log(newFunction("John", "Doe").firstName)
console.log(newFunction("Richard", "Roe").lastName)
newFunction("William", "Imoh").fullName()



//soal keempat
//Jawaban Soal keempat
console.log("\n--- Soal Keempat ---\n")
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020,
    colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
 }
 
const {name: phoneName, brand : phoneBrand, year, colors:[colorBronze,colorWhite, colorBlack]} = phone 
 
 console.log(phoneBrand, phoneName, year, colorBlack, colorBronze) 


 //Soal Kelima 
 //Jawaban Soal kelima 
 console.log("\n--- Soal Kelima ---\n")
 let warna = ["biru", "merah", "kuning" , "hijau"]

 let dataBukuTambahan= {
   penulis: "john doe",
   tahunTerbit: 2020 
 }
 
 let buku = {
   nama: "pemograman dasar",
   jumlahHalaman: 172,
   warnaSampul:["hitam"]
 }

let CombinedArray = {
    nama: "pemograman dasar",
    jumlahHalaman: 172,
    warnaSampul:["hitam", ...warna],
    ...dataBukuTambahan,
} 

 console.log(CombinedArray)