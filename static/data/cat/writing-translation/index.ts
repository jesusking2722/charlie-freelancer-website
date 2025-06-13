import {
  ICatFreelancerCategory,
  TAccordionImageViewerItem,
  TCatLayoutExpertCategory,
} from "@/types/components.types";

export const CAT_WRITING_TRANSLATION_EXPERTS_CATEGORIES: TCatLayoutExpertCategory[] =
  [
    { name: "Content Writers", rate: 4.8, experts: ["", "", ""], path: "/" },
    {
      name: "Translators",
      rate: 4.8,
      experts: ["", "", ""],
      path: "/",
    },
    {
      name: "Editors",
      rate: 4.8,
      experts: ["", "", ""],
      path: "/",
    },
    {
      name: "Ghostwriters",
      rate: 4.8,
      experts: ["", "", ""],
      path: "/",
    },
    {
      name: "Copywriters",
      rate: 4.8,
      experts: ["", "", ""],
      path: "/",
    },
    {
      name: "Proofreaders",
      rate: 4.8,
      experts: ["", "", ""],
      path: "/",
    },
    {
      name: "Creative Writers",
      rate: 4.8,
      experts: ["", "", ""],
      path: "/",
    },
    {
      name: "Grant Writers",
      rate: 4.8,
      experts: ["", "", ""],
      path: "/",
    },
  ];

export const CAT_WRITING_TRANSLATION_SERVICES: TAccordionImageViewerItem[] = [
  {
    id: "1",
    title: "Articles & Blogs",
    description:
      "Produce engaging articles and blog content that resonates with your audience and target market.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca6bd4aba0115670ca849_5fc16ced7d6df0060c175896_blog.png",
  },
  {
    id: "2",
    title: "Proofreading & Editing",
    description:
      "Get another set of eyes on your work to improve quality, flow, and clarity with proofreading and editing services.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca6bd4aba01c84b0ca845_5fc16b7d65e7ed8ef8b69c32_proofreading.jpeg",
  },
  {
    id: "3",
    title: "Translation & Localization",
    description:
      "Adapt your website, documents, videos, and more for regional or local markets.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca6bcf59e8fac6fe09897_5fb7c35189659171e88bc092_5f063dc10cb58a6206a2fb2b_T3_Translation-p-500.png",
  },
  {
    id: "4",
    title: "Website Content",
    description:
      "Develop unique website copy that customers and search engines love.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca6bb1a63f0744c4edf71_5fc13e1280d7826d25d3a0bb_website-copy.png",
  },
  {
    id: "5",
    title: "Resume Writing",
    description:
      "Landing your dream jobs starts with a compelling resume. Get the help you need to create a stand-out, professional resume.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca69c260c2c67dcb1dc4d_6037e87b4b29c8c1eb41185b_Resume%2520Design.png",
  },
  {
    id: "6",
    title: "Books & eBooks",
    description:
      "Get help with research, ghostwriting, formatting and publishing your book, eBook, or short story.",
    imageUrl:
      "https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/604ca6ba84f8f828bd2b5dcf_5fc177ec445b515766a1b505_book-ebooks.jpeg",
  },
];

export const CAT_WRITING_TRANSLATION_PROJECT_OVERVIEW_SKILLS: string[] = [
  "Localization",
  "Proofreading",
  "Content Writing",
  "Spanish",
];

export const CAT_WRITING_TRANSLATION_FREELANCER_CATEGORIES: ICatFreelancerCategory[] =
  [
    {
      title: "Writing & Translation Roles",
      items: [
        { label: "Academic Writers", path: "/" },
        { label: "Article Writers", path: "/" },
        { label: "Biography Writers", path: "/" },
        { label: "Blog Writers", path: "/" },

        { label: "Business Plan Writers", path: "/" },
        { label: "Business Writers", path: "/" },
        { label: "Comedy Writers", path: "/" },
        { label: "Content Writers", path: "/" },

        { label: "Copy Editors", path: "/" },
        { label: "Cover Letter Writers", path: "/" },
        { label: "Creative Writers", path: "/" },
        { label: "eBook Writers", path: "/" },

        { label: "Essay Writers", path: "/" },
        { label: "Fiction Writers", path: "/" },
        { label: "Ghostwriters", path: "/" },
        { label: "Legal Writers", path: "/" },

        { label: "Lyrics Writers", path: "/" },
        { label: "Medical Writers", path: "/" },
        { label: "Online Writers", path: "/" },
        { label: "Proposal Writers", path: "/" },

        { label: "Report Writers", path: "/" },
        { label: "Research Paper Writers", path: "/" },
        { label: "Resume Writers", path: "/" },
        { label: "Scientific Writers", path: "/" },

        { label: "Screenwriters", path: "/" },
        { label: "SEO Writers", path: "/" },
        { label: "Speech Writers", path: "/" },
        { label: "Technical Writers", path: "/" },

        { label: "Translators", path: "/" },
        { label: "Travel Writers", path: "/" },
        { label: "Writers", path: "/" },
      ],
    },

    {
      title: "Cross-functional Roles",
      items: [
        { label: "SEO Specialists", path: "/" },
        { label: "Writers", path: "/" },
        { label: "Proofreaders", path: "/" },
      ],
    },

    {
      title: "Writing & Translation Projects",
      items: [
        { label: "Creative Writing Services", path: "/" },
        { label: "Content Writing", path: "/" },
        { label: "Beta Reading", path: "/" },
        { label: "Email Copy", path: "/" },

        { label: "Grant Writing Services", path: "/" },
        { label: "Translation & Localization", path: "/" },
        { label: "Copywriting", path: "/" },
        { label: "Social Media Copy", path: "/" },

        { label: "Legal Writing Services", path: "/" },
        { label: "Professional & Business Writing", path: "/" },
        { label: "Product Descriptions", path: "/" },
        { label: "Other Writing & Translation", path: "/" },

        { label: "Technical Writing Services", path: "/" },
        { label: "Proofreading & Editing", path: "/" },
        { label: "Sales Copy", path: "/" },
        { label: "Articles & Blog Posts", path: "/" },
      ],
    },
  ];
