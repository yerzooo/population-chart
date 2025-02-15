const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

// Data penduduk Indonesia 2024 (statis)
const populationData = [
    { province: "Aceh", population: 5300000 },
    { province: "Sumatera Utara", population: 14600000 },
    { province: "Sumatera Barat", population: 5500000 },
    { province: "Riau", population: 6700000 },
    { province: "Jambi", population: 3600000 },
    { province: "Sumatera Selatan", population: 8500000 },
    { province: "Lampung", population: 9300000 },
    { province: "DKI Jakarta", population: 11000000 },
    { province: "Jawa Barat", population: 49000000 },
    { province: "Jawa Tengah", population: 38000000 },
    { province: "DI Yogyakarta", population: 3700000 },
    { province: "Jawa Timur", population: 40000000 },
    { province: "Bali", population: 4400000 },
    { province: "Kalimantan Barat", population: 5200000 },
    { province: "Kalimantan Timur", population: 3900000 },
    { province: "Sulawesi Selatan", population: 9400000 },
    { province: "Papua", population: 5000000 }
];

// Endpoint API untuk mengembalikan data populasi
app.get("/api/population", (req, res) => {
    res.json(populationData);
});

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
	console.log(`Open index.html in your browser`);
});
