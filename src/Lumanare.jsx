import React, { useState } from "react";

const Lumanare = () => {
  const [aprinsa, setAprinsa] = useState(true);

  const toggleLumanare = () => {
    setAprinsa(!aprinsa);
  };

  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Flacara animata */}
      <div
        style={{
          width: "40px",
          height: "80px",
          backgroundColor: aprinsa ? "orange" : "transparent",
          borderRadius: "50%",
          marginBottom: "10px",
          boxShadow: aprinsa ? "0 0 30px 10px orange" : "none",
          transition: "all 0.3s",
          animation: aprinsa ? "clatina 0.5s infinite alternate" : "none"
        }}
      ></div>

      {/* Corpul lumanarii */}
      <div
        style={{
          width: "60px",
          height: "120px",
          backgroundColor: "#fff",
          border: "2px solid #ccc",
          borderRadius: "10px",
          marginBottom: "20px",
          boxShadow: aprinsa ? "0 0 20px 5px rgba(255, 165, 0, 0.5)" : "none",
          transition: "all 0.3s",
        }}
      ></div>

      {/* Buton */}
      <button
        onClick={toggleLumanare}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "1px solid #888",
          backgroundColor: aprinsa ? "#ffcc00" : "#888",
          color: aprinsa ? "#000" : "#fff",
          transition: "all 0.3s",
        }}
      >
        {aprinsa ? "Stinge lumânarea" : "Aprinde lumânarea"}
      </button>

      {/* Mesaj */}
      {!aprinsa && (
        <p style={{ 
          marginTop: "20px", 
          fontSize: "18px", 
          color: "#555", 
          textAlign: "center",
          maxWidth: "300px"
        }}>
          Mulțumesc pentru momentele frumoase! La mulți ani, 17 ani fericiți!! 🎉🕯️
        </p>
      )}

      {/* Stiluri CSS pentru animatie */}
      <style>{`
        @keyframes clatina {
          0% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(-2px) rotate(-2deg); }
          50% { transform: translateX(2px) rotate(2deg); }
          75% { transform: translateX(-2px) rotate(-1deg); }
          100% { transform: translateX(2px) rotate(1deg); }
        }
      `}</style>
    </div>
  );
};

export default Lumanare;
