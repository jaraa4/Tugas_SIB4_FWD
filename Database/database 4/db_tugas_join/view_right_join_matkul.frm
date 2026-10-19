TYPE=VIEW
query=select `d`.`nama_dosen` AS `nama_dosen`,`mk`.`id_mk` AS `id_mk`,`mk`.`nama_mk` AS `nama_mk` from (`db_tugas_join`.`matakuliah` `mk` left join `db_tugas_join`.`dosen` `d` on(`d`.`id_dosen` = `mk`.`id_dosen`))
md5=71e5fbf96a5fa2eb342724485147bc75
updatable=0
algorithm=0
definer_user=root
definer_host=localhost
suid=2
with_check_option=0
timestamp=0001792375598393867
create-version=2
source=SELECT d.nama_dosen, mk.id_mk, mk.nama_mk\nFROM Dosen d\nRIGHT JOIN MataKuliah mk ON d.id_dosen = mk.id_dosen
client_cs_name=cp850
connection_cl_name=cp850_general_ci
view_body_utf8=select `d`.`nama_dosen` AS `nama_dosen`,`mk`.`id_mk` AS `id_mk`,`mk`.`nama_mk` AS `nama_mk` from (`db_tugas_join`.`matakuliah` `mk` left join `db_tugas_join`.`dosen` `d` on(`d`.`id_dosen` = `mk`.`id_dosen`))
mariadb-version=100432
