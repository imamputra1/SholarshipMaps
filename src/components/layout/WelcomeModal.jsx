import React from 'react';
import Modal from 'react-modal';
// 1. Kita import ikon pesawat dari react-icons
import { IoPaperPlaneOutline } from 'react-icons/io5';

Modal.setAppElement('#root');

const WelcomeModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Welcome Modal"
      
      // 2. Kita atur overlay agar modal-nya ada di tengah layar
      overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4"
      
      // 3. Kita terapkan animasi modal dan style baru
      className="bg-[#1f2937] text-white rounded-2xl shadow-xl p-8 w-full max-w-md 
                 focus:outline-none animate-fade-scale" // <-- Animasi Modal
    >
      {/* 4. Konten baru di dalam modal */}
      <div className="text-center">
        
        {/* 5. Ikon Pesawat dengan Animasi */}
        <div className="mb-6 text-6xl text-[#4E318E] inline-block 
                        animate-fly-in opacity-0"> {/* <-- Animasi Pesawat */}
          <IoPaperPlaneOutline />
        </div>

        {/* 6. Teks Baru Anda */}
        <h1 className="text-2xl font-bold mb-4">DISCLAIMER</h1>
        <p className="text-base text-gray-300 mb-8 leading-relaxed">
          Halo Guys, ini beta-versi dari website kalender kami. Untuk sekarang fiturnya 
          cuman kalender beasiswa, tapi mudah-mudahan ke depan bisa 
          ditambah roadmap belajar untuk kalian yang bingung mau belajar dari mana
          <br/><br/>
          Jadi kalau kalian nemuin masalah atau punya saran pengembangan, nanti gas aja ya di bagian saran.
          Terima kasih!
        </p>

        {/* 7. Tombol Aksi */}
        <button
          onClick={onRequestClose}
          className="bg-[#4e318e] text-white font-bold py-3 px-8 rounded-lg 
                     hover:bg-[#280e60] transition-colors duration-200 
                     text-lg shadow-lg"
        >
          Siapp, Gas!
        </button>
      </div>
    </Modal>
  );
};

export default WelcomeModal;
