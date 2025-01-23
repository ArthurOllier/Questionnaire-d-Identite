import React from 'react';
import { Heart, ShieldCheck, AlertTriangle } from 'lucide-react';

interface AllyScoreCardProps {
  score: number;
}

export function AllyScoreCard({ score }: AllyScoreCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "from-green-400 to-emerald-500";
    if (score >= 60) return "from-yellow-400 to-orange-500";
    if (score >= 40) return "from-orange-400 to-red-500";
    return "from-red-400 to-pink-500";
  };

  const getScoreIcon = (score: number) => {
    if (score >= 60) return <ShieldCheck className="text-emerald-400" />;
    return <AlertTriangle className="text-orange-400" />;
  };

  const getScoreMessage = (score: number) => {
    if (score >= 80) {
      return "Excellent ! Vous êtes un·e véritable allié·e de la communauté LGBTQIA+. Votre soutien actif et votre compréhension font une réelle différence.";
    }
    if (score >= 60) {
      return "Vous êtes sur la bonne voie ! Continuez à vous informer et à soutenir la communauté. Chaque petit geste compte.";
    }
    if (score >= 40) {
      return "Il y a encore de la place pour progresser. Informez-vous davantage sur les enjeux LGBTQIA+ et remettez en question certains préjugés.";
    }
    return "Votre score indique qu'il serait bénéfique d'approfondir votre compréhension des enjeux LGBTQIA+. L'écoute et l'ouverture d'esprit sont essentielles.";
  };

  return (
    <div className="bg-white/10 rounded-xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-medium text-white">Score Allié</h3>
          {getScoreIcon(score)}
        </div>
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          {Math.round(score)}%
        </div>
      </div>
      
      <div className="w-full bg-white/10 rounded-full h-3 mb-6">
        <div 
          className={`bg-gradient-to-r ${getScoreColor(score)} h-3 rounded-full transition-all duration-300`}
          style={{ width: `${score}%` }}
        />
      </div>

      <p className="text-white/80 text-sm leading-relaxed mb-4">
        {getScoreMessage(score)}
      </p>

      <div className="flex items-center gap-2 text-white/60 text-sm">
        <Heart size={14} className="text-pink-400" />
        <span>Le soutien aux personnes LGBTQIA+ fait une réelle différence dans leur vie.</span>
      </div>
    </div>
  );
}