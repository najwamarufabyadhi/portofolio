# Product Requirement Document (PRD)
## Developer Portfolio Hub

---

## 1. Executive Summary

### 1.1 Latar Belakang
Sebagai software developer, menampilkan kapabilitas teknis secara terfragmentasi (hanya via CV teks atau tautan mentah) sering kali gagal memberikan impresi yang kuat kepada perekrut atau klien. Diperlukan satu titik temu sentral (*single source of truth*) yang menampilkan profil profesional, kapabilitas teknis (*tech stack*), dan etalase karya interaktif (*live interactive demo*) yang dapat diakses secara publik dan instan.

### 1.2 Tujuan Produk (Goals)
* **Central Hub:** Berfungsi sebagai agregator utama seluruh proyek digital mandiri yang telah di-deploy di Vercel.
* **Proof of Competence:** Memberikan pembuktian langsung melalui tautan live demo berlatensi rendah dan repositori kode bersih.
* **Frictionless Discovery:** Memudahkan *recruiter*, *hiring manager*, atau calon klien mengevaluasi keahlian teknis dalam waktu kurang dari 60 detik.
* **Automated Delivery:** Terintegrasi penuh dengan alur Git CI/CD sehingga setiap pembaruan proyek otomatis terpublikasi.

---

## 2. Target Pengguna & Persona

* **Hiring Manager / Tech Recruiter:** 
  * *Kebutuhan:* Memindai keahlian dengan cepat, melihat apakah kandidat benar-benar bisa membuat aplikasi yang berjalan (bukan sekadar tutorial), dan mengecek kualitas kode repositori.
  * *Pain Point:* Malas meng-kloning repo atau menjalankan aplikasi secara lokal hanya untuk melihat tampilan visual dan fitur.
* **Calon Klien / Mitra Freelance:**
  * *Kebutuhan:* Melihat bukti visual fungsional dan kapabilitas penyelesaian masalah bisnis secara nyata.
  * *Pain Point:* Dokumen proposal tanpa bukti sistem nyata yang dapat dicoba.

---

## 3. Arsitektur Sistem & Ekosistem Hosting

Sistem portofolio ini mengadopsi model **Federated Hub & Spoke**:

```
                          [ Pengunjung / Recruiter ]
                                     │
                                     ▼
                ┌─────────────────────────────────────────┐
                │  Portfolio Main Hub (Vercel)           │
                │  URL: https://namakamu.vercel.app       │
                └────────────────────┬────────────────────┘
                                     │
         ┌───────────────────────────┼───────────────────────────┐
         ▼                           ▼                           ▼
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│ Proyek A (Demo) │         │ Proyek B (Demo) │         │ Source Code     │
│ App Finansial   │         │ E-Commerce API  │         │ GitHub Repos    │
│ (Vercel App)    │         │ (Vercel App)    │         │ (Public Repos)  │
└─────────────────┘         └─────────────────┘         └─────────────────┘
```

* **Main Hub Repository:** Satu repositori khusus untuk landing page portofolio.
* **Child Projects:** Repositori independen yang masing-masing memiliki pipeline deployment Vercel mandiri.
* **Hyperlink Handshake:** Main Hub hanya menyimpan metadata (judul, deskripsi, tag teknologi, thumbnail URL, live URL, dan repo URL).

---

## 4. Kebutuhan Fungsional (Functional Requirements)

### 4.1 Modul Halaman Utama

| ID | Komponen | Deskripsi Fungsional | Prioritas |
| :--- | :--- | :--- | :--- |
| **FR-01** | **Hero Section** | Menampilkan nama, headline profesional (peran spesifik), deskripsi nilai tambah, dan tombol CTA (*View Projects* & *Contact*). | P0 (Must Have) |
| **FR-02** | **Tech Stack Matrix** | Menampilkan badge/ikon teknologi yang dikategorikan (Frontend, Backend, Database, Tools/DevOps). | P0 (Must Have) |
| **FR-03** | **Project Showcase Hub** | Kartu grid interaktif yang memuat informasi proyek dengan tombol aksi langsung (*Live Demo* & *Source Code*). | P0 (Must Have) |
| **FR-04** | **Project Filter/Tagging** | Filter proyek berdasarkan kategori (misal: *All*, *Full Stack*, *Frontend*, *Utility/API*). | P1 (Should Have) |
| **FR-05** | **Experience & Timeline** | Ringkasan rekam jejak kerja, kontribusi open source, atau riwayat pendidikan terkait. | P2 (Nice to Have) |
| **FR-06** | **Contact & Social Hub** | Tautan langsung ke LinkedIn, GitHub, email resmi (`mailto:`), dan tautan resume/CV (PDF downloadable). | P0 (Must Have) |

