export function screenshotUrl(url: string, viewport: "desktop" | "mobile" = "desktop") {
  const params = new URLSearchParams({
    url,
    screenshot: "true",
    meta: "false",
    embed: "screenshot.url",
    "viewport.width": viewport === "desktop" ? "1440" : "375",
    "viewport.height": viewport === "desktop" ? "900" : "812",
    "viewport.deviceScaleFactor": "1",
    waitUntil: "networkidle0",
  });
  return `https://api.microlink.io/?${params.toString()}`;
}
