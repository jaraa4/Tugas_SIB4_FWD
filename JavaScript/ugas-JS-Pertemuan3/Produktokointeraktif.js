const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array produk toko
let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

function tambahProduk(nama, harga, stok) {
  const idBaru =
    produkToko.length > 0 ? Math.max(...produkToko.map(p => p.id)) + 1 : 1;
  produkToko.push({ id: idBaru, nama: nama, harga: harga, stok: stok });
  console.log(`Produk "${nama}" berhasil ditambahkan dengan id ${idBaru}.`);
}

function hapusProduk(id) {
  const index = produkToko.findIndex(p => p.id === id);
  if (index === -1) {
    console.log(`Produk dengan id ${id} tidak ditemukan.`);
    return;
  }
  const dihapus = produkToko.splice(index, 1)[0];
  console.log(`Produk "${dihapus.nama}" berhasil dihapus.`);
}

function tampilkanProduk() {
  console.log("\n===== DAFTAR PRODUK =====");
  if (produkToko.length === 0) {
    console.log("Belum ada produk.");
    return;
  }
  produkToko.forEach(p => {
    console.log(
      `ID: ${p.id} | ${p.nama} | Harga: ${formatRupiah(p.harga)} | Stok: ${p.stok}`
    );
  });
}

// Cari produk berdasarkan nama (tidak peka huruf besar/kecil) atau id
function cariProduk(kata) {
  const hasil = produkToko.filter(
    p =>
      p.nama.toLowerCase().includes(kata.toLowerCase()) ||
      String(p.id) === kata
  );

  if (hasil.length === 0) {
    console.log(`Produk "${kata}" tidak ditemukan.`);
    return;
  }

  hasil.forEach(p => {
    console.log(
      `${p.nama} (ID ${p.id}) | Harga: ${formatRupiah(p.harga)} | Stok: ${p.stok}`
    );
  });
}

function tanya(pertanyaan) {
  return new Promise(resolve => rl.question(pertanyaan, resolve));
}

async function menu() {
  while (true) {
    console.log("\n===== MENU TOKO =====");
    console.log("1. Tampilkan semua produk");
    console.log("2. Cari harga produk");
    console.log("3. Tambah produk");
    console.log("4. Hapus produk");
    console.log("0. Keluar");

    const pilih = await tanya("Pilih menu: ");

    if (pilih === "1") {
      tampilkanProduk();
    } else if (pilih === "2") {
      const kata = await tanya("Masukkan nama atau id produk: ");
      cariProduk(kata.trim());
    } else if (pilih === "3") {
      const nama = await tanya("Nama produk: ");
      const harga = Number(await tanya("Harga: "));
      const stok = Number(await tanya("Stok: "));
      if (!nama.trim() || isNaN(harga) || isNaN(stok)) {
        console.log("Input tidak valid.");
      } else {
        tambahProduk(nama.trim(), harga, stok);
      }
    } else if (pilih === "4") {
      const id = Number(await tanya("Masukkan id produk yang dihapus: "));
      hapusProduk(id);
    } else if (pilih === "0") {
      console.log("Terima kasih!");
      rl.close();
      break;
    } else {
      console.log("Pilihan tidak valid.");
    }
  }
}

menu();