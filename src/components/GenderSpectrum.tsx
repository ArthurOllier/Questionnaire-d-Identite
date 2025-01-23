import React, { useState } from 'react';
import { Info, Heart, X } from 'lucide-react';

interface GenderIdentity {
  name: string;
  color: string;
  description: string;
}

const genderIdentities: GenderIdentity[] = [
  {
    name: "Non-Binaire",
    color: "#9C59D1",
    description: "Une identité de genre ne s'inscrivant pas dans la binarité homme/femme traditionnelle"
  },
  {
    name: "Genre Fluide",
    color: "#FF69B4",
    description: "Une identité de genre qui varie au fil du temps, pouvant se déplacer entre différents points du spectre"
  },
  {
    name: "Agenre",
    color: "#000000",
    description: "Absence d'identité de genre ou neutralité par rapport au concept de genre"
  },
  {
    name: "Trans",
    color: "#5BCEFA",
    description: "Personne dont l'identité de genre diffère du sexe assigné à la naissance"
  },
  {
    name: "Queer",
    color: "#FF4500",
    description: "Terme parapluie désignant une identité ou expression de genre non-normative"
  },
  {
    name: "Demi-Genre",
    color: "#FFD700",
    description: "Connection partielle à un genre particulier, ressentant partiellement une identité de genre"
  },
  {
    name: "Bigender",
    color: "#E6E6FA",
    description: "Identification simultanée à deux genres, que ce soit en alternance ou en permanence"
  },
  {
    name: "Androgyne",
    color: "#40E0D0",
    description: "Expression ou identité mélangeant les caractéristiques traditionnellement associées au masculin et au féminin"
  },
  {
    name: "Cisgenre",
    color: "#7F7F7F",
    description: "Personne dont l'identité de genre correspond au sexe assigné à la naissance"
  },
  {
    name: "Genre Neutre",
    color: "#98FB98",
    description: "Expression ou identité se situant en dehors du spectre traditionnel masculin-féminin"
  }
];

function GenderSpectrum() {
  const [selectedIdentity, setSelectedIdentity] = useState<GenderIdentity | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [hoveredIdentity, setHoveredIdentity] = useState<string | null>(null);

  const calculatePosition = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI;
    const radius = 160;
    const x = Math.cos(angle) * radius + radius + 40;
    const y = Math.sin(angle) * radius + radius + 40;
    return { x, y };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#2a1b3d] to-[#1a1a2e] flex items-center justify-center p-4 sm:p-8">
      <div className="relative bg-[#ffffff05] backdrop-blur-xl rounded-2xl p-6 sm:p-8 max-w-4xl w-full border border-white/10">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Spectre des Identités de Genre
          </h1>
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors px-4 py-2 rounded-full bg-white/5 hover:bg-white/10"
            aria-label={showInfo ? "Masquer les informations" : "Afficher les informations"}
          >
            {showInfo ? <X size={18} /> : <Info size={18} />}
            <span>{showInfo ? "Fermer" : "À propos"}</span>
          </button>
        </div>

        {showInfo && (
          <div className="absolute inset-x-6 top-28 z-10 bg-[#2a1b3d]/95 rounded-2xl p-6 backdrop-blur-xl border border-white/10 shadow-xl transition-all duration-300 ease-out">
            <p className="mb-4 text-white/90 leading-relaxed">
              Ce spectre représente différentes identités de genre de manière non exhaustive.
              Chaque personne peut vivre et exprimer son genre de manière unique.
            </p>
            <p className="flex items-center gap-2 text-white/80">
              <Heart size={16} className="text-pink-400" />
              <span>Survolez ou touchez les cercles pour explorer les identités.</span>
            </p>
          </div>
        )}

        <div className="relative mx-auto" style={{ height: '400px', width: '400px' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full"></div>
          <svg width="400" height="400" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Cercle central décoratif */}
            <circle
              cx="200"
              cy="200"
              r="160"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="opacity-20"
            />

            {/* Lignes de connexion */}
            {genderIdentities.map((identity, index) => {
              const pos = calculatePosition(index, genderIdentities.length);
              return (
                <line
                  key={`line-${identity.name}`}
                  x1="200"
                  y1="200"
                  x2={pos.x}
                  y2={pos.y}
                  stroke="white"
                  strokeOpacity={hoveredIdentity === identity.name ? "0.3" : "0.1"}
                  strokeWidth={hoveredIdentity === identity.name ? "2" : "1"}
                  className="transition-all duration-300"
                />
              );
            })}

            {/* Points d'identité */}
            {genderIdentities.map((identity, index) => {
              const pos = calculatePosition(index, genderIdentities.length);
              const isHovered = hoveredIdentity === identity.name;
              const isSelected = selectedIdentity?.name === identity.name;
              
              return (
                <g 
                  key={identity.name}
                  onMouseEnter={() => setHoveredIdentity(identity.name)}
                  onMouseLeave={() => setHoveredIdentity(null)}
                  onClick={() => setSelectedIdentity(identity)}
                  className="cursor-pointer"
                >
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isHovered || isSelected ? "28" : "24"}
                    fill={identity.color}
                    className="transition-all duration-300"
                    filter="url(#glow)"
                    style={{
                      transform: `translate(${pos.x}px, ${pos.y}px) scale(${isHovered ? 1.1 : 1})`,
                      transformOrigin: "center"
                    }}
                  />
                  <text
                    x={pos.x}
                    y={pos.y + 40}
                    textAnchor="middle"
                    fill="white"
                    fontSize={isHovered ? "14" : "12"}
                    className="transition-all duration-300 pointer-events-none font-medium"
                    style={{ opacity: isHovered ? 1 : 0.7 }}
                  >
                    {identity.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Panel d'information */}
        <div 
          className={`fixed bottom-0 left-0 right-0 sm:relative sm:mt-8 bg-[#2a1b3d]/95 backdrop-blur-xl p-6 rounded-t-2xl sm:rounded-2xl border-t sm:border border-white/10 transition-all duration-500 ease-out transform ${
            selectedIdentity ? 'translate-y-0' : 'translate-y-full sm:translate-y-0 sm:opacity-0'
          }`}
        >
          {selectedIdentity && (
            <>
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-10 h-10 rounded-full border-2 border-white/20"
                  style={{ backgroundColor: selectedIdentity.color }}
                />
                <h2 className="text-2xl font-bold text-white">
                  {selectedIdentity.name}
                </h2>
                <button
                  onClick={() => setSelectedIdentity(null)}
                  className="ml-auto sm:hidden p-2 hover:bg-white/10 rounded-full"
                >
                  <X size={20} className="text-white/80" />
                </button>
              </div>
              <p className="text-white/90 leading-relaxed">
                {selectedIdentity.description}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default GenderSpectrum;