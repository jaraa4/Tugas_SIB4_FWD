<?php
// Inisialisasi variabel awal
$nama = "";
$email = "";
$nilai = "";
$nilaiDisplay = "";
$keterangan = "";
$pesan = "";
$catatan = "";
$grade = "";
$badgeLabel = "";
$statusClass = "";
$scorePercent = 0;
$isProcessed = false;

// PROSES FORM
// Menggunakan pemrosesan langsung dari POST agar kompatibel penuh dengan Vercel Serverless
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['proses'])) {
    $isProcessed = true;
    $nama = htmlspecialchars(trim($_POST['nama'] ?? ''));
    $email = htmlspecialchars(trim($_POST['email'] ?? ''));
    $nilaiInput = trim($_POST['nilai'] ?? '');
    $nilaiDisplay = $nilaiInput;

    if ($nilaiInput === '' || !is_numeric($nilaiInput)) {
        $keterangan = "Tidak Valid";
        $badgeLabel = "Nilai Invalid Bestie! ⚠️";
        $pesan = "Eits, input nilai harus berupa angka yaa. Jangan dikosongkan!";
        $catatan = "Catatan: Pastikan masukkan nilai angka yang benar.";
        $statusClass = "warning";
        $scorePercent = 0;
    } else {
        $nilai = floatval($nilaiInput);
        $scorePercent = max(0, min(100, $nilai));

        if ($nilai < 0 || $nilai > 100) {
            $keterangan = "Tidak Valid";
            $badgeLabel = "Di Luar Jangkauan 🚫";
            $pesan = "Nilai ujian harus berada di antara rentang 0 sampai 100 yaa!";
            $catatan = "Tips: Cek lagi typo pada angka yang kamu masukkan.";
            $statusClass = "warning";
        } else {
            if ($nilai > 70) {
                $keterangan = "Lulus";
                $badgeLabel = "Slay! Lulus 💅✨";
                $pesan = "Kerja bagus! Nilai kamu sudah melewati standar kelulusan. Aura bintangnya makin kelihatan, pertahankan prestasimu yaa!";
                $catatan = "Status: Aman terkendali & Aura +1000 🌟";
                $statusClass = "success";

                if ($nilai >= 90) {
                    $grade = "A+ (Demure & Mindful ⭐)";
                } elseif ($nilai >= 85) {
                    $grade = "A (Peak Academic Era 🏆)";
                } elseif ($nilai >= 78) {
                    $grade = "B+ (Keren Banget 🔥)";
                } else {
                    $grade = "B (Valid No Debat 👍)";
                }
            } else {
                $keterangan = "Remedial";
                $badgeLabel = "Comeback Era! 🔋🌱";
                $pesan = "Nilai masih perlu ditingkatkan, but don't worry! Jangan overthinking, jadikan kesempatan ini buat persiapan yang lebih matang.";
                $catatan = "Tips: Pelajari kembali materi, latihan soal, & diskusi bareng bestie.";
                $statusClass = "remedial";

                if ($nilai >= 60) {
                    $grade = "C (Dikit Lagi Lolos KKM 📚)";
                } elseif ($nilai >= 40) {
                    $grade = "D (Waktunya Glow Up Belajar ⚡)";
                } else {
                    $grade = "E (Yuk Reset & Mulai Lagi 🌿)";
                }
            }
        }
    }
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistem Penilaian Mahasiswa ✨ • Pastel Green Edition</title>
    <!-- Google Fonts & Bootstrap Grid -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- HERO HEADER -->
<header class="hero-header">
    <h1 class="hero-title">Sistem Penilaian Mahasiswa 🌿</h1>
    <p class="hero-subtitle">Input data nilaimu &amp; cek hasil evaluasi with positive vibes only ✨</p>
</header>

<!-- MAIN CONTENT -->
<main class="app-container">
    <div class="row g-4 align-items-stretch">

        <!-- FORM INPUT CARD -->
        <div class="col-lg-6">
            <div class="genz-card">
                <div class="card-title-box">
                    <div class="icon-badge">📝</div>
                    <div>
                        <h3>Form Input Nilai</h3>
                        <p>Isi data diri dan nilai ujian kamu di sini yaa</p>
                    </div>
                </div>

                <form method="POST" action="">
                    <div class="form-group-custom">
                        <label class="form-label-custom">Nama Lengkap ✨</label>
                        <input type="text" 
                               name="nama" 
                               class="input-custom" 
                               placeholder="Contoh: Zahra Zaskia Aulia" 
                               value="<?= htmlspecialchars($nama) ?>" 
                               required>
                    </div>

                    <div class="form-group-custom">
                        <label class="form-label-custom">Email Mahasiswa 💌</label>
                        <input type="email" 
                               name="email" 
                               class="input-custom" 
                               placeholder="contoh@kampus.ac.id" 
                               value="<?= htmlspecialchars($email) ?>" 
                               required>
                    </div>

                    <div class="form-group-custom">
                        <label class="form-label-custom">Nilai Ujian (0 - 100) 🎯</label>
                        <input type="number" 
                               name="nilai" 
                               class="input-custom" 
                               placeholder="Masukkan nilai (0 - 100)" 
                               min="0" 
                               max="100" 
                               step="any"
                               value="<?= htmlspecialchars($nilaiDisplay) ?>" 
                               required>
                    </div>

                    <button type="submit" name="proses" class="btn-genz">
                        <span>Hitung Nilai Sekarang</span> 🚀
                    </button>
                </form>
            </div>
        </div>

        <!-- HASIL PENILAIAN CARD -->
        <div class="col-lg-6">
            <div class="genz-card">
                <div class="card-title-box">
                    <div class="icon-badge">📊</div>
                    <div>
                        <h3>Hasil Evaluasi</h3>
                        <p>Ringkasan performa dan feedback akademik</p>
                    </div>
                </div>

                <?php if (!$isProcessed || $nama === ""): ?>
                    <!-- EMPTY STATE -->
                    <div class="empty-state">
                        <div class="empty-icon">🍵</div>
                        <h4 class="empty-title">Belum Ada Data Dicek</h4>
                        <p class="empty-desc">
                            Silakan isi formulir di samping dan klik tombol <strong>Hitung Nilai</strong> untuk melihat hasil evaluasi kamu! ✨
                        </p>
                    </div>
                <?php else: ?>
                    <!-- PROCESSED RESULT -->
                    <div class="result-banner <?= $statusClass ?>">
                        <div class="banner-emoji">
                            <?php 
                            if ($statusClass === 'success') echo "🎉";
                            elseif ($statusClass === 'remedial') echo "🌱";
                            else echo "⚠️";
                            ?>
                        </div>
                        <div class="banner-info">
                            <h4><?= $badgeLabel ?></h4>
                            <p>Status Kelulusan: <strong><?= $keterangan ?></strong></p>
                        </div>
                    </div>

                    <!-- SUMMARY TILES -->
                    <div class="summary-grid">
                        <div class="tile tile-full">
                            <div class="tile-label">Nama Mahasiswa</div>
                            <div class="tile-val">👤 <?= $nama ?></div>
                        </div>

                        <div class="tile tile-full">
                            <div class="tile-label">Email Terdaftar</div>
                            <div class="tile-val">💌 <?= $email ?></div>
                        </div>

                        <div class="tile">
                            <div class="tile-label">Skor Ujian</div>
                            <div class="score-highlight">
                                <?= $nilai ?> <span class="score-total">/ 100</span>
                            </div>
                        </div>

                        <div class="tile">
                            <div class="tile-label">Grade / Kategori</div>
                            <div class="tile-val"><?= $grade ?: '-' ?></div>
                        </div>
                    </div>

                    <!-- SCORE PROGRESS BAR -->
                    <div class="score-progress-wrapper">
                        <div class="score-progress-labels">
                            <span>0</span>
                            <span>Target KKM: 70</span>
                            <span>100</span>
                        </div>
                        <div class="score-progress-bar">
                            <div class="score-progress-fill fill-<?= $statusClass ?>" style="width: <?= $scorePercent ?>%;"></div>
                        </div>
                    </div>

                    <!-- MOTIVATION / PESAN -->
                    <div class="motivation-box">
                        <p><?= $pesan ?></p>
                    </div>

                    <?php if ($catatan): ?>
                        <div class="note-box mb-3">
                            <span>📌</span>
                            <span><?= $catatan ?></span>
                        </div>
                    <?php endif; ?>

                    <!-- RESET / CHECK AGAIN -->
                    <a href="index.php" class="btn-reset">
                        <span>🔄</span> Cek Nilai Lain / Reset Form
                    </a>
                <?php endif; ?>

            </div>
        </div>

    </div>
</main>

<!-- FOOTER -->
<footer class="genz-footer">
    <div class="footer-pill">
        <span>💚</span>
        <span>© 2026 Zahra Zaskia Aulia Putri </span>
    </div>
</footer>

</body>
</html>