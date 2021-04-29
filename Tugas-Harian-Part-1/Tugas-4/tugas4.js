// //Soal Pertama 
// // Jawaban Soal pertama 
var LoopingPertama = 1;
console.log("LOOPING PERTAMA ");
while (LoopingPertama < 21 ) {
    if(LoopingPertama % 2 == 0){
        console.log(LoopingPertama + " - I Love Coding");
    }
    LoopingPertama++;
}

var LoopingKedua = 20;
console.log("LOOPING KEDUA ");
while (LoopingKedua > 1){
    if(LoopingKedua % 2 == 0){
        console.log(LoopingKedua + " - I Will Become a Frontend Developer");
    }
   LoopingKedua--;
}


// //Soal Kedua 
// //Jawaban Soal Kedua 
for(var angka = 1; angka < 21; angka++) {
    // console.log('Iterasi ke-' + angka);
    if((angka % 3) === 0 && (angka % 2) === 1 ){
        console.log(angka + " - I Love Coding");
    }else if ((angka % 2) === 1){
        console.log(angka + " - Santai")
    }else{
        console.log(angka + " - Berkualitas");
    }
} 

//Soal Ketiga
//Jawaban Soal Ketiga
var segitiga = "";
for (var i=1;i<=7;i++){
    segitiga += '';
    for (var j=1;j<=i;j++){
        segitiga += '#';
    }
    segitiga += "\n";
}
console.log(segitiga);

// soal Keempat
// Jawaban Soal keempat
var kalimat=["aku", "saya", "sangat", "sangat", "senang", "belajar", "javascript"];
var removed = kalimat.splice(0, 1);
var remove = kalimat.splice(1,1);
 console.log(kalimat.join(" "));

//Soal kelima 
//Jawaban Soal Kelima 
var sayuran = [];
sayuran[0] = "Kangkung";
sayuran[1] = "Bayam";
sayuran[2] = "Buncis";
sayuran[3] = "Kubis";
sayuran[4] = "Timun";
sayuran[5] = "Seledri";
sayuran[6] = "Tauge";

var sorted = sayuran.sort();

for(var i = 1; i <= 7; i++){
    console.log(i + "." + sorted[i - 1]);
    i = i++;
}

