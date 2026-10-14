import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "N.S Electrical's | Safe Power | Brighter Tomorrow",
    short_name: "N.S Electrical's",
    description: "Professional house wiring, industrial electrical, switchboard installation, lighting, repair & maintenance in Hadapsar, Pune, Maharashtra by Shashikant Bahule.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#0B192C",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
