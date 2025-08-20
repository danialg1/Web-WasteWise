# Web-WasteWise
WasteWise: Aplikasi Cerdas Sampah

📝 Deskripsi Proyek
WasteWise adalah sebuah aplikasi web sederhana yang dirancang untuk membantu pengguna melacak dan mengelola sampah rumah tangga mereka. Proyek ini dibuat sebagai bagian dari Capstone Project Hacktiv8: Code Generations and Optimization with IBM Granite.

Latar belakang proyek ini adalah kesadaran akan pentingnya pengelolaan sampah yang dimulai dari unit terkecil, yaitu rumah. Seringkali kita tidak sadar seberapa banyak sampah yang kita hasilkan setiap hari. Dengan WasteWise, pengguna dapat dengan mudah mencatat jenis dan jumlah sampah, melihat rekapitulasi data dalam bentuk visual, serta mendapatkan tips praktis tentang cara mengelola sampah secara lebih bijak.

✨ Fitur Utama
Aplikasi ini dilengkapi dengan beberapa fitur inti untuk memberikan pengalaman pengguna yang lengkap:

Pencatatan Sampah Dinamis: Pengguna dapat menambah dan menghapus catatan sampah harian mereka dengan mudah.

Penyimpanan Data Lokal: Semua data sampah disimpan di localStorage browser, sehingga data tidak akan hilang meskipun halaman ditutup atau di-refresh.

Laporan Visual (Grafik): Halaman "Laporan" secara otomatis mengagregasi data dan menampilkannya dalam bentuk grafik batang, memudahkan pengguna untuk melihat jenis sampah mana yang paling banyak dihasilkan.

Navigasi Multi-Halaman: Aplikasi ini memiliki tiga halaman utama (Home, Laporan, Tips) yang dapat diakses melalui menu navigasi bawah tanpa perlu me-reload halaman.

Konten Edukasi: Halaman "Tips" menyediakan informasi praktis dan mudah diterapkan seputar daur ulang dan pengurangan sampah.

💻 Teknologi yang Digunakan
Proyek ini dibangun murni menggunakan teknologi front-end standar, tanpa memerlukan backend atau database eksternal.

HTML5: Untuk struktur konten aplikasi.

CSS3: Untuk styling, tata letak, dan membuat desain yang modern serta responsif.

Vanilla JavaScript (ES6+): Untuk menangani semua logika aplikasi, mulai dari interaksi pengguna, manipulasi DOM, hingga pengelolaan data di localStorage.

Chart.js: Sebuah library JavaScript yang digunakan untuk membuat grafik interaktif di halaman Laporan.

🚀 Cara Menjalankan Proyek
Karena ini adalah proyek front-end murni, tidak ada proses instalasi yang rumit.

Clone repository ini:

git clone https://danialg1.github.io/Web-WasteWise/

Masuk ke direktori proyek:

cd danialg1.github.io

Buka file index.html:
Cukup klik dua kali file index.html dan aplikasi akan langsung terbuka di browser default Anda.

🤖 Penjelasan Dukungan AI (IBM Granite)
Sesuai dengan tema Capstone Project, pengembangan aplikasi WasteWise ini sangat dibantu oleh AI IBM Granite sebagai asisten pemrograman (AI coding assistant). AI tidak menulis keseluruhan kode secara otomatis, melainkan digunakan sebagai alat untuk mempercepat, mengoptimalkan, dan memecahkan masalah selama proses pengembangan.

Berikut adalah rincian bagaimana IBM Granite berperan dalam proyek ini:

Pembuatan Kode Awal (Boilerplate):
Saya menggunakan prompt untuk meminta IBM Granite membuatkan struktur dasar HTML dan kerangka CSS. Contoh prompt: "Buatkan struktur HTML untuk aplikasi pencatat dengan header, tombol utama, dan sebuah daftar kosong." Ini menghemat waktu dalam penulisan kode-kode dasar.

Implementasi Logika JavaScript:
Untuk logika inti, saya memecahnya menjadi beberapa permintaan spesifik kepada AI.

Fungsi CRUD: Saya meminta AI membuatkan fungsi dasar untuk menambah item ke daftar saat tombol diklik dan menyimpannya ke variabel.

Integrasi localStorage: Saya bertanya kepada AI, "Bagaimana cara menyimpan array data ke localStorage dan memuatnya kembali saat halaman dibuka?". AI memberikan contoh kode yang kemudian saya adaptasi ke dalam proyek.

Logika Grafik: Untuk fitur laporan, saya meminta bantuan AI dalam memproses data dari localStorage menjadi format yang bisa diterima oleh library Chart.js. Contoh prompt: "Saya punya array of objects berisi data sampah, bagaimana cara mengelompokkan dan menjumlahkan totalnya berdasarkan kategori 'jenis'?"

Debugging dan Optimasi:
Ketika menghadapi bug atau kode yang kurang efisien, saya menempelkan potongan kode tersebut ke IBM Granite dan bertanya, "Apa yang salah dengan kode ini?" atau "Bagaimana cara membuat fungsi ini lebih efisien?". AI membantu menemukan kesalahan logika dan memberikan saran perbaikan.

Secara keseluruhan, penggunaan IBM Granite telah mempercepat siklus pengembangan secara signifikan. Waktu yang seharusnya habis untuk mencari sintaks atau memecahkan bug kecil dapat dialihkan untuk fokus pada peningkatan fitur, desain antarmuka (UI), dan pengalaman pengguna (UX) yang lebih baik.
