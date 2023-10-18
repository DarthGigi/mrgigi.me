export type Picture = {
  sources: {
    webp: string;
    avif: string;
    png: string;
  };
  img: {
    src: string;
    w: number;
    h: number;
  };
};
