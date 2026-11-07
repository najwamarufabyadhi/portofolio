# Spesifikasi Desain & Panduan Antarmuka (UI/UX)
**Konsep Visual:** *Retro Game Menu Meets Sleek Cyber-Editorial*  
**Dokumen Referensi:** `portfolio 2025.jpeg`  
**Target Output:** Web Portfolio Hub Responsif & Modern

---

## 1. Filosofi & Arah Gaya Visual

Desain ini menggabungkan dua identitas visual yang sangat kuat:
1. **Navigasi Layar Start Game Retro / Arcade:** Nuansa menu interaktif dengan aksi minimalis (`START`, `OPTIONS`, `EXIT`), teks status mono/semi-extended, dan transisi antar-layar yang teatrikal.
2. **Atmospheric Dark Sci-Fi / Cyber Aesthetic:** Latar belakang hitam pekat dengan pencahayaan radial lembut (*blue rim lighting* & *vignette*), dipadukan dengan aksen merah darah (*crimson*) yang kontras untuk menciptakan fokus visual instan pada subjek foto.

---

## 2. Palet Warna (Color Palette & Tokens)

### 2.1 Warna Utama (Base & Background)
* **Space Obsidian (Background Utama):** `#060B11`  
  *Warna dasar hitam kebiruan gelap yang memberi kedalaman ruang hampa.*
* **Abyssal Blue (Radial Glow / Ambient):** `#0F2744` s.d. `#1E4E7A`  
  *Digunakan sebagai efek cahaya pendar melingkar di belakang foto profil dan sudut layar.*
* **Pure Pitch Black (Surface Contrast):** `#020406`  
  *Warna latar kartu atau batas tepi.*

### 2.2 Warna Aksen & Highlight
* **Crimson Accent (Focal Banner):** `#8C1123` hingga `#A3162A`  
  *Digunakan pada blok banner melengkung di hero section untuk memotong dominasi warna biru/hitam.*
* **Cyan / Ice Glow (Hover & Active Indicator):** `#58A6FF` / `#79C0FF`  
  *Digunakan untuk tombol pill yang aktif pada navbar, outline seleksi menu, dan link aktif.*

### 2.3 Tipografi & Teks
* **Text Primary (Off-White):** `#E6EDF3` (Teks judul tebal dan heading utama).
* **Text Muted (Steel Gray):** `#8B949E` (Teks deskripsi, label tahun, dan status).
* **Text Dim / Micro-label:** `#525D69` (Metadata kecil, versi, copyright).

### 2.4 Token CSS & Tailwind Preset
```css
:root {
  --bg-dark: #060b11;
  --bg-card: rgba(15, 39, 68, 0.25);
  --accent-crimson: #8c1123;
  --accent-blue-glow: #1e4e7a;
  --highlight-cyan: #79c0ff;
  --text-main: #e6edf3;
  --text-muted: #8b949e;
}
```

---

## 3. Sistem Tipografi (Typography)

* **Display Heading (Judul Utama & Judul Proyek):**
  * *Font Rekomendasi:* **Impact**, **Syne (Bold/Extra Bold)**, atau **Anton**
  * *Karakteristik:* Uppercase, huruf tinggi padat, *condensed/wide heavy*, tanpa serif, memberi kesan tegas dan berani.
* **Secondary / Interactive Labels:**
  * *Font Rekomendasi:* **Chakra Petch**, **Orbitron**, atau **Space Grotesk**
  * *Karakteristik:* Monospace modern, semi-futuristik, digunakan untuk menu `START`, `OPTIONS`, `EXIT`, dan indikator status seperti `[COMMUNICATION]`.
* **Body / Narasi:**
  * *Font Rekomendasi:* **Inter** atau **Plus Jakarta Sans**
  * *Karakteristik:* Sangat mudah dibaca pada kontras tinggi, tracking netral.

---

## 4. Navigasi Terapung (Floating Capsule Navbar)

Pada layar 2 hingga 4, navigasi mengadopsi model *Pill Capsule Menu* di bagian atas tengah layar:

* **Struktur:** Kontainer semi-transparan berbentuk kapsul lonjong (`rounded-full`) dengan backdrop-blur.
* **Elemen:**
  * `PROFIL`
  * `PROJECT`
  * `CONTACT PERSON`
* **Status Aktif:** Tombol yang dipilih memiliki latar belakang putih lembut (`#E6EDF3`) atau biru es (`#79C0FF`) dengan teks gelap kontras (`#060B11`), sedangkan tombol non-aktif berwujud teks abu-abu transparan.

---

## 5. Rincian Tata Letak Tiap Layar (Screen-by-Screen Layout)

### Screen 1: The Start Screen (Layar Pembuka Game-Like)
* **Header Kiri Atas:** Monogram personal / logo inisial putih bersudut lancip.
* **Hero Banner Tengah:**
  * Sisi kiri: Blok kapsul setengah melingkar berwarna **Crimson Red (`#8C1123`)** yang membingkai foto portrait/avatar pengguna.
  * Sisi kanan: Teks raksasa **`PORTFOLIO`** (Condensed Bold) bersanding dengan angka tahun `2025` berbobot lebih ramping.
  * Sub-baris: Kotak status kecil putih diikuti label peran profesional, misalnya: `■ FULL STACK DEVELOPER` atau `■ CREATIVE ENGINEER`.
