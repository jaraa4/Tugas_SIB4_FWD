TYPE=VIEW
query=select `m`.`id_mahasiswa` AS `id_mahasiswa`,`m`.`nama_mahasiswa` AS `nama_mahasiswa`,`m`.`prodi` AS `prodi`,`k`.`nama_matakuliah` AS `nama_matakuliah`,`k`.`sks` AS `sks` from (`db_tugas_join`.`mahasiswa` `m` left join `db_tugas_join`.`krs` `k` on(`m`.`id_mahasiswa` = `k`.`id_mahasiswa`))
md5=874f9b445c060292cf30eb3a079259bf
updatable=0
algorithm=0
definer_user=root
definer_host=localhost
suid=2
with_check_option=0
timestamp=0001792375246085398
create-version=2
source=SELECT m.id_mahasiswa, m.nama_mahasiswa, m.prodi, k.nama_matakuliah, k.sks \nFROM Mahasiswa m \nLEFT JOIN KRS k ON m.id_mahasiswa = k.id_mahasiswa
client_cs_name=cp850
connection_cl_name=cp850_general_ci
view_body_utf8=select `m`.`id_mahasiswa` AS `id_mahasiswa`,`m`.`nama_mahasiswa` AS `nama_mahasiswa`,`m`.`prodi` AS `prodi`,`k`.`nama_matakuliah` AS `nama_matakuliah`,`k`.`sks` AS `sks` from (`db_tugas_join`.`mahasiswa` `m` left join `db_tugas_join`.`krs` `k` on(`m`.`id_mahasiswa` = `k`.`id_mahasiswa`))
mariadb-version=100432
