import React, { useState } from "react";
import FlipCard from "./FlipCard";
import Confetti from "./Confetti";
import { PartyPopper, Gift, Cake, Heart, Music2, Sparkles } from "lucide-react";
import FancyPhotoCard from "./FancyPhotoCard";
import Lumanare from "./Lumanare";
import Andrei1 from "./assets/Andrei1.png";
import Andrei2 from "./assets/Andrei2.png";
import Andrei3 from "./assets/Andrei3.png";
import Andrei4 from "./assets/Andrei4.png";
import Andrei5 from "./assets/Andrei5.png";
import Muzica from "./Muzica";
const images = [
  Andrei1,
  Andrei2,
  Andrei3,
  Andrei4,
  Andrei5,  
]





export default function BirthdayCardAndrei() {
  const [celebrate, setCelebrate] = useState(false);

  const cards = [
    { title: "Pentru Andrei", frontIcon: <PartyPopper size={28} />, frontText: "Ziua ta trebuie să fie plină de râsete și voie bună!", backText: "La mulți ani, Andrei! Îți doresc multă sănătate, fericire și succes în tot ce faci, frate! Să ai parte de zâmbete, momente frumoase și amintiri de neuitat alături de cei dragi!Iti doresc o zii frumoasa la fel ca echipa ta!!<333 CAINIII" },
    
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">La mulți ani, Andrei! 🎉</h1>
      <p className="mb-6 text-base sm:text-lg opacity-80 text-center max-w-xl">Azi împlinești 17 ani — hai să facem ziua asta specială!</p>

      <button
        onClick={() => setCelebrate(!celebrate)}
        className="rounded-2xl bg-pink-500 px-6 py-3 font-semibold text-white shadow-lg hover:bg-pink-600 transition mb-8"
      >
        {celebrate ? "Oprește confetti" : "Porneste confetti"}
      </button>
      <p className="text-2xl font-bold text-red-600 text-center animate-pulse shadow-lg p-4 rounded-lg bg-gray-100">
  Pornește imnul Dinamo – apasă jos!
</p>

      <Muzica />
      <Confetti celebrate={celebrate} />
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mt-4 font-bold ">
        {cards.map((card, i) => (
          <FlipCard
            key={i}
            index={i}
            title={card.title}
            frontIcon={card.frontIcon}
            frontText={card.frontText}
            backText={card.backText}
          />
        ))}
   {images.map((img, index) => (
        <FancyPhotoCard
          key={index}
          imageSrc={img}
          title={img.title}
          description={img.description}
          index={index}
        />
      ))}

      </div>
      <Lumanare />
    </div>
  );
}
