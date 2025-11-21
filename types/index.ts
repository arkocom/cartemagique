export type ElementType = "text" | "sticker";

export interface CardElement {
  id: string;
  type: ElementType;
  x: number;
  y: number;
  width?: number;
  height?: number;
  rotation: number;
  text?: string;
  emoji?: string;
  fontSize?: number;
  fontFamily?: string;
  fontStyle?: "normal" | "italic";
  fontWeight?: "normal" | "bold";
  textAlign?: "left" | "center" | "right";
  fill?: string;
  zIndex: number;
}

export interface Theme {
  id: string;
  name: string;
  description: string;
  image: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  gradient: string;
}

export interface Sticker {
  emoji?: string;
  url?: string;
}