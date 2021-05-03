// Soal pertama 
//... jawaban soal 1

var kataPertama = "saya ";
var kataKedua = "senang ";
var kataKetiga = "belajar ";
var kataKeempat = "javascript ";

var soal1 = kataPertama + " " + (kataKedua[0].toUpperCase()+ kataKedua.slice(1))
            + " " + kataKetiga.slice(0,kataKetiga.length-1) + kataKetiga[kataKetiga.length-1].toUpperCase()
            + " " + kataKeempat.toUpperCase()

console.log(soal1)


// Soal Kedua
//... jawaban soal 2
var panjangPersegiPanjang = "8";
var lebarPersegiPanjang = "5";

var alasSegitiga = "6";
var tinggiSegitiga = "7";

var kelilingPersegipanjang = 2 * (parseInt(panjangPersegiPanjang) + parseInt(lebarPersegiPanjang))  ;
console.log(kelilingPersegipanjang);

var luasSegitiga = (parseInt(alasSegitiga) * parseInt(tinggiSegitiga))/2;
console.log(luasSegitiga);

//Soal ketiga
//... jawaban soal 3
var sentences= 'wah javascript itu keren sekali'; 

var firstWord= sentences.substring(0, 3); 
var secondWord= sentences.substring(4,14); // do your own! 
var thirdWord= sentences.substring(14, 18); // do your own! 
var fourthWord= sentences.substring(18, 24); // do your own! 
var fifthWord= sentences.substring(24, 31); // do your own! 

console.log('Kata Pertama: ' + firstWord); 
console.log('Kata Kedua: ' + secondWord); 
console.log('Kata Ketiga: ' + thirdWord); 
console.log('Kata Keempat: ' + fourthWord); 
console.log('Kata Kelima: ' + fifthWord);

//Soal keempat
//... jawaban soal 4
var nilaiJohn = 80;

if (nilaiJohn >= 80 ) { 
  console.log(nilaiJohn + ' indeksnya A');
} 
else if (nilaiJohn >= 70 && nilaiJohn < 80 ) {
    console.log(nilaiJohn + " indeksnya B");
}  
else if (nilaiJohn >= 60 && nilaiJohn < 70) {
    console.log(nilaiJohn + " indeksnya C");
}  
else if (nilaiJohn >= 50 && nilaiJohn < 60) {
    console.log(nilaiJohn + " indeksnya D");
} 
else {
    console.log(nilaiJohn + " indeksnya E");
}


var nilaiDoe = 50;

if (nilaiDoe >= 80 ) { 
    console.log(nilaiDoe + ' indeksnya A');
  } 
  else if (nilaiDoe >= 70 && nilaiDoe < 80 ) {
      console.log(nilaiDoe + " indeksnya B");
  }  
  else if (nilaiDoe >= 60 && nilaiDoe < 70) {
      console.log(nilaiDoe + " indeksnya C");
  }  
  else if (nilaiDoe >= 50 && nilaiDoe < 60) {
      console.log(nilaiDoe + " indeksnya D");
  } 
  else {
      console.log(nilaiDoe + " indeksnya E");
  }


//Soal kelima 
//... jawaban soal 5
var tanggal = 17;
var bulan = 12;
var tahun = 2002;

switch(bulan) {
  case 1:   bulan = 'januari'; break; 
  case 2:   bulan ='februari'; break; 
  case 3:   bulan = 'maret'; break; 
  case 4:   bulan = 'april'; break; 
  case 5:   bulan = 'mei'; break; 
  case 6:   bulan = 'juni'; break;
  case 7:   bulan = 'juli'; break; 
  case 8:   bulan = 'agustus'; break; 
  case 9:   bulan = 'september'; break; 
  case 10:  bulan = 'oktober'; break; 
  case 11:  bulan = 'november'; break; 
  case 12:  bulan = 'desember'; break; 
}

console.log(tanggal + ' ' + bulan + ' ' + tahun);



