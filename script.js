console.log("Website The Animals berhasil dijalankan");
function bookingWA(){

let nama = document.getElementById("nama").value;
let hewan = document.getElementById("hewan").value;
let jenis = document.getElementById("jenis").value;
let layanan = document.getElementById("layanan").value;
let tanggal = document.getElementById("tanggal").value;


let nomor = "6283892513500"; 
// Ganti dengan nomor WhatsApp Luxe Pet Grooming


let pesan = 
`Halo Luxe Pet Grooming 🐾

Saya ingin booking grooming.

Nama Pemilik:
${nama}

Nama Hewan:
${hewan}

Jenis:
${jenis}

Layanan:
${layanan}

Tanggal:
${tanggal}

Mohon info jadwal tersedia. Terima kasih.`;


window.open(
"https://wa.me/"+6283892513500+"?text="+encodeURIComponent(pesan),
"_blank"
);

}
