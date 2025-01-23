import React from 'react';

interface Identity {
  id: string;
  label: string;
  color: string;
}

const identities: Identity[] = [
  { id: 'agender', label: 'Agenre', color: '#000000' },
  { id: 'cisgender', label: 'Cisgenre', color: '#7F7F7F' },
  { id: 'intersex', label: 'Intersexe', color: '#FFD800' }
];

interface IdentitySelectorProps {
  selectedIdentity: string | null;
  onSelect: (id: string) => void;
}

export function IdentitySelector({ selectedIdentity, onSelect }: IdentitySelectorProps) {
  return (
    <div className="flex flex-col gap-3 bg-white/5 rounded-lg p-4">
      <h3 className="text-white text-lg font-medium mb-2">Identité</h3>
      {identities.map((identity) => (
        <button
          key={identity.id}
          onClick={() => onSelect(identity.id)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg transition-all
            ${selectedIdentity === identity.id 
              ? 'bg-white/20 ring-2 ring-white/50' 
              : 'bg-white/10 hover:bg-white/15'}
          `}
        >
          <div 
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: identity.color }}
          />
          <span className="text-white">{identity.label}</span>
        </button>
      ))}
    </div>
  );
}