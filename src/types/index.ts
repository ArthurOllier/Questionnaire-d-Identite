export interface Result {
  name: string;
  color: string;
  description: string;
  flag: string;
  score: number;
}

export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    weight: {
      [key: string]: number;
    };
  }[];
}