// Array produk toko
let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Fungsi menambahkan produk baru
function tambahProduk(nama, harga, stok) {
  // id baru = id terbesar + 1 (aman walaupun ada produk yang sudah dihapus)
  const idBaru =
    produkToko.length > 0
      ? Math.max(...produkToko.map(p => p.id)) + 1
      : 1;

  const produkBaru = { id: idBaru, nama: nama, harga: harga, stok: stok };
  produkToko.push(produkBaru);

  console.log(`Produk "${nama}" berhasil ditambahkan dengan id ${idBaru}.`);
}

// Fungsi menghapus produk berdasarkan id
function hapusProduk(id) {
  const index = produkToko.findIndex(p => p.id === id);

  if (index === -1) {
    console.log(`Produk dengan id ${id} tidak ditemukan.`);
    return;
  }

  const dihapus = produkToko.splice(index, 1)[0];
  console.log(`Produk "${dihapus.nama}" berhasil dihapus.`);
}

// Fungsi menampilkan daftar produk
function tampilkanProduk() {
  console.log("===== DAFTAR PRODUK =====");

  if (produkToko.length === 0) {
    console.log("Belum ada produk.");
    return;
  }

  produkToko.forEach(p => {
    console.log(
      `ID: ${p.id} | ${p.nama} | Harga: Rp${p.harga.toLocaleString("id-ID")} | Stok: ${p.stok}`
    );
  });
}

// ===== Contoh penggunaan =====
tampilkanProduk();

tambahProduk("Monitor", 1800000, 4);
tampilkanProduk();

hapusProduk(2);
tampilkanProduk();

hapusProduk(99); // id tidak ada