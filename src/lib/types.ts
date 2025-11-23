export type Stream = {
  url: string;
  quality?: string;
  format?: string;
  size?: string;
  type?: string;
  label?: string;
  target?: string; // target can exist from old API, keeping for compatibility
};

export type VideoMeta = {
  thumbnail: string;
  title: string;
  duration?: string;
  type: string;
  options: Stream[];
};

export type ExtractResult = {
  data?: VideoMeta;
  error?: string;
};
