export interface ColorScheme {
  id: string;
  name: string;
  colors: {
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    accent: string;
    accentForeground: string;
    background: string;
    foreground: string;
    muted: string;
    mutedForeground: string;
    card: string;
    cardForeground: string;
    border: string;
    ring: string;
  };
}

export interface DemoTheme {
  demoId: string;
  name: string;
  description: string;
  schemes: ColorScheme[];
  defaultScheme: string;
}

export interface DemoInfo {
  id: string;
  name: string;
  description: string;
  category: string;
  href: string;
  preview?: string;
}
