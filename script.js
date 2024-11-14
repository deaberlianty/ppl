// Data contoh untuk mahasiswa
const mahasiswaData = [
    { NIM: '123456', nama: 'John Doe' },
    { NIM: '234567', nama: 'Jane Smith' },
    { NIM: '345678', nama: 'Alice Johnson' },
];

// Data contoh untuk KHS
const khsData = [
    { NIM: '123456', IPK: '3.5' },
    { NIM: '234567', IPK: '3.8' },
    { NIM: '345678', IPK: '3.2' },
];

// Data contoh untuk mata kuliah berdasarkan semester
const mataKuliahData = {
    1: [
        { kode: 'CS101', nama: 'Pemrograman Dasar' },
        { kode: 'CS102', nama: 'Matematika Dasar' }
    ],
    2: [
        { kode: 'CS201', nama: 'Struktur Data' },
        { kode: 'CS202', nama: 'Algoritma' }
    ],
    3: [
        { kode: 'CS301', nama: 'Basis Data' },
        { kode: 'CS302', nama: 'Jaringan Komputer' }
    ],
    4: [
        { kode: 'CS401', nama: 'Rekayasa Perangkat Lunak' },
        { kode: 'CS402', nama: 'Sistem Operasi' }
    ],
    5: [
        { kode: 'CS501', nama: 'Kecerdasan Buatan' },
        { kode: 'CS502', nama: 'Pengolahan Citra' }
    ],
    6: [
        { kode: 'CS601', nama: 'Keamanan Jaringan' },
        { kode: 'CS602', nama: 'Data Mining' }
    ],
    7: [
        { kode: 'CS701', nama: 'Cloud Computing' },
        { kode: 'CS702', nama: 'Big Data' }
    ],
    8: [
        { kode: 'CS801', nama: 'Mobile Programming' },
        { kode: 'CS802', nama: 'Web Development' }
    ],
};

// Fungsi untuk menampilkan data mahasiswa
function tampilkanDataMahasiswa() {
    const tbody = document.querySelector('#data-mahasiswa tbody');
    mahasiswaData.forEach(mhs => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${mhs.NIM}</td><td>${mhs.nama}</td>`;
        tbody.appendChild(row);
    });
}

// Fungsi untuk menampilkan data KRS berdasarkan NIM dan semester
function tampilkanKRS() {
    const nimKRS = document.getElementById('nimKRS').value;
    const semesterKRS = document.getElementById('semesterKRS').value;
    const tbody = document.querySelector('#data-krs tbody');
    tbody.innerHTML = ''; // Kosongkan tabel sebelum menampilkan data baru

    if (nimKRS && semesterKRS) {
        const mataKuliah = mataKuliahData[semesterKRS] || [];
        mataKuliah.forEach(mk => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${mk.kode}</td><td>${mk.nama}</td><td>${semesterKRS}</td>`;
            tbody.appendChild(row);
        });
    } else {
        alert('Silakan masukkan NIM dan pilih semester.');
    }
}

// Panggil fungsi untuk menampilkan data saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    tampilkanDataMahasiswa();

    // Event listener untuk tombol tampilkan KRS
    document.getElementById('tampilkanKRSButton').addEventListener('click', tampilkanKRS);
});
