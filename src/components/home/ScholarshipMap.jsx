import React, { useState } from 'react';
// HAPUS SEMUA IMPORT react-tooltip dan ReactDOMServer
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import ReactCountryFlag from 'react-country-flag';
import ScholarshipModal from './ScholarshipModal.jsx'; 
import allScholarships from '../../data/CalendarEvents.json'; // KEMBALI KE DATA UTAMA
import CountryInfoBox from './CountryInfoBox.jsx'; // <-- IMPORT KOMPONEN BARU KITA

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// (OPTIMASI) Kita proses data beasiswa UTAMA kita
const scholarshipMap = new Map();
allScholarships.forEach((s) => {
  const countryKey = s.country.toLowerCase();
  if (!scholarshipMap.has(countryKey)) {
    scholarshipMap.set(countryKey, {
      countryCode: s.countryCode,
      names: [], // Daftar nama beasiswa
    });
  }
  scholarshipMap.get(countryKey).names.push(s.name);
});


const ScholarshipMap = () => {
  // State untuk modal (pop-up besar)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [filteredScholarships, setFilteredScholarships] = useState([]);
  
  // --- INI LOGIKA BARU KITA ---
  // State untuk kotak info hover (pop-up kecil)
  const [hoveredCountryData, setHoveredCountryData] = useState(null);

  // Fungsi untuk KLIK (membuka modal besar)
  const handleCountryClick = (geo) => {
    const countryName = geo.properties.NAME;
    if (!countryName) return; 

    // INI DEBUGGING CONSOLE ANDA (SEKARANG PASTI BERJALAN)
    console.log("NAMA RESMI PETA:", countryName); 

    const data = scholarshipMap.get(countryName.toLowerCase());
    
    setSelectedCountry(countryName);
    // Kita isi modal dengan data yang benar
    setFilteredScholarships(data ? data.names : []); 
    setModalIsOpen(true); 
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // --- FUNGSI BARU UNTUK HOVER ---
  const handleMouseEnter = (geo) => {
    const countryName = geo.properties.NAME;
    if (!countryName) return;
    
    // Cari data di map kita
    const data = scholarshipMap.get(countryName.toLowerCase());
    
    // Jika ada data, set state-nya
    if (data) {
      setHoveredCountryData({
        countryName: countryName,
        countryCode: data.countryCode,
        scholarships: data.names
      });
    }
  };

  // --- FUNGSI BARU SAAT KURSOR KELUAR ---
  const handleMouseLeave = () => {
    setHoveredCountryData(null); // Sembunyikan kotak info
  };

return (
    // ⬇️ ANDA SUDAH MENAMBAHKAN PEMBUKA INI (BAGUS) ⬇️
    <> 
      <h1 className="text-white text-5xl absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        INI ADALAH FILE YANG BENAR
      </h1>
    
      {/* Sisa kode Anda (div peta) */}
      <div className="w-full h-[calc(100vh-4rem)] bg-[#101419] relative">
        <ComposableMap 
          projectionConfig={{ scale: 170, center: [10,-17] }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies
                .filter(geo => geo.properties.NAME !== "Antartica" && geo.properties.NAME !== "Antarctica") 
                .map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    
                    style={{
                      default: { fill: "#404a5c", stroke: "#606a7c", outline: "none" },
                      hover: { fill: "#4e318e", stroke: "#606a7c", outline: "none", cursor: "pointer" },
                      pressed: { fill: "#280e60", stroke: "#606a7c", outline: "none" },
                    }}
                    
                    onClick={() => handleCountryClick(geo)} 
                    onMouseEnter={() => handleMouseEnter(geo)}
                    onMouseLeave={handleMouseLeave}
                  />
                ))
            }
          </Geographies>
        </ComposableMap>

        <CountryInfoBox data={hoveredCountryData} />

        <ScholarshipModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          countryName={selectedCountry}
          scholarships={filteredScholarships}
        />
      </div>
      
    </> // ⬅️ ANDA LUPA MENAMBAHKAN PENUTUP INI 
  );
};

export default ScholarshipMap;
