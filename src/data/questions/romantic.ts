import type { Question } from '../../types';

export const romanticQuestions: Question[] = [
  {
    id: 1,
    text: "Quand il s'agit d'amour et de sentiments romantiques (pas nécessairement physiques), vers qui vous sentez-vous attiré·e ?",
    options: [
      {
        text: "Uniquement vers des personnes du genre opposé",
        weight: { "hétéroromantique": 1.0 }
      },
      {
        text: "Uniquement vers des personnes du même genre que moi",
        weight: { "homoromantique": 1.0 }
      },
      {
        text: "Vers plusieurs genres différents",
        weight: { "biromantique": 1.0, "panromantique": 0.5 }
      },
      {
        text: "Je ne ressens pas d'attirance romantique ou amoureuse",
        weight: { "aromantique": 1.0 }
      }
    ]
  },
  {
    id: 2,
    text: "Comment se développent vos sentiments amoureux envers quelqu'un ?",
    options: [
      {
        text: "Je peux avoir des sentiments assez rapidement",
        weight: { "hétéroromantique": 0.3, "homoromantique": 0.3, "biromantique": 0.3 }
      },
      {
        text: "Je ne développe des sentiments qu'après avoir créé une connexion émotionnelle forte",
        weight: { "démiromantique": 1.0 }
      },
      {
        text: "C'est variable : parfois rapidement, parfois lentement",
        weight: { "grayromantique": 1.0 }
      },
      {
        text: "Je n'ai jamais ou très rarement ressenti d'amour romantique",
        weight: { "aromantique": 1.0 }
      }
    ]
  }
];