import React from 'react';
import { Heart, RefreshCw } from 'lucide-react';

interface ResultsFooterProps {
  onRestart: () => void;
}

export function ResultsFooter({ onRestart }: ResultsFooterProps) {
  return (
    <div className="pt-6 flex flex-col items-center gap-4">
      <p className="text-white/60 text-sm text-center max-w-md">
        <Heart size={16} className="inline-block mr-2 text-pink-400" />
        Ces résultats sont indicatifs et ne définissent pas qui vous êtes.
        Votre identité est valide quelle qu'elle soit.
      </p>
      <button
        onClick={onRestart}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
      >
        <RefreshCw size={16} />
        Recommencer le questionnaire
      </button>
    </div>
  );
}