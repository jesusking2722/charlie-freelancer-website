import type {
  ICatFreelancerCategory,
  TAccordionImageViewerItem,
  TCatLayoutExpertCategory,
} from "@/types/components.types";

export const CAT_DESIGNERS: TCatLayoutExpertCategory[] = [
  { name: "UI/UX Designers", rate: 4.8, experts: ["", "", ""], path: "#" },
  { name: "Graphic Designers", rate: 4.8, experts: ["", "", ""], path: "#" },
  {
    name: "Art Directors",
    rate: 4.8,
    experts: ["", "", ""],
    path: "#",
  },
  { name: "Web Designers", rate: 4.8, experts: ["", "", ""], path: "#" },
  { name: "Motion Designers", rate: 4.8, experts: ["", "", ""], path: "#" },
  { name: "Animators", rate: 4.8, experts: ["", "", ""], path: "#" },
  {
    name: "Video Editors",
    rate: 4.8,
    experts: ["", "", ""],
    path: "#",
  },
  { name: "Voice Artists", rate: 4.8, experts: ["", "", ""], path: "#" },
];

export const CAT_DESIGNE_SERVICES: TAccordionImageViewerItem[] = [
  {
    id: "1",
    title: "Logo Design",
    description:
      "Get a custom logo design that will inspire something deeper than credibility and make your brand stand out from the crowd.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca6a60f9e6bea2d972397_6037def1070ad1755dac8a62_logo-design%25402x.jpeg",
  },
  {
    id: "2",
    title: "Photoshop Editing",
    description:
      "From background removal to photo manipulation and composition — create, enhance, or edit your images, artwork, or illustrations.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca6a53fdf2017ff224420_603d74ad3652a641f636d5aa_photoshop-editing.png",
  },
  {
    id: "3",
    title: "Web & Mobile Design",
    description:
      "Improve user experience and customer satisfaction with pixel perfect web and mobile design.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca6a54cfde090a038e8b6_6037e12b4d82fa50e255ad8e_Web%2520%2526%2520Mobile%2520Design-Md.R.jpeg",
  },
  {
    id: "4",
    title: "Presentation Design",
    description:
      "Get professionally designed PowerPoint, Keynote, and Google Slides presentations customized to your needs.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca6a42170134f1f0d5a9d_6037e182d6735a2f6351a0c8_Presentation_Design-Olena-P.png",
  },
  {
    id: "5",
    title: "Architecture & Interior Design",
    description:
      "Hire an expert to bring your dream home or office interior to life with lighting, furniture planning, and more.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca6a384f8f828182b5dc6_603d6ebc48fe5957d30cf3f2_Architecture%2520%2526%2520Interior%2520Design%2520-%2520Andrej%2520M-sm.jpeg",
  },
  {
    id: "6",
    title: "Video Editing",
    description:
      "Perfect and polish your video footage with post-production editing services.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca6a25984ff07dcd036c6_5f068987d8daa030c995609a_T3_Video_Production_Jonathan_M.png",
  },
];

export const CAT_DESIGN_PROJECT_OVERVIEW_SKILLS: string[] = [
  "Graphic Design",
  "Print Layout Design",
  "Brand Identity",
];

export const CAT_DESIGN_FREELANCER_CATEGORIES: ICatFreelancerCategory[] = [
  {
    title: "Design & Creative Roles",
    items: [
      { label: "Creative Design Experts", path: "#" },
      { label: "Creative Directors", path: "#" },
      { label: "Creative Strategists", path: "#" },
      { label: "Interviewers", path: "#" },
    ],
  },

  {
    title: "Cross-functional Roles",
    items: [
      { label: "Brand Strategists", path: "#" },
      { label: "Creative Design Experts", path: "#" },
      { label: "Content Strategists", path: "#" },
      { label: "Creative Strategists", path: "#" },
      { label: "Copywriters", path: "#" },
      { label: "Creative Directors", path: "#" },
      { label: "Web Developers", path: "#" },
    ],
  },

  {
    title: "Design & Creative Projects",
    items: [
      { label: "Logo Design Services", path: "#" },
      { label: "Brand Identity Design", path: "#" },
      { label: "Digital Design", path: "#" },
      { label: "Game Design", path: "#" },
      { label: "Illustration Services", path: "#" },
      { label: "NFT Art", path: "#" },
      { label: "Photography & Image Editing", path: "#" },
      { label: "Brand Identity Design", path: "#" },

      { label: "Video Editing Services", path: "#" },
      { label: "Drawing & Illustration", path: "#" },
      { label: "Other Design Services", path: "#" },
      { label: "Book Design Services", path: "#" },
      { label: "Sound Design Services", path: "#" },
      { label: "Packaging & Merchandise Design", path: "#" },
      { label: "Illustration", path: "#" },
      { label: "Packaging Design", path: "#" },
    ],
  },
];
