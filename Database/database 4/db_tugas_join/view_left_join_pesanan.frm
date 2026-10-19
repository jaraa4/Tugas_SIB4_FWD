TYPE=VIEW
query=select `p`.`id_pelanggan` AS `id_pelanggan`,`p`.`nama_pelanggan` AS `nama_pelanggan`,`p`.`kota` AS `kota`,`ps`.`id_pesanan` AS `id_pesanan`,`ps`.`total_belanja` AS `total_belanja` from (`db_tugas_join`.`pelanggan` `p` left join `db_tugas_join`.`pesanan` `ps` on(`p`.`id_pelanggan` = `ps`.`id_pelanggan`))
md5=29f14a144b92b697fd744668c223919f
updatable=0
algorithm=0
definer_user=root
definer_host=localhost
suid=2
with_check_option=0
timestamp=0001792375377008451
create-version=2
source=SELECT p.id_pelanggan, p.nama_pelanggan, p.kota, ps.id_pesanan, ps.total_belanja\nFROM Pelanggan p\nLEFT JOIN Pesanan ps ON p.id_pelanggan = ps.id_pelanggan
client_cs_name=cp850
connection_cl_name=cp850_general_ci
view_body_utf8=select `p`.`id_pelanggan` AS `id_pelanggan`,`p`.`nama_pelanggan` AS `nama_pelanggan`,`p`.`kota` AS `kota`,`ps`.`id_pesanan` AS `id_pesanan`,`ps`.`total_belanja` AS `total_belanja` from (`db_tugas_join`.`pelanggan` `p` left join `db_tugas_join`.`pesanan` `ps` on(`p`.`id_pelanggan` = `ps`.`id_pelanggan`))
mariadb-version=100432
