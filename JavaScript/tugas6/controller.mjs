// controller.mjs
import users from "./data.mjs";

// LIHAT DATA (pakai map)
const index = () => {
  console.log("\n=== DATA USER ===");
  users.map((user, i) => {
    console.log(
      `${i + 1}. ${user.nama} | ${user.umur} | ${user.alamat} | ${user.email}`
    );
  });
};

// TAMBAH DATA
const store = (user) => {
  users.push(user);
  console.log(`Data ${user.nama} berhasil ditambahkan`);
};

// HAPUS DATA
const destroy = (index) => {
  if (index >= 0 && index < users.length) {
    let deleted = users.splice(index, 1);
    console.log(`Data ${deleted[0].nama} berhasil dihapus`);
  } else {
    console.log("Index tidak valid");
  }
};

export { index, store, destroy };