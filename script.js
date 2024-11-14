// Contoh data
const mahasiswa = [
    { nim: '101', nama: 'Alice' },
    { nim: '102', nama: 'Bob' },
    { nim: '103', nama: 'Charlie' },
];

const ipkData = [
    { nim: '101', ipk: 3.5 },
    { nim: '102', ipk: 3.7 },
    { nim: '103', ipk: 3.2 },
];

const krsData = [
    { nim: '101', matakuliah: 'Matematika' },
    { nim: '101', matakuliah: 'Fisika' },
    { nim: '102', matakuliah: 'Kimia' },
    { nim: '103', matakuliah: ' Biologi' },
];

const matakuliahData = [
    { kode: 'MAT101', nama: 'Matematika' },
    { kode: 'FIS101', nama: 'Fisika' },
    { kode: 'KIM101', nama: 'Kimia' },
    { kode: 'BIO101', nama: 'Biologi' },
];

// Menampilkan data mahasiswa
function tampilkanDataMahasiswa() {
    const tbody = document.querySelector('#data-mahasiswa tbody');
    mahasiswa.forEach(mhs => {
        const row = `<tr><td>${mhs.nim}</td><td>${mhs.nama}</td></tr>`;
        tbody.innerHTML += row;
    });
}

// Menampilkan data IPK
function tampilkanDataIPK() {
    const tbody = document.querySelector('#data-ipk tbody');
    ipkData.forEach(data => {
        const row = `<tr><td>${data.nim}</td><td>${data.ipk}</td></tr>`;
        tbody.innerHTML += row;
    });
}

// Menampilkan data KRS
function tampilkanDataKRS() {
    const tbody = document.querySelector('#data-krs tbody');
    krsData.forEach(data => {
        const row = `<tr><td>${data.nim}</td><td>${data.matakuliah}</td></tr>`;
        tbody.innerHTML += row;
    });
}

// Menampilkan data mata kuliah
function tampilkanDataMataKuliah() {
    const tbody = document.querySelector('#data-matakuliah tbody');
    matakuliahData.forEach(mk => {
        const row = `<tr><td>${mk.kode}</td><td>${mk.nama}</td></tr>`;
        tbody.innerHTML += row;
    });
}

// Fungsi untuk menghitung IPK dan IPS
function hitungIPK() {
    const nim = document.getElementById('nim-input').value;
    const ipk = ipkData.find(data => data.nim === nim);
    if (ipk) {
        const ips = ipk.ipk * 0.9; // Contoh perhitungan IPS
        tampilkanGrafik(ipk.ipk, ips);
    } else {
        alert('NIM tidak ditemukan');
    }
}

// Menampilkan grafik IPK dan IPS
function tampilkanGrafik(ipk, ips) {
    const ctx = document.getElementById('grafik-ipk-ips').getContext('2d');
    const grafik = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['IPK', 'IPS'],
            datasets: [{
                label: 'Nilai',
                data: [ipk, ips],
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Memanggil fungsi untuk menampilkan data saat halaman dimuat
window.onload = function() {
    tampilkanDataMahasiswa();
    tampilkanDataIPK();
    tampilkanDataKRS();
    tampilkanDataMataKuliah();
};