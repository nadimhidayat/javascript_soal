let belanja = "    Apel, Kelapa, +++Rambutan, Mangga   ";

// Seperti yang bisa dilihat, ada banyak kesalahan di list belanjanya.
// Tujuan kita adalah memperbaiki list belanja yang ada


// Soal 1: Menghilangkan spasi yang ada di awal dan akhir list
// lalu simpan hasilnya sebagai variable "belanja"

belanja = belanja.trim();

// Soal 2: cari posisi yang "+++" dan
// simpan sebagai variable
let pos = belanja.indexOf("+++");
console.log(pos);

// Soal 3: Hapus "+++" dan tunjukan hasilnya memakai console.log.
// Gunakan fungsi .substr() dan .slice()
// 
// Hasilnya: "Apel, Kelapa, Rambutan, Mangga"

console.log(belanja.substr(0, pos) + belanja.substr(pos + 3));
console.log(belanja.slice(0, pos) + belanja.slice(pos + 3));

// Soal 4: Hilangkan "+++"  menggunakan fungsi .replace()

console.log(belanja.replace("+++", ""));

// Soal 5: Sekarang kita akan membuat list belanja.
// Jadikan dua garis sebagai pembatas di atas dan di bawah.
// Gunakan .repeat() agar lebih mudah.
// 
// --------------------
// List belanja:
//  - Apel
//  - Kelapa
//  - Rambutan
//  - Mangga
// --------------------
//
// Gunakan replace() dan console.log() sebanyak mungkin.

belanja = belanja.replace("+++", "");

console.log("-".repeat(20));
console.log("List belanja:");


let belanjaText = belanja
  .replace(", ", "\n - ")
  .replace(", ", "\n - ")
  .replace(", ", "\n - ")

console.log(" - " + belanjaText);

console.log("-".repeat(20));