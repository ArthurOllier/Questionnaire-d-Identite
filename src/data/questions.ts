import type { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "Dans votre vie quotidienne, comment vous sentez-vous par rapport au genre (homme/femme) qui vous a été attribué à la naissance ?",
    options: [
      { 
        text: "Je me sens à l'aise et en accord avec ce genre",
        weight: { cisgenre: 1.0 }
      },
      { 
        text: "Je me sens mal à l'aise avec ce genre et je m'identifie plus à l'autre genre",
        weight: { trans: 1.0 }
      },
      { 
        text: "Je ne suis pas sûr·e, ou mes sentiments sont complexes à ce sujet",
        weight: { "non-binaire": 0.5, "genre-fluide": 0.5 }
      },
      { 
        text: "Je ne me reconnais pas dans les catégories homme ou femme",
        weight: { agenre: 0.8, "genre-neutre": 0.8 }
      }
    ]
  },
  {
    id: 2,
    text: "Au fil du temps, comment votre façon de vous percevoir en tant qu'homme, femme, ou autre évolue-t-elle ?",
    options: [
      { 
        text: "Ma perception reste la même, stable et claire",
        weight: { cisgenre: 0.5, trans: 0.5 }
      },
      { 
        text: "Ça change parfois : certains jours je me sens plus homme, d'autres plus femme",
        weight: { "genre-fluide": 1.0, "bigender": 0.7 }
      },
      { 
        text: "Je ne me sens ni homme ni femme, et c'est constant",
        weight: { agenre: 1.0 }
      },
      { 
        text: "Je suis en questionnement, en train de découvrir qui je suis",
        weight: { queer: 0.8, "non-binaire": 0.6 }
      }
    ]
  }
];

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