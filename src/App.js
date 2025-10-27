import React, { useState, useEffect } from "react"; // <-- 1. Tambahkan useState & useEffect
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Navbar.jsx"; // Ini adalah Navbar Anda
import WelcomeModal from "./components/layout/WelcomeModal.jsx"; // <-- 2. Import WelcomeModal

// Import Halaman (Menggunakan HomePage.jsx Anda)
import HomePage from "./pages/HomePage"; // <-- 3. Kembali menggunakan HomePage
import CalenderPage from "./pages/AboutMe.jsx";
import RoadmapPage from "./pages/RoadmapPage";
import SaranPage from "./pages/SaranPage";

function App() {
  // 4. Tambahkan state untuk mengontrol modal
  const [welcomeModalIsOpen, setWelcomeModalIsOpen] = useState(false);

  // 5. Tambahkan logika untuk mengecek "kunjungan pertama"
  useEffect(() => {
    // Cek di sessionStorage apakah user sudah pernah berkunjung di Sesi ini
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      // Jika belum, buka modal
      setWelcomeModalIsOpen(true);
      // Dan set flag 'hasVisited' agar tidak muncul lagi
      sessionStorage.setItem("hasVisited", "true");
    }
    // Array kosong [] berarti useEffect ini hanya berjalan SATU KALI
  }, []);

  // Fungsi untuk menutup modal
  const closeWelcomeModal = () => setWelcomeModalIsOpen(false);

  return (
    <BrowserRouter>
      {/* 6. Render Modal di sini (di luar Layout) */}
      <WelcomeModal
        isOpen={welcomeModalIsOpen}
        onRequestClose={closeWelcomeModal}
      />

      {/* Sisa aplikasi Anda */}
      <Layout>
        {" "}
        {/* Ini adalah Navbar Anda */}
        <Routes>
          <Route path="/" element={<HomePage />} />{" "}
          {/* <-- 7. Tetap menggunakan HomePage */}
          <Route path="/calender" element={<CalenderPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/saran" element={<SaranPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
