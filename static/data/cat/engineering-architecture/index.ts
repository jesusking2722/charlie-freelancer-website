import {
  ICatFreelancerCategory,
  TAccordionImageViewerItem,
  TCatLayoutExpertCategory,
} from "@/types/components.types";

export const CAT_ENGINEERING_ARCHITECTURE_EXPERTS_CATEGORIES: TCatLayoutExpertCategory[] =
  [
    {
      name: "Mechanical Engineers",
      rate: 4.8,
      experts: ["", "", ""],
      path: "/",
    },
    {
      name: "Civil Engineers",
      rate: 4.8,
      experts: ["", "", ""],
      path: "/",
    },
    {
      name: "Electrical Engineers",
      rate: 4.8,
      experts: ["", "", ""],
      path: "/",
    },
    {
      name: "Chemical Engineers",
      rate: 4.8,
      experts: ["", "", ""],
      path: "/",
    },
    {
      name: "Architectural Designers",
      rate: 4.8,
      experts: ["", "", ""],
      path: "/",
    },
    {
      name: "3D Modelers",
      rate: 4.8,
      experts: ["", "", ""],
      path: "/",
    },
    {
      name: "Industrial Designers",
      rate: 4.8,
      experts: ["", "", ""],
      path: "/",
    },
    {
      name: "CAD Designers",
      rate: 4.8,
      experts: ["", "", ""],
      path: "/",
    },
  ];

export const CAT_ENGINEERING_ARCHITECTURE_SERVICES: TAccordionImageViewerItem[] =
  [
    {
      id: "1",
      title: "Building Information Modeling",
      description:
        "Get 3D models to help you plan and construct buildings and other facilities.",
      imageUrl:
        "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/60bdc15ab77bce2c98f6834a_image_large%20(2)jpg.jpg",
    },
    {
      id: "2",
      title: "Architectural Floor Plans",
      description:
        "Map out your building with 2D or 3D floor plans to help you or your real estate customers plan your ideal layout.",
      imageUrl:
        "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/60bdc1f64f62e82d57c9b0a8_image_large%20(2).jpg",
    },
    {
      id: "3",
      title: "Architectural 3D Models & Renderings",
      description:
        "Get 3D models to help you plan and construct buildings and other facilities.",
      imageUrl:
        "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/60bdc1aed60edecbea967fb5_image_large.jpg",
    },
    {
      id: "4",
      title: "Landscape Design",
      description:
        "Plan the most effective way to use outside spaces like gardens, swimming pools, car parks, and patios.",
      imageUrl:
        "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/60bdc339e3a9fdd38be53d39_image_larg.jpg",
    },
    {
      id: "5",
      title: "Trade Show Booth Design",
      description:
        "Create a concept and define the layout for a display that grabs attention, with furniture and lighting that create the right atmosphere for your brand.",
      imageUrl:
        "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/60bdc23d2122471a04796a1b_image_large%20(1).jpg",
    },
    {
      id: "6",
      title: "Industrial & Product Design",
      description:
        "Bring your product to life with everything from mechanical designs to 3D CAD renders to physical prototypes.",
      imageUrl:
        "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/60bdc2dec1284b2aad3f11f4_image.jpg",
    },
  ];

export const CAT_ENGINEERING_ARCHITECTURE_PROJECT_OVERVIEW_SKILLS: string[] = [
  "Autodesk 3ds Max",
  "Architectural Design",
  "3D Modeling",
];

export const CAT_ENGINEERING_ARCHITECTURE_FREELANCER_CATEGORIES: ICatFreelancerCategory[] =
  [
    {
      title: "Engineering & Architecture Roles",
      items: [
        { label: "2D Drafter", path: "/" },
        { label: "Chief Architect designers", path: "/" },
        { label: "Environmental Designers", path: "/" },
        { label: "Lighting Engineers", path: "/" },

        { label: "Aerospace Engineers", path: "/" },
        { label: "CI/CD Engineers", path: "/" },
        { label: "Fire Protection Engineers", path: "/" },
        { label: "Mechanical Engineers", path: "/" },

        { label: "Home Designers", path: "/" },
        { label: "Naval Architects", path: "/" },
        { label: "Architectural modelers", path: "/" },
        { label: "Design Engineers", path: "/" },

        { label: "Hydraulic Engineers", path: "/" },
        { label: "Parametric Designers", path: "/" },
        { label: "Architectural Rendering Specialists", path: "/" },
        { label: "Professional Engineers", path: "/" },

        { label: "AutoCAD Experts", path: "/" },
        { label: "Electrical Engineers", path: "/" },
        { label: "Infrastructure Engineers", path: "/" },
        { label: "AutoCAD Programmers", path: "/" },

        { label: "Engineering Consultants", path: "/" },
        { label: "Interior Architects", path: "/" },
        { label: "Structural Engineers", path: "/" },
        { label: "Engineering designers", path: "/" },

        { label: "Landscape Architects", path: "/" },
      ],
    },

    {
      title: "Cross-functional Roles",
      items: [
        { label: "Engineering Consultants", path: "/" },
        { label: "Engineering designers", path: "/" },
        { label: "Architectural modelers", path: "/" },
        { label: "Chief Architect designers", path: "/" },
      ],
    },

    {
      title: "Engineering & Architecture Projects",
      items: [
        { label: "Architecture & Interior Design", path: "/" },
        { label: "Diagrams & Mapping", path: "/" },
        { label: "Coordination & Clash Detection", path: "/" },
        { label: "3D BIM Modeling", path: "/" },

        { label: "Planning & Design", path: "/" },
        { label: "Other Architecture & Interior Design", path: "/" },
        { label: "4D Construction Simulation", path: "/" },
        { label: "Landscape Planning & Design", path: "/" },

        { label: "3D Architectural Modeling & Rendering", path: "/" },
        { label: "2D Architectural Drawings & Floor Plans", path: "/" },
        { label: "BIM Training & Implementation", path: "/" },
        { label: "3D Landscape Modeling & Rendering", path: "/" },

        { label: "Virtual Staging", path: "/" },
        { label: "BIM Family Creation", path: "/" },
        { label: "Other Building Information Modeling", path: "/" },
        { label: "Other Landscape Design", path: "/" },
      ],
    },
  ];
