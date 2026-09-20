import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PixelCheck365 - Free Screen & Dead Pixel Test",
    short_name: "PixelCheck365",
    description: "Find dead, stuck and defective pixels on your screen in seconds.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#2563eb",
    orientation: "any",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon.png",
        sizes: "64x64",
        type: "image/png",
      },
    ],
  };
}
