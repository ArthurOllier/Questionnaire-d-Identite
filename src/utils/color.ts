export function calculateTriangleColor(x: number, y: number): string {
  // Coordonnées normalisées des coins
  const corners = {
    blue: { x: 0, y: 1 },    // Coin gauche (bleu)
    pink: { x: 1, y: 1 },    // Coin droit (rose)
    black: { x: 0.5, y: 0 }  // Coin supérieur (noir)
  };

  // Calcul des distances aux coins
  const distToBlue = distance(x, y, corners.blue.x, corners.blue.y);
  const distToPink = distance(x, y, corners.pink.x, corners.pink.y);
  const distToBlack = distance(x, y, corners.black.x, corners.black.y);
  
  // Normalisation des distances
  const totalDist = distToBlue + distToPink + distToBlack;
  const blueInfluence = 1 - (distToBlue / totalDist);
  const pinkInfluence = 1 - (distToPink / totalDist);
  const blackInfluence = 1 - (distToBlack / totalDist);

  // Couleurs de base
  const blue = { r: 0, g: 56, b: 168 };   // #0038A8
  const pink = { r: 214, g: 2, b: 112 };  // #D60270
  const black = { r: 0, g: 0, b: 0 };     // #000000

  // Mélange des couleurs selon l'influence
  const r = Math.round(
    (blue.r * blueInfluence + 
     pink.r * pinkInfluence + 
     black.r * blackInfluence) / 3
  );
  const g = Math.round(
    (blue.g * blueInfluence + 
     pink.g * pinkInfluence + 
     black.g * blackInfluence) / 3
  );
  const b = Math.round(
    (blue.b * blueInfluence + 
     pink.b * pinkInfluence + 
     black.b * blackInfluence) / 3
  );

  return `rgb(${r}, ${g}, ${b})`;
}

function distance(x1: number, y1: number, x2: number, y2: number): number {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}