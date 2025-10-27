import React from 'react';
import ReactCountryFlag from 'react-country-flag';

// Komponen ini akan menerima prop 'data'
// 'data' bisa berisi { countryName, countryCode, scholarships } atau null
const CountryInfoBox = ({ data }) => {
  return (
    // Ini adalah wrapper kotak info
    // Kita posisikan di 'bottom-4 left-4' (pojok kiri bawah)
    <div 
      className="absolute bottom-4 left-4 bg-[#1f2937] text-white 
                 p-6 rounded-lg shadow-lg w-64
                 transition-all duration-300 ease-out
                 "
      // Kita gunakan 'opacity' dan 'transform' untuk animasi muncul/hilang
      style={{
        opacity: data ? 1 : 0,
        transform: data ? 'translateY(0)' : 'translateY(20px)',
        pointerEvents: data ? 'auto' : 'none', // Biar tidak bisa diklik saat tersembunyi
      }}
    >
      {/* Konten di dalam kotak. 
        Kita cek apakah 'data' ada sebelum menampilkannya.
      */}
      {data ? (
        <>
          {/* 1. BENDERA */}
          <ReactCountryFlag
            countryCode={data.countryCode}
            svg
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '80px',
              borderRadius: '4px',
              objectFit: 'cover',
            }}
            className="mb-4"
          />

          {/* 2. NAMA NEGARA */}
          <h2 className="text-xl font-bold uppercase mb-3">
            {data.countryName}
          </h2>

          {/* 3. LIST BEASISWA */}
          <h3 className="text-lg font-semibold mb-2">List Beasiswa:</h3>
          <ol className="list-decimal list-inside text-gray-300">
            {data.scholarships.length > 0 ? (
              data.scholarships.map((scholarship, index) => (
                <li key={index} className="truncate">
                  {scholarship}
                </li>
              ))
            ) : (
              <li className="text-gray-500">Belum ada data</li>
            )}
          </ol>
        </>
      ) : (
        // Ini adalah placeholder jika tidak ada negara yang di-hover
        <p className="text-gray-400">Arahkan kursor ke negara...</p>
      )}
    </div>
  );
};

export default CountryInfoBox;
