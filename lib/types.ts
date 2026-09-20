export type TestMode =
  | "dead-pixel"
  | "stuck-pixel"
  | "color"
  | "uniformity"
  | "gradient"
  | "fullscreen";

export type DeviceCategory =
  | "iphone"
  | "android"
  | "mac"
  | "windows"
  | "other";

export interface DiagnosticColor {
  id: string;
  name: string;
  hex: string;
  type: "solid" | "gradient";
  gradientCss?: string;
  description: string;
  instructions?: string;
  hudDarkText?: boolean;
}

export interface DisplayInfo {
  viewportWidth: number;
  viewportHeight: number;
  devicePixelRatio: number;
  orientation: string;
  colorDepth: number;
  touchSupported: boolean;
  maxTouchPoints: number;
  pixelRatioCategory: string;
}

export type AutoPlayInterval = 1000 | 2000 | 3000 | 5000;

export type MagnifierZoom = 4 | 8 | 16;

export interface TestSequenceConfig {
  mode: TestMode;
  title: string;
  subtitle: string;
  description: string;
  colors: DiagnosticColor[];
  recommendedInterval: AutoPlayInterval;
}
