interface Identity {
  name: string;
  color: string;
  description: string;
  flag: string;
}

interface IdentityMap {
  [key: string]: Identity;
}

interface IdentityCombination {
  name: string;
  color: string;
  description: string;
  flag: string;
  condition: (genderResults: any[], romanticResults: any[]) => boolean;
}

export const genderIdentities: IdentityMap = {
  "cisgenre": {
    name: "Cisgenre",
    color: "#7F7F7F",
    description: "Vous vous sentez en accord avec le genre qui vous a été attribué à la naissance.",
    flag: "/src/assets/flags/cisgender.svg"
  },
  "trans": {
    name: "Trans",
    color: "#5BCEFA",
    description: "Vous vous identifiez à un genre différent de celui qui vous a été attribué à la naissance.",
    flag: "/src/assets/flags/transgender.svg"
  },
  "non-binaire": {
    name: "Non-Binaire",
    color: "#9C59D1",
    description: "Vous ne vous identifiez pas strictement comme homme ou femme.",
    flag: "/src/assets/flags/nonbinary.svg"
  },
  "genre-fluide": {
    name: "Genre Fluide",
    color: "#FF69B4",
    description: "Votre sentiment d'identité de genre varie au fil du temps.",
    flag: "/src/assets/flags/genderfluid.svg"
  },
  "agenre": {
    name: "Agenre",
    color: "#000000",
    description: "Vous ne vous identifiez à aucun genre en particulier.",
    flag: "/src/assets/flags/agender.svg"
  }
};

export const romanticIdentities: IdentityMap = {
  "hétéroromantique": {
    name: "Hétéroromantique",
    color: "#FF1493",
    description: "Vous ressentez de l'attirance romantique uniquement envers les personnes du genre opposé.",
    flag: "/src/assets/flags/pride.svg"
  },
  "homoromantique": {
    name: "Homoromantique",
    color: "#FF4500",
    description: "Vous ressentez de l'attirance romantique uniquement envers les personnes du même genre.",
    flag: "/src/assets/flags/pride.svg"
  },
  "biromantique": {
    name: "Biromantique",
    color: "#8A2BE2",
    description: "Vous pouvez ressentir de l'attirance romantique envers plusieurs genres.",
    flag: "/src/assets/flags/bisexual.svg"
  },
  "panromantique": {
    name: "Panromantique",
    color: "#FFD700",
    description: "Vous pouvez développer des sentiments romantiques indépendamment du genre.",
    flag: "/src/assets/flags/pansexual.svg"
  },
  "aromantique": {
    name: "Aromantique",
    color: "#008000",
    description: "Vous ressentez peu ou pas d'attirance romantique.",
    flag: "/src/assets/flags/aromantic.svg"
  },
  "démiromantique": {
    name: "Démiromantique",
    color: "#4B0082",
    description: "Vous ne développez des sentiments romantiques qu'après avoir créé un lien émotionnel fort.",
    flag: "/src/assets/flags/demisexual.svg"
  },
  "grayromantique": {
    name: "Grayromantique",
    color: "#808080",
    description: "Votre expérience de l'attirance romantique est rare ou peu intense.",
    flag: "/src/assets/flags/graysexual.svg"
  }
};

export const identityCombinations: IdentityCombination[] = [
  {
    name: "AroAce",
    color: "#FFA500",
    description: "Vous êtes à la fois aromantique et asexuel·le, ce qui signifie que vous ressentez peu ou pas d'attirance romantique et sexuelle.",
    flag: "/src/assets/flags/aromantic.svg",
    condition: (genderResults, romanticResults) => {
      return romanticResults.some(r => r.name === "aromantique" && r.score > 70);
    }
  }
];