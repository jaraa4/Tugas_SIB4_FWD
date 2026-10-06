// index.mjs
import { index, store, destroy } from "./controller.mjs";

const main = () => {

  // TAMBAH 2 DATA (sesuai soal)
  store({
    nama: "Yolla Azzahra Syabilla",
    umur: 30,
    alamat: "Bogor",
    email: "yollaazzahra05@gmail.com"
  });

  store({
    nama: "Hikmal Akbar",
    umur: 31,
    alamat: "Bandung",
    email: "hikmalakbar@gmail.com"
  });

  // TAMPILKAN DATA
  index();

  // HAPUS DATA (contoh hapus index ke-1)
  destroy(1);

  // TAMPILKAN LAGI
  console.log("\nSetelah dihapus:");
  index();
};

main();