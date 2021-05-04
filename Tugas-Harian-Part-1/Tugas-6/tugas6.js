//Soal Pertama 
//Jawaban soal pertama
console.log("--- Soal Pertmama --\n")

const LuasLingkaran = (r) => {
    const phi = r % 7 === 0 ? 22/7 : 3.14
    return phi * r * r
}
const KelilingLingkaran = (r) => {
    const phi = r % 7 === 0 ? 22/7 : 3.14
    return 2 * phi * r
}

let JariJari = 7
console.log(LuasLingkaran(JariJari))
console.log(KelilingLingkaran(JariJari))
console.log()


//Soal kedua
//Jawaban Soal kedua 
console.log("\n--- Soal Kedua ---\n")
const introduce = (...rest) =>{ 
    let [nama, usia,jenisKelamin, pekerjaan] = rest
    let prefixName = "Undefined"
    if (jenisKelamin === "Laki-Laki"){
      prefixName = "Pak"
    }else if(jenisKelamin === "Perempuan"){
      prefixName = "Bu"
    }
  
    return `${prefixName} ${nama} adalah seorang ${pekerjaan} yang berusia ${usia} tahun`
} 

const perkenalan = introduce("John", "30", "Perempuan", "penulis")
console.log(perkenalan)
console.log()


//Soal ketiga
//Jawaban soal ketiga
console.log("\n--- Soal Ketiga ---\n")
const newFunction = (firstName, lastName) => {
    return {
      firstName,
      lastName,
      fullName : () => {
        console.log(firstName + " " + lastName)
      }
    }
  }
    
console.log(newFunction("John", "Doe").firstName)
console.log(newFunction("Richard", "Roe").lastName)
newFunction("William", "Imoh").fullName()
console.log()


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
 console.log()


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
    ...buku,
    warnaSampul:["hitam", ...warna],
    ...dataBukuTambahan,
} 

 console.log(CombinedArray)