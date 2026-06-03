# Employee Attendance Admin Dashboard

Aplikasi admin dashboard sederhana untuk mengelola data absensi karyawan menggunakan React.js dan Tailwind CSS.

## ✨ Features

### ✅ CRUD Operations

- **Create**: Menambahkan data absensi karyawan baru
- **Read**: Menampilkan daftar data absensi dalam bentuk tabel
- **Update**: Memperbarui data absensi yang sudah ada
- **Delete**: Menghapus data absensi dengan konfirmasi

### ✅ Advanced Features

- **Sorting**: Mengurutkan data berdasarkan Nama, Tanggal Absen, atau Jam Masuk
- **Pagination**: Menampilkan 5 data per halaman dengan navigasi halaman
- **Form Validation**: Validasi input dengan pesan error yang jelas
- **Empty State**: Pesan saat tidak ada data
- **Responsive Design**: Tampilan responsif di mobile, tablet, dan desktop

## 🛠️ Tech Stack

- **Frontend Framework**: React.js 19
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Data Storage**: Browser localStorage (no backend required)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx
│   ├── AttendanceTable.jsx
│   ├── AttendanceForm.jsx
│   ├── Pagination.jsx
│   ├── DeleteModal.jsx
│   └── EmptyState.jsx
├── pages/              # Page components
│   ├── Dashboard.jsx
│   ├── CreateAttendance.jsx
│   └── EditAttendance.jsx
├── layouts/            # Layout components
│   └── MainLayout.jsx
├── utils/              # Utility functions
│   ├── localStorage.js
│   ├── pagination.js
│   └── sorting.js
├── routes/             # Router configuration
│   └── index.jsx
├── App.jsx
└── main.jsx
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ installed
- npm atau yarn package manager

### Installation

1. Clone repository

```bash
git clone <repository-url>
cd technical-test-juru
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Open browser dan navigasi ke `http://localhost:5173/`

### Building for Production

```bash
npm run build
```

Output akan tersimpan di folder `dist/`

## 📖 Usage

### Adding Attendance Record

1. Klik tombol "+ Add Attendance" di navbar
2. Isi semua field form (wajib):
   - Nama (minimal 3 karakter)
   - Alamat
   - Jenis Kelamin
   - Tanggal Absen
   - Jam Masuk
   - Jam Keluar
3. Klik "Tambah Absensi" untuk menyimpan

### Editing Attendance Record

1. Klik tombol edit (pensil) di tabel
2. Form akan pre-filled dengan data yang ada
3. Update data yang diperlukan
4. Klik "Update Absensi" untuk menyimpan perubahan

### Deleting Attendance Record

1. Klik tombol delete (tempat sampah) di tabel
2. Konfirmasi penghapusan di modal
3. Data akan dihapus dari sistem

### Sorting Data

1. Klik pada header kolom yang bisa di-sort (Nama ↕, Tanggal Absen ↕, Jam Masuk ↕)
2. Data akan mengurutkan ascending (↑), klik lagi untuk descending (↓)

### Pagination

1. Di bawah tabel, gunakan tombol nomor halaman atau panah untuk navigasi
2. Setiap halaman menampilkan 5 data

## ✔️ Form Validation Rules

- **Nama**: Wajib diisi, minimal 3 karakter
- **Alamat**: Wajib diisi
- **Jenis Kelamin**: Pilih dari dropdown (Laki-laki / Perempuan)
- **Tanggal Absen**: Wajib diisi
- **Jam Masuk**: Wajib diisi
- **Jam Keluar**: Wajib diisi dan harus lebih besar dari Jam Masuk

## 💾 Data Storage

Data disimpan di browser localStorage dengan struktur:

```json
[
  {
    "id": 1,
    "nama": "Ilham Arifin",
    "alamat": "Jalan Merdeka No 123, Depok, Jawa Barat",
    "jenisKelamin": "Laki-laki",
    "tanggalAbsen": "2026-06-03",
    "jamMasuk": "08:00",
    "jamKeluar": "17:00"
  }
]
```

## 📊 Build Size

Production build:

- HTML: 0.46 KB (0.30 KB gzip)
- CSS: 14.08 KB (3.57 KB gzip)
- JS: 300.36 KB (94.80 KB gzip)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- Tidak memerlukan backend atau database
- Data bersifat lokal di browser (akan hilang jika cache dihapus)
- Cocok untuk demo dan testing
- Dapat di-deploy ke Vercel, Netlify, atau hosting statis lainnya

## 📄 License

MIT
