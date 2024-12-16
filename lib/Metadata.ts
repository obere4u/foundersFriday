import { Metadata } from "next";

type PageMetadataProps = {
  title?: string;
  description?: string;
  path?: string;
};

export function generateMetadata({
  title = "Founder's Friday Movement",
  description = "A platform fostering collaboration among founders, innovators, and tech enthusiasts in Abuja's vibrant startup ecosystem.",
  path = "",
}: PageMetadataProps = {}): Metadata {
  const baseTitle = "Founder's Friday";
  const fullTitle = title === baseTitle ? baseTitle : `${title} - ${baseTitle}`;

  return {
    title: fullTitle,
    description: description,
    keywords: [
      "Founder's Friday",
      "networking",
      "collaboration",
      "startups",
      "innovators",
      "tech enthusiasts",
      "Abuja",
      "community building",
    ],
    authors: [{ name: "Founder's Friday Team" }],
    openGraph: {
      title: fullTitle,
      description: description,
      url: `https://founders-friday-phi.vercel.app/${path}`.replace(/\/+$/, ""),
      siteName: baseTitle,
      images: [
        {
          url: "https://foundersfriday.com/images/og-image.png",
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description,
      images: ["https://founders-friday-phi.vercel.app/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    viewport: {
      width: "device-width",
      initialScale: 1,
    },
  };
}

// Example usage in a page
// export const metadata = generateMetadata({
//   title: "About Us",
//   description: "Learn about our mission and journey",
//   path: "about"
// });
