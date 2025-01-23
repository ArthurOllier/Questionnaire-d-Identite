import type { Question } from '../../types';

export const allyQuestions: Question[] = [
  {
    id: 1,
    text: "Comment réagissez-vous quand quelqu'un utilise des pronoms différents de ceux que vous attendiez ?",
    options: [
      {
        text: "J'utilise les pronoms demandés sans hésitation et je corrige respectueusement les autres si nécessaire",
        weight: { ally: 1.0 }
      },
      {
        text: "J'essaie d'utiliser les bons pronoms mais je trouve ça parfois difficile",
        weight: { ally: 0.5 }
      },
      {
        text: "Je continue d'utiliser les pronoms qui me semblent 'corrects' biologiquement",
        weight: { ally: 0.0 }
      }
    ]
  },
  {
    id: 2,
    text: "Que pensez-vous de la visibilité LGBTQIA+ dans les médias et la société ?",
    options: [
      {
        text: "C'est important et nécessaire pour la représentation et l'acceptation sociale",
        weight: { ally: 1.0 }
      },
      {
        text: "C'est acceptable tant que ce n'est pas trop mis en avant",
        weight: { ally: 0.3 }
      },
      {
        text: "Je trouve qu'il y en a trop et que c'est de l'endoctrinement",
        weight: { ally: 0.0 }
      }
    ]
  },
  {
    id: 3,
    text: "Comment réagiriez-vous si un·e ami·e proche vous confiait qu'iel est trans ?",
    options: [
      {
        text: "Je le soutiendrais activement et m'informerais pour mieux l'accompagner",
        weight: { ally: 1.0 }
      },
      {
        text: "J'accepterais mais aurais besoin de temps pour m'y habituer",
        weight: { ally: 0.6 }
      },
      {
        text: "Je prendrais mes distances car je ne suis pas à l'aise avec ça",
        weight: { ally: 0.0 }
      }
    ]
  },
  {
    id: 4,
    text: "Que pensez-vous des droits et de l'égalité pour les personnes LGBTQIA+ ?",
    options: [
      {
        text: "Je soutiens activement l'égalité totale et lutte contre les discriminations",
        weight: { ally: 1.0 }
      },
      {
        text: "Je suis pour l'égalité mais certaines demandes vont trop loin",
        weight: { ally: 0.4 }
      },
      {
        text: "Les droits actuels sont suffisants, pas besoin d'aller plus loin",
        weight: { ally: 0.0 }
      }
    ]
  },
  {
    id: 5,
    text: "Comment réagissez-vous face aux blagues homophobes ou transphobes ?",
    options: [
      {
        text: "Je m'y oppose ouvertement et explique pourquoi c'est blessant",
        weight: { ally: 1.0 }
      },
      {
        text: "Je suis mal à l'aise mais n'ose pas toujours intervenir",
        weight: { ally: 0.5 }
      },
      {
        text: "Je trouve que les gens sont trop sensibles, c'est juste de l'humour",
        weight: { ally: 0.0 }
      }
    ]
  },
  {
    id: 6,
    text: "Comment réagissez-vous quand quelqu'un fait son coming out ?",
    options: [
      {
        text: "Je le remercie de sa confiance et lui demande comment je peux le soutenir",
        weight: { ally: 1.0 }
      },
      {
        text: "J'accepte mais préfère ne pas trop en parler",
        weight: { ally: 0.4 }
      },
      {
        text: "Je lui dis que c'est juste une phase ou de la confusion",
        weight: { ally: 0.0 }
      }
    ]
  }
];