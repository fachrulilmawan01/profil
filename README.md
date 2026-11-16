# Website Profil & Portofolio Personal - Fachrul Ilmawan

Website profil profesional dan portofolio interaktif **Fachrul Ilmawan** (Project Manager & SAP SuccessFactors Consultant), dibangun dengan desain modern, responsif, dan elegan.

---

## 🌟 Fitur Utama

- **Desain Modern & Responsif**: Tampilan responsif optimal di ponsel, tablet, maupun layar desktop besar.
- **Dark Mode / Light Mode**: Mendukung peralihan tema terang dan gelap secara mulus dengan penyimpanan preferensi (`localStorage`).
- **Filter Portofolio Proyek**: Pengelompokan proyek interaktif berdasarkan kategori (*Semua*, *SAP & SuccessFactors*, *Enterprise Systems & PM*, dan *Custom Apps*).
- **Interactive Career Timeline**: Visualisasi perjalanan karier profesional dari peran awal hingga posisi Project Manager terkini.
- **Aksi Kontak Cepat**: Integrasi langsung ke WhatsApp (`wa.me`), email (`mailto:`), fitur *Salin Email* dengan feedback notifikasi instan.
- **Print / PDF Friendly**: Tombol cetak langsung (`window.print()`) yang diformat khusus untuk mencetak atau menyimpan profil sebagai Resume/CV PDF profesional.

---

## 📂 Struktur Berkas

```
profil/
├── index.html        # Halaman utama profil & portofolio
├── css/
│   └── style.css     # Gaya khusus, glassmorphism, efek animasi, dan format cetak CV
├── js/
│   └── main.js       # Logika interaktif (tema, filter proyek, navigasi mobile, salin email)
├── package.json      # Konfigurasi proyek & skrip server lokal
└── README.md         # Dokumentasi proyek
```

---

## 🚀 Cara Menjalankan Secara Lokal

Anda dapat membuka file `index.html` langsung di browser, atau menjalankan server lokal:

### Menggunakan Node.js / npx:
```bash
# Menggunakan npx serve
npx serve . -p 3000

# Atau buka browser di: http://localhost:3000
```

### Menggunakan Python:
```bash
python3 -m http.server 3000
```

---

## 🌐 Opsi Deployment

Website ini merupakan *static website* murni yang dapat di-deploy secara instan dan gratis ke:
- **GitHub Pages**: Cukup aktifkan GitHub Pages dari tab Settings repository Anda.
- **Vercel / Netlify**: Hubungkan repository GitHub dan langsung deploy dalam hitungan detik.

---

&copy; 2026 Fachrul Ilmawan. All rights reserved.
