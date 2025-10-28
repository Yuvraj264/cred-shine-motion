
// src/utils/analytics.ts
export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // 🔁 Replace with your actual GA4 ID

export const pageview = (url: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

export const event = (action: string, params: Record<string, any>) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", action, params);
  }
};
