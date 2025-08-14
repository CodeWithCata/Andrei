import React, { useState, useRef } from 'react';
import muzica from './assets/muzica.mp3';
const Muzica = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPlaying(!playing);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onClick={toggleMusic}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '5px',
          border: '1px solid #888',
          backgroundColor: playing ? '#ff4d4d' : '#4CAF50',
          color: '#fff',
          transition: 'all 0.3s',
        }}
      >
        {playing ? 'Oprește muzica' : 'Pornește muzica'}
      </button>

      <audio ref={audioRef} loop>
        <source src={muzica} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Muzica;
