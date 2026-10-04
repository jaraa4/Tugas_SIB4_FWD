// Class Pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }
    // Method mencatat penyewaan kendaraan
    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa = kendaraan;
    }
    // Method menampilkan info pelanggan
    tampilkanInfo() {
        return `Nama: ${this.nama}, Telepon: ${this.nomorTelepon}, Kendaraan: ${this.kendaraanDisewa}`;
    }
}

// Array daftar pelanggan
let daftarPelanggan = [];

// Membuat objek pelanggan
let pelanggan1 = new Pelanggan("Fahmi", "08123456789");
let pelanggan2 = new Pelanggan("Fikri", "08234567890");

// Mencatat penyewaan
pelanggan1.sewaKendaraan("Mobil Pajero");
pelanggan2.sewaKendaraan("Motor Vario");

// Menyimpan ke daftar
daftarPelanggan.push(pelanggan1);
daftarPelanggan.push(pelanggan2);

// Menampilkan daftar pelanggan
console.log("Daftar Pelanggan Penyewa Kendaraan:");
daftarPelanggan.forEach(p => {
    console.log(p.tampilkanInfo());
});