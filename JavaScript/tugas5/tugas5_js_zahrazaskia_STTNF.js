// DATA PRODUK (MINIMAL 5)
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Tablet", harga: 7000000 },
  { id: 4, nama: "Mouse", harga: 200000 },
  { id: 5, nama: "Keyboard", harga: 300000 }
];

// EVENT HANDLER
const eventHandler = {
  tambah: function () {
    tambahProduk(6, "Monitor", 1500000);
    console.log("\n Menambahkan produk baru: Monitor dengan harga Rp 1.500.000");
    console.log("✅ Produk berhasil ditambahkan");
  },

  hapus: function () {
    hapusProduk(2);
    console.log("\n Menghapus produk dengan ID 2 (Smartphone)");
    console.log("❌ Produk dengan ID 2 dihapus");
  },

  tampil: function () {
    console.log("\n📦 === DAFTAR PRODUK ===");
    tampilkanProduk();
  }
};

// TAMBAH PRODUK (SPREAD)
function tambahProduk(id, nama, harga) {
  produkList = [...produkList, { id, nama, harga }];
}

// HAPUS PRODUK (REST)
function hapusProduk(...id) {
  produkList = produkList.filter(produk => !id.includes(produk.id));
}
// TAMPILKAN PRODUK (DESTRUCTURING)
function tampilkanProduk() {
  produkList.forEach(({ id, nama, harga }) => {
    console.log(`ID: ${id} | Nama: ${nama} | Harga: Rp ${harga.toLocaleString("id-ID")}`);
  });
}

//=========================
// CONTOH PENGGUNAAN
// tampil awal
eventHandler.tampil();

// tambah produk
eventHandler.tambah();
eventHandler.tampil();

// hapus produk
eventHandler.hapus();
eventHandler.tampil();