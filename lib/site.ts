// Fill these in once; links with empty values are hidden automatically.
export const site = {
  name: "Taiwo Adefowope Shobo",
  short: "Taiwo Shobo",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  github: "https://github.com/Taiwo17",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "", // digits only, e.g. 2348012345678
  title: "DevOps Engineer",
  description:
    "DevOps Engineer in Lagos, Nigeria focused on AWS, Terraform, Docker and CI/CD automation. Infrastructure as Code, containerisation and reliable deployment workflows.",
};
export const nav = [
  ["Home", "/#home"], ["About", "/#about"], ["Expertise", "/#expertise"],
  ["Projects", "/#projects"], ["Experience", "/#experience"], ["Blog", "/blog"], ["Contact", "/#contact"],
] as const;
