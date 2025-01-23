export function calculatePointOnCircle(
  centerX: number, 
  centerY: number, 
  radius: number, 
  angle: number
): { x: number; y: number } {
  return {
    x: centerX + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle)
  };
}

export function calculateAngle(x: number, y: number): number {
  return Math.atan2(y, x);
}

export function calculateDistance(x1: number, y1: number, x2: number, y2: number): number {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}