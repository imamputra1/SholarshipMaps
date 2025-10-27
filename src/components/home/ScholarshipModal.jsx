
import React from 'react';
import Modal from 'react-modal';
import ReactCountryFlag from 'react-country-flag';

// Set the app element for accessibility
Modal.setAppElement('#root');

export default function ScholarshipModal({ isOpen, onRequestClose, countryName, scholarships }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Scholarship Details"
      className="bg-gray-800 text-white rounded-lg shadow-xl p-6 max-w-2xl mx-auto my-20 focus:outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
    >
      <h2 className="text-2xl font-bold mb-4">Beasiswa di {countryName}</h2>
      <div className="space-y-4">
        {scholarships.length > 0 ? (
          scholarships.map((scholarship) => (
            <div key={scholarship.id} className="bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <ReactCountryFlag
                  countryCode={scholarship.countryCode}
                  svg
                  style={{
                    width: '2em',
                    height: '2em',
                  }}
                  title={scholarship.country}
                />
                <h3 className="text-xl font-semibold ml-3">{scholarship.name}</h3>
              </div>
              <p className="text-sm text-gray-400 mb-1">Level: {scholarship.levels.join(', ')}</p>
              <p className="text-gray-300 text-sm">{scholarship.description}</p>
            </div>
          ))
        ) : (
          <p>Tidak ada informasi beasiswa untuk negara ini.</p>
        )}
      </div>
      <button 
        onClick={onRequestClose} 
        className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Tutup
      </button>
    </Modal>
  );
}
