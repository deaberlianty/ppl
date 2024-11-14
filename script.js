// Data contoh untuk mahasiswa
const mahasiswaData = [
    { NIM: '123456', nama: 'John Doe' },
    { NIM: '234567', nama: 'Jane Smith' },
    { NIM: '345678', nama: 'Alice Johnson' },
];

// Data contoh untuk KHS
const khsData = [
    { NIM: '123456', IPK: '3.5', IPS: [3.0, 3.5, 3.7, 3.8] },
    { NIM: '234567', IPK: '3.8', IPS: [3.5, 3.8, 3.9, 4.0] },
    { NIM: '345678', IPK: '3.2', IPS: [3.0, 3.2, 3.1, 3.3] },
];

// Data contoh untuk mata kuliah berdasarkan semester dengan SKS
const mataKuliahData = {
    1: [
        { kode: 'CS101', nama: 'Pemrograman Dasar', sks: 3 },
        { kode: 'CS102', nama: 'Matematika Dasar', sks: 3 },
        { kode: 'CS103', nama: 'Pengantar Teknologi Informasi', sks: 2 },
        { kode: 'CS104', nama: 'Dasar-Dasar Komputer', sks: 2 }
    ],
    2: [
        { kode: 'CS201', nama: 'Struktur Data', sks: 3 },
        { kode: 'CS202', nama: 'Algoritma', sks: 3 },
        { kode: 'CS203', nama: 'Sistem Basis Data', sks: 3 },
        { kode: 'CS204', nama: 'Jaringan Komputer', sks: 3 }
    ],
    3: [
        { kode: 'CS301', nama: 'Basis Data', sks: 3 },
        { kode: 'CS302', nama: 'Jaringan Komputer', sks: 3 },
        { kode: 'CS303', nama: 'Rekayasa Perangkat Lunak', sks: 3 },
        { kode: 'CS304', nama: 'Analisis dan Perancangan Sistem', sks: 3 }
    ],
    4: [
        { kode: 'CS401', nama: 'Rekayasa Perangkat Lunak', sks: 3 },
        { kode: 'CS402', nama: 'Sistem Operasi', sks: 3 },
        { kode: 'CS403', nama: 'Keamanan Jaringan', sks: 3 },
        { kode: 'CS404', nama: 'Pengembangan Web', sks: 3 }
    ],
    5: [
        { kode: 'CS501', nama: 'Kecerdasan Buatan', sks: 3 },
        { kode: 'CS502', nama: 'Pengolahan Citra', sks: 3 },
        { kode: 'CS503', nama: 'Data Mining', sks: 3 },
        { kode: 'CS504', nama: 'Cloud Computing', sks: 3 }
    ],
    6: [
        { kode: 'CS601', nama: 'Keamanan Jaringan', sks: 3 },
        { kode: 'CS602', nama: 'Data Mining', sks: 3 },
        { kode: 'CS603', nama: 'Big Data', sks: 3 },
        { kode: 'CS604', nama: 'Mobile Programming', sks: 3 }
    ],
    7: [
        { kode: 'CS701', nama: 'Cloud Computing', sks: 3 },
        { kode: 'CS702', nama: 'Big Data', sks: 3 },
        { kode: 'CS703', nama: 'Internet of Things', sks: 3 },
        { kode: 'CS704', nama: 'Blockchain', sks: 3 }
    ],
    8: [
        { kode: 'CS801', nama: 'Mobile Programming', sks: 3 },
        { kode: 'CS802', nama: 'Web Development', sks: 3 },
        { kode: 'CS803', nama: 'DevOps', sks: 3 },
        { kode: 'CS804', nama: 'Proyek Akhir', sks: 3 }
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
            row.innerHTML = `<td>${mk.kode}</td><td>${mk.nama}</td><td>${mk.sks}</td><td>${semesterKRS}</td>`;
            tbody.appendChild(row);
        });
    } else {
        alert('Silakan masukkan NIM dan pilih semester.');
    }
}

// Fungsi untuk menampilkan grafik IPK dan IPS
function tampilkanGrafik() {
    const nimKHS = document.getElementById('nimKHS').value;
    const khsMahasiswa = khsData.find(khs => khs.NIM === nimKHS);

    if (khsMahasiswa) {
        const ctx = document.getElementById('khsChart').getContext('2d');
        const ips = khsMahasiswa.IPS;

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4'],
                datasets: [{
                    label: 'IPS',
                    data: ips,
                    borderColor: 'rgba(220, 53, 69, 1)',
                    backgroundColor: 'rgba(220, 53, 69, 0.2)',
                    fill: true,
                }, {
                    label: 'IPK',
                    data: [khsMahasiswa.IPK, khsMahasiswa.IPK, khsMahasiswa.IPK, khsMahasiswa.IPK],
                    borderColor: 'rgba(0, 123, 255, 1)',
                    backgroundColor: 'rgba(0, 123, 255, 0.2)',
                    fill: true,
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Nilai'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Semester'
                        }
                    }
                }
            }
        });
    } else {
        alert('Data KHS tidak ditemukan untuk NIM tersebut.');
    }
}

// Fungsi untuk menampilkan data mata kuliah
function tampilkanDataMataKuliah() {
    const tbody = document.querySelector('#data-mata-kuliah-table tbody');
    tbody.innerHTML = ''; // Kosongkan tabel sebelum menampilkan data baru

    for (const semester in mataKuliahData) {
        mataKuliahData[semester].forEach(mk => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${semester}</td><td>${mk.kode}</td><td>${mk.nama}</td><td>${mk.sks}</td>`;
            tbody.appendChild(row);
        });
    }
}

// Panggil fungsi untuk menampilkan data saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    tampilkanDataMahasiswa();
    tampilkanDataMataKuliah(); // Tambahkan ini untuk menampilkan data mata kuliah

    // Event listener untuk tombol tampilkan KRS
    document.getElementById('tampilkanKRSButton').addEventListener('click', tampilkanKRS);

    // Event listener untuk tombol lihat grafik
    document.getElementById('lihatGrafikButton').addEventListener('click', tampilkanGrafik);
});
