import {
  FAQsType,
  NavbarItemType,
  ReviewType,
  SocialMediaType,
  SponsorsImageType,
  WhySponsorNextType,
} from "@/types";

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

export const reviews: ReviewType[] = [
  {
    reviewer: "Mr Belba Ngoy",
    review: " Always good for my team and myself",
    image: "imagetrailpic_110x110.png",
  },
  {
    reviewer: "Mr Belba Ngoy",
    review: " Always a remarkable experience for my team and myself",
    image: "imagetrailpic_110x110.png",
  },
  {
    reviewer: "Mr Belba Ngoy",
    review: " Wonderful Service",
    image: "imagetrailpic_110x110.png",
  },
];

export const FAQS: FAQsType[] = [
  {
    question: "Lorem ipsum dolor sit amet?",
    answer:
      "consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  },
  {
    question: " Aenean commodo ligula eget dolor?",
    answer:
      "consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  },
  {
    question: "Lorem Aenean commodo ligula eget dolor?",
    answer:
      "consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  },
  {
    question: "onsectetuer adipiscing elit?",
    answer:
      "consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  },
  {
    question: "Commodo ligula eget dolor?",
    answer:
      "consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  },
  {
    question: "Aenean commodo ligula eget dolor?",
    answer:
      "consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  },
];

export const socialMediaLinks: SocialMediaType[] = [
  { image: "facebook.svg", title: "facebook" },
  { image: "linkedin.svg", title: "linkedin" },
  { image: "instagram.svg", title: "instagram" },
];