### 4.2 Spesifikasi Detail Kartu Proyek (*Project Card*)
Setiap kartu proyek di dalam *Project Showcase* wajib memiliki atribut:
1. **Thumbnail/Mockup:** Tangkapan layar antarmuka rasio 16:9 yang tajam.
2. **Project Badge:** Indikator status (misal: `Production`, `Personal Project`, `Open Source`).
3. **Judul Proyek:** Nama aplikasi yang representatif.
4. **Deskripsi Singkat:** 2–3 kalimat yang menyoroti masalah bisnis yang diselesaikan dan solusi teknisnya.
5. **Tech Stack Pills:** Label teknologi (contoh: `React`, `TailwindCSS`, `PostgreSQL`).
6. **Action Links:**
   * Tombol primer: `Live Demo` (mengarah ke URL Vercel proyek anak dengan `target="_blank"`).
   * Tombol sekunder: `View Code` (mengarah ke repositori GitHub).

---

## 5. Model Data Proyek (JSON Schema)

Untuk memudahkan penambahan proyek di kemudian hari tanpa harus mengubah struktur layout HTML secara manual, data proyek dipisahkan ke dalam struktur data terstandar:

```json
[
  {
    "id": "project-01",
    "title": "Expense & Budget Tracker",
    "slug": "expense-tracker",
    "category": "Full Stack",
    "description": "Aplikasi manajemen anggaran dan pencatatan transaksi harian dengan visualisasi analitik dan ekspor laporan.",
    "thumbnail": "/assets/projects/tracker-preview.png",
    "technologies": ["React", "Tailwind CSS", "Supabase", "Chart.js"],
    "liveUrl": "https://expense-tracker-demo.vercel.app",
    "repoUrl": "https://github.com/username/expense-tracker",
    "featured": true
  },
  {
    "id": "project-02",
    "title": "Company Profile & CMS",
    "slug": "company-cms",
    "category": "Frontend",
    "description": "Website profil korporat interaktif dengan integrasi headless CMS dan skor Google Lighthouse di atas 95.",
    "thumbnail": "/assets/projects/company-preview.png",
    "technologies": ["Next.js", "Tailwind CSS", "Contentful"],
    "liveUrl": "https://company-demo.vercel.app",
    "repoUrl": "https://github.com/username/company-cms",
    "featured": true
  }
]
```

---

## 6. Kebutuhan Non-Fungsional (Non-Functional Requirements)

* **Performance & Core Web Vitals:**
  * Skor Google Lighthouse minimal 90 pada metrik *Performance*, *Accessibility*, *Best Practices*, dan *SEO*.
  * Total ukuran muatan awal (initial bundle) < 500 KB.
* **Responsive Design:**
  * Tampilan sepenuhnya adaptif pada resolusi Mobile (360px+), Tablet (768px+), dan Desktop (1024px+).
* **SEO & Social Share Preview:**
  * Menyediakan tag OpenGraph (`og:image`, `og:title`, `og:description`) dan Twitter Cards agar saat tautan dibagikan ke WhatsApp atau LinkedIn, muncul pratinjau yang representatif.
* **Security & Reliability:**
  * HTTPS otomatis dikelola oleh Vercel.
  * Tautan eksternal wajib dilengkapi atribut `rel="noopener noreferrer"`.

---

## 7. Roadmap Pelaksanaan & Checklists

```
Phase 1: Persiapan Konten & Aset
├── [ ] Kumpulkan 2–3 proyek terbaik yang sudah siap
├── [ ] Deploy masing-masing proyek anak ke Vercel (dapatkan link live)
├── [ ] Bersihkan file README pada tiap repositori GitHub
└── [ ] Ambil tangkapan layar (screenshot) beresolusi tinggi untuk thumbnail

Phase 2: Pengembangan Hub Portofolio
├── [ ] Inisialisasi proyek web utama (HTML/Tailwind atau Next.js)
├── [ ] Bangun layout: Hero, Tech Stack, Projects Grid, Footer
├── [ ] Sambungkan data proyek dari file konfigurasi/JSON
└── [ ] Uji responsivitas pada perangkat mobile dan desktop

Phase 3: Deployment & Optimasi
├── [ ] Buat repositori baru di GitHub (misal: `developer-portfolio`)
├── [ ] Hubungkan repo ke akun Vercel
├── [ ] Konfigurasi domain (default `namakamu.vercel.app` atau domain kustom)
├── [ ] Verifikasi seluruh tombol tautan (Live Demo & Repo)
└── [ ] Uji performa via Google PageSpeed Insights
```

---

## 8. Metrik Keberhasilan (Success Metrics)

1. **Uptime & Accessibility:** Portofolio 100% dapat diakses publik tanpa hambatan CORS atau *dead links*.
2. **Speed to Interactive:** Halaman utama terbuka penuh di bawah 1.5 detik pada jaringan 4G standar.
3. **Completeness:** Setiap proyek unggulan memiliki dokumentasi ringkas, link demo yang berfungsi, dan repositori yang rapi.