import type { Question } from '../../types';

export const genderQuestions: Question[] = [
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