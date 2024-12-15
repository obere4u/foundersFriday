import { NavbarItemType, SponsorsImageType, WhySponsorNextType } from "@/types";

export const navbarItems: NavbarItemType[] = [
  { title: "home", href: "/" },
  { title: "about us", href: "#" },
  { title: "gallery", href: "#" },
  { title: "contact us", href: "#" },
];

export const sponsorsImages: SponsorsImageType[] = [
  { src: "cafeOne_80x80.png", alt: "cafe one" },
  { src: "mswitch_80x80.png", alt: "mswitch" },
  { src: "star_80x80.png", alt: "star" },
  { src: "boldSpace_80x80.png", alt: "Bold Space" },
  { src: "s_80x80.png", alt: "star" },
];

export const whySponsorNext: WhySponsorNextType[] = [
  {
    title: "Netwrking Opportunities",
    description:
      "Connect with industry leaders, founders, and potential partners.",
  },
  {
    title: "Community Impact",
    description: "Support the growth and development of the startup ecosystem.",
  },
  {
    title: "Brand Association",
    description:
      "Align your brand with innovation and entrepreneurial success.",
  },
  {
    title: "Visibility",
    description:
      "Gain exposure to a targeted audience of young professionals and entrepreneurs.",
  },
];
