export type ElementType = "text" | "sticker" | "image";

export interface CardElement {
  id: string;
  type: ElementType;
  x: number;
  y: number;
  width?: number;
  height?: number;
  rotation: number;
  text?: string;
  fontSize?: number;
  fontFamily?: string;
  fontStyle?: "normal" | "italic";
  fontWeight?: "normal" | "bold";
  textAlign?: "left" | "center" | "right";
  fill?: string;
  src?: string;
  zIndex: number;
}

export interface Theme {
  id: string;
  name: string;
  backgroundImage: string;
}

export interface Sticker {
  id: string;
  emoji?: string;
  url?: string;
}