* **Menu Interaktif Bawah:**
  * Posisi: Tengah bawah (*centered alignment*).
  * Menu berderet vertikal:
    * `START` (Trigger untuk scroll otomatis atau transisi masuk ke layar profil)
    * `OPTIONS` / `RESUME` (Membuka modal download CV atau ringkasan teknis)
    * `EXIT` / `GITHUB` (Membuka profil repositori GitHub eksternal)

---

### Screen 2: Profile & Competency Matrix
* **Layout Grid:** 2 Kolom asimetris (40% Kiri, 60% Kanan).
* **Kolom Kiri (Visual & Identitas Diri):**
  * Label salam: `HELLO, I AM` di atas nama besar tebal.
  * Foto tubuh/portrait dengan pencahayaan rim-light biru terang di bagian belakang (*glowing halo effect*).
* **Kolom Kanan (Informasi & Keahlian):**
  * **Section `ABOUT ME`:** Paragraf monokrom ringkas (2–3 kalimat) tentang latar belakang, filosofi berkarya, dan adaptabilitas.
  * **Section `SOFTWARE / TECH SKILLS`:** 
    * Deretan ikon aplikasi / logo teknologi berbentuk kubus/rounded-box mengkilap (*glossy app tiles*).
    * Contoh: `React`, `Next.js`, `Tailwind`, `TypeScript`, `Node.js`, `Vercel`.
  * **Dual Grid Informasi Bawah (2 Kolom Kecil):**
    * *Kolom 1 - Education / Background:* Riwayat studi atau sertifikasi formal.
    * *Kolom 2 - Experience / Key Achievements:* Angka pencapaian penting (misal: "Traffic 50k+ users", "15+ Production Apps").
    * *Kolom 3 - Language / Tech Fluency:* Progress bar persentase sederhana dengan gaya arcade.

---

### Screen 3: Recap Project Showcase (The Gallery Grid)
* **Header Section:**
  * Judul: `RECAP PROJECT 2025` bersanding dengan tag status unik (misal: `PRODUCTION READY` atau `VERCEL HOSTED`).
* **Sistem Grid Proyek (Masonry / Asymmetric Bento Grid):**
  * Menggunakan variasi ukuran kartu:
    * **Kartu Vertikal (Tall):** Untuk showcase antarmuka mobile / UI poster.
    * **Kartu Horizontal (Wide):** Untuk showcase dashboard analitik, web portal, atau sistem e-commerce.
    * **Kartu Persegi (Square):** Untuk eksplorasi komponen visual, micro-interactions, atau branding identitas.
* **Hover State & Interaktivitas:**
  * Kartu memiliki border halus (`border-slate-800`).
  * Saat kartu disorot kursor (*hover*), muncul overlay gelap tipis dengan 2 tombol aksi mengambang:
    1. **`LIVE DEMO`** (Link langsung ke Vercel).
    2. **`GITHUB`** (Link ke kode sumber).

---

### Screen 4: Contact & Outro Showcase
* **Layout Pembagian 2 Area Besar:**
  * **Sisi Kiri (Direct Contact Card):**
    * Avatar profil melingkar dengan border glow.
    * Daftar kanal komunikasi berikon (LinkedIn, GitHub, Email, X/Twitter, WhatsApp) dengan tipografi monospace rapi.
  * **Sisi Kanan (Closing Statement):**
    * Teks raksasa penutup: `THANK YOU` dan tahun berjalan `2025`.
    * Ilustrasi aksen 3D / elemen grafis tangan kreatif dengan pita film yang mengalir di sudut bawah.
* **Mini Archive Bar (Bawah Kiri):**
  * Thumbnail arsip karya tahun-tahun sebelumnya (`2023`, `2024`) untuk menunjukkan evolusi dan konsistensi karir.

---

## 6. Efek Visual & Spesifikasi Animasi (Micro-Interactions)

1. **Ambient Glow (Backdrop):**
   * Gunakan filter CSS blur tinggi: `filter: blur(120px);` dengan opasitas `0.15` - `0.3` untuk lingkaran cahaya biru di belakang foto.
2. **Arcade Menu Hover:**
   * Pada menu `START`, `OPTIONS`, saat di-hover tambahkan kursor berbentuk chevron panah `> START` dengan transisi perpindahan posisi 4px ke kanan.
3. **Card Tilt Effect (Opsional):**
   * Efek 3D tilt ringan saat kursor berada di atas kartu proyek galeri.
4. **Smooth Section Snapping:**
   * Scroll vertikal didukung oleh `scroll-snap-type: y mandatory` sehingga setiap section mendarat persis seperti berganti layar panggung/game.

---

## 7. Rekomendasi Struktur File Implementasi

Untuk merealisasikan desain ini ke dalam kode:

```text
├── index.html          # Single-page struktur lengkap (Hero, Profile, Showcase, Outro)
├── assets/
│   ├── images/         # Foto portrait cutout (PNG transparan), mockup proyek
│   ├── icons/          # SVG Tech stack (React, Node, Vercel, dll.)
│   └── fonts/          # Font lokal jika tidak menggunakan Google Fonts
└── styles/
    └── main.css        # Konfigurasi gradient, glow effects, dan custom scrollbar
```