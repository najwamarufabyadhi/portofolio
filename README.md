# Developer Portfolio Hub 2025
> **Konsep Visual:** *Retro Game Menu Meets Sleek Cyber-Editorial*  
> **Arsitektur:** Next.js 14 (App Router) + Tailwind CSS + Federated Vercel Hub  
> **Pemilik Portofolio:** Muhammad Najwa Maruf Abyadhi

---

## 1. Ikhtisar Portofolio

Repositori ini adalah implementasi dari **PRD Developer Portfolio Hub** dan panduan desain antarmuka **Retro Game Menu Meets Sleek Cyber-Editorial**.

### 🎮 Layar Interaktif:
1. **Screen 1 (The Start Screen):** Layar pembuka bernuansa arcade game dengan banner melengkung Crimson Red (`#8C1123`), tipografi tebal `PORTFOLIO 2025`, dan tombol navigasi vertikal (`> START`, `> OPTIONS / RESUME`, `> EXIT // GITHUB`).
2. **Screen 2 (Profile & Competency Matrix):** Foto portrait berbingkai pendar cahaya biru (*blue rim lighting*), ringkasan narasi *About Me*, *Glossy Tech App Tiles*, riwayat pendidikan, dan indikator *Tech Fluency*.
3. **Screen 3 (Recap Project Showcase Bento Grid):** Grid asimetris etalase proyek independen dengan filter kategori instan, pencarian live, dan tombol aksi melayang (*LIVE DEMO* ke Vercel & *SOURCE CODE* ke GitHub).
4. **Screen 4 (Contact & Outro Showcase):** Kartu kontak dengan fitur 1-click copy email, tautan repositori, tipografi raksasa `THANK YOU 2025`, dan arsip portofolio tahunan (`2023`, `2024`, `2025`).

---

## 2. Cara Menjalankan Proyek Secara Lokal

Pastikan Node.js ($\ge 18$) telah terpasang di komputer Anda.

```bash
# 1. Masuk ke direktori proyek
cd "MuhammadNajwaMarufAbyadhi"

# 2. Pasang dependensi
npm install

# 3. Jalankan development server
npm run dev
```

Buka peramban Anda di [http://localhost:3000](http://localhost:3000).

---

## 3. Manajemen Konten Berbasis Data (Data-Driven JSON)

Anda tidak perlu mengubah kode komponen Next.js untuk memperbarui data portofolio.

### Menambahkan Proyek Baru
Cukup buka file `data/projects.json` dan tambahkan entri proyek baru:

```json
{
  "id": "project-05",
  "title": "Nama Aplikasi Keren",
  "slug": "nama-aplikasi",
  "category": "Full Stack",
  "badge": "Production",
  "description": "Deskripsi singkat 2-3 kalimat mengenai masalah bisnis yang diselesaikan dan teknologi kuncinya.",
  "thumbnail": "/assets/images/projects/project-1.svg",
  "technologies": ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
  "liveUrl": "https://aplikasikamu.vercel.app",
  "repoUrl": "https://github.com/najwamaruf/aplikasikamu",
  "featured": true,
  "highlights": [
    "Fitur unggulan 1",
    "Fitur unggulan 2"
  ]
}
```

### Memperbarui Profil Diri
Buka file `data/profile.json` untuk mengganti bio, kontak email, link LinkedIn, GitHub, dan riwayat pengalaman.

### Mengganti Foto Portrait
Ketika foto portrait Anda sudah siap:
1. Simpan foto PNG transparan Anda ke folder `public/assets/images/portrait.png`.
2. Di file komponen (`StartScreen.tsx`, `ProfileSection.tsx`, `ContactOutro.tsx`), ganti sumber gambar ke `/assets/images/portrait.png`.

---

## 4. Deployment ke Vercel

Portofolio ini dioptimalkan 100% untuk ekosistem Vercel:

1. Buat repositori baru di GitHub (misal: `developer-portfolio-hub`).
2. Push repositori lokal ini ke GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete retro game cyber developer portfolio hub"
   git branch -M main
   git remote add origin https://github.com/username/developer-portfolio-hub.git
   git push -u origin main
   ```
3. Buka [Vercel Dashboard](https://vercel.com), klik **Add New Project**, dan pilih repositori Anda.
4. Klik **Deploy**. Vercel akan otomatis mendeteksi konfigurasi Next.js dan menghasilkan URL publik berlatensi ultra-rendah (`https://namakamu.vercel.app`).

