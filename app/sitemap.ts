import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pixelcheck365.com";
  const lastModified = new Date();

  const routes = [
    { url: `${baseUrl}`, lastModified, changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${baseUrl}/test`, lastModified, changeFrequency: "daily" as const, priority: 0.95 },
    { url: `${baseUrl}/dead-pixel-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/dead-pixel-test-online`, lastModified, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/dead-pixel-checker`, lastModified, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/stuck-pixel-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/stuck-pixel-checker`, lastModified, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/pixel-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/pixel-checker`, lastModified, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/screen-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/screen-test-online`, lastModified, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/display-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/online-display-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/monitor-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/monitor-screen-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/test-monitor-for-dead-pixels`, lastModified, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/lcd-screen-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/led-screen-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/screen-defect-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/screen-color-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/screen-uniformity-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/gradient-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/check-screen-for-dead-pixels`, lastModified, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/how-to-test-for-dead-pixels`, lastModified, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/iphone-screen-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/iphone-dead-pixel-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/android-screen-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/android-dead-pixel-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/mac-screen-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/mac-dead-pixel-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/macbook-screen-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/macbook-dead-pixel-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/windows-screen-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/windows-dead-pixel-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/laptop-screen-test`, lastModified, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/report`, lastModified, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/how-it-works`, lastModified, changeFrequency: "monthly" as const, priority: 0.75 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/disclaimer`, lastModified, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: "monthly" as const, priority: 0.5 },
  ];

  return routes;
}
