// //Soal pertama 
// // //jawaban soal pertama 
var panjang= 12
var lebar= 4 
var tinggi = 8

function HitungLuas(panjang, lebar){
    luas =  panjang * lebar;
    return luas;
}
function HitungKeliling(panjang, lebar){
    keliling = 2 * (panjang + lebar);
    return keliling;
}
function HitungVolume(panjang, lebar, tinggi){
    Volume = panjang * lebar * tinggi;
    return Volume;
}

var LuasPersegipanjang = HitungLuas(panjang, lebar);
var KelilingPersegiPanjang = HitungKeliling(panjang, lebar);
var VolumeBalok = HitungVolume(panjang, lebar, tinggi);

console.log(" --- Jawaban Soal Pertama ---");
console.log(LuasPersegipanjang);
console.log(KelilingPersegiPanjang);
console.log(VolumeBalok);

// // //Soal kedua 
// // //Jawaban Soal Kedua
var name = "Desi Sihamita"
var age = 19
var address = "jln persatuan"
var hobby = "nonton drakor"

function introduce(name, age, address, hobby){
    return "Nama saya "+ name + ", umur saya " + age + " tahun, alamat saya "+ address + ", dan saya punya hobby yaitu " + hobby; 
}

var perkenalan = introduce(name, age, address, hobby);
console.log("\n--- Jawaban Soal Kedua ---");
console.log(perkenalan);

// // //Soal Ketiga
// // //Jawaban Soal Ketiga 
var arrayDaftarPeserta = ["Desi Sihamita", "Perempuan", "Nonton Drakor", 2002];
var ObjectDataPeserta = {
    Nama : "Desi sihamita",
    Jenis_Kelamin : "Perempuan",
    Hobby : "Nonton drakor",
    Tahun_lahir : 2002
}

console.log("\n--- Jawaban Soal ketiga ---");
console.log(ObjectDataPeserta);


// //Soal Keempat
// //Jawaban Soal keempat
var Buah = [
    { nama : "nanas", warna : "Kuning", biji : "tidak ada", harga : 9000 },
    { nama : "jeruk", warna : "oranye", biji : "ada", harga : 8000 },
    { nama : "semangka", warna : "hijau & merah", biji : "ada", harga : 10000 },
    { nama : "pisang", warna : "Kuning", biji : "tidak ada", harga : 5000 }
  ];

  var DataBuah = Buah.filter(function(item){
    return item.biji != "ada";
  });

  console.log("\n--- Jawaban soal keempat ---");
  console.log(DataBuah);

//Soal kelima
//jawaban soal kelima 
function tambahDataFilm(nama, durasi, genre, tahun){
    var DataFilm = {};
        DataFilm.nama = nama;
        DataFilm.durasi = durasi;
        DataFilm.genre = genre;
        DataFilm.tahun = tahun;
    return DataFilm;
}

var DataFilm = [];

DataFilm.push(tambahDataFilm("LOTR", "2 jam", "action", "1999"));
DataFilm.push(tambahDataFilm("avenger", "2 jam", "action", "2019"));
DataFilm.push(tambahDataFilm("spiderman", "2 jam", "action", "2004"));
DataFilm.push(tambahDataFilm("juon", "2 jam", "horror", "2004"));

console .log("\n---Jawaban soal kelima ---")
console.log(DataFilm);

