import { TNavItem } from "@/components/templates/NavLayout";
import {
  TProjectCard,
  TSEO,
  TServiceCategoryCard,
} from "@/types/components.types";

export const SERVICES_SEO: TSEO = {
  title:
    "Project Catalog - Freelance Services for Your Business | Charlie Unicorn AI - Freelancer",
  description:
    "Explore high-quality freelance services including logo design, web development, content writing, and more. Find the right professional for your business needs.",
  keywords:
    "freelance services, project catalog, logo design, web development, SEO, Charlie Unicorn AI",
  url: "/services",
};

export const SERVICES_SERVICES_CATEGORIES: TServiceCategoryCard[] = [
  {
    label: "Logo Design",
    path: "#",
    image:
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/logo-design.jpg",
  },
  {
    label: "WordPress",
    path: "#",
    image:
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/wordpress.jpg",
  },
  {
    label: "Articles & Blog Posts",
    path: "#",
    image:
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/articles-blog-posts.jpg",
  },
  {
    label: "Video Editing",
    path: "#",
    image:
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/video-editing.jpg",
  },
  {
    label: "Illustration",
    path: "#",
    image:
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/illustration.jpg",
  },
  {
    label: "SEO",
    path: "#",
    image:
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/seo.jpg",
  },
  {
    label: "Ecommerce Development",
    path: "#",
    image:
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/ecommerce-development.jpg",
  },
  {
    label: "Data Entry",
    path: "#",
    image:
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/data-entry.jpg",
  },
  {
    label: "Architecture & Interior Design",
    path: "#",
    image:
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/architecture-interior-design.jpg",
  },
  {
    label: "Voiceover Recordings",
    path: "#",
    image:
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/voice-over.jpg",
  },
];

export const SERVICES_SOCIAL_MEDIA_CATEGORIES: TServiceCategoryCard[] = [
  {
    label: "Social Media Design",
    path: "#",
    image:
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/social-media-design.jpg",
  },
  {
    label: "Social Media Ad Setup & Management",
    path: "#",
    image:
      "https://www.upwork.com/static/assets/CatalogApp/img/ads-setup-management.f1761c5.jpg",
  },
  {
    label: "Video Editing",
    path: "#",
    image:
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/video-editing.jpg",
  },
];

export const SERVICES_WEBSITE_SOLUCTIONS_CATEGORIES: TServiceCategoryCard[] = [
  {
    label: "Web & Mobile Design",
    path: "#",
    image:
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/web-mobile-design.jpg",
  },
  {
    label: "Website Builders & CMS",
    path: "#",
    image:
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/website-builders-cms.jpg",
  },
  {
    label: "Ecommerce Development",
    path: "#",
    image:
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/ecommerce-development.jpg",
  },
  {
    label: "Website Content",
    path: "#",
    image:
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/website-content.jpg",
  },
];

export const SERVICES_PROJECTS: TProjectCard[] = [
  {
    images: [
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1711541971/catalog/1701495083035004928/a2urj78u8bwt2cc9lskr.jpg",
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1694503312/catalog/1701495083035004928/lq6t93olocvp26tqcv88.jpg",
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1694503333/catalog/1701495083035004928/iyplynmql5gwjzybzn7g.jpg",
    ],
    title: {
      label: "Expert-Crafted Logo Design with Unlimited Revisions",
      path: "#",
    },
    deliveryTime: "2 day delivery",
    price: "$25",
    seller: {
      name: "Haroon A.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      ranking: 5.0,
      reviewCount: 2176,
      badge: {
        type: "TOP_RATED_PLUS",
        title: "",
        value: "",
        iconUrl: "",
      },
    },
    isLoading: false,
  },
  {
    images: [
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1708255550/catalog/1316710336994029568/oevacvxixshhpdu3brtt.jpg",
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1708255470/catalog/1316710336994029568/vd02fxl56z4g2n6uh3o0.jpg",
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1708255572/catalog/1316710336994029568/kvjonemm3uffektwlcge.jpg",
    ],
    title: {
      label: "Modern Logo Design, Modern Logo with Multiple Concepts",
      path: "#",
    },
    deliveryTime: "2 day delivery",
    price: "$25",
    seller: {
      name: "Haroon A.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      ranking: 5.0,
      reviewCount: 2176,
      badge: {
        type: "TOP_RATED_PLUS",
        title: "",
        value: "",
        iconUrl: "",
      },
      isOnline: true,
    },
  },
  {
    images: [
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1709828133/catalog/1321564870845366272/zpviuvzp8ugaeg64od4p.webp",
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1709828137/catalog/1321564870845366272/r5tmea9mla4o09zz28t6.webp",
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1709828141/catalog/1321564870845366272/tzc7y3nhc1tamzvswnan.webp",
    ],
    title: {
      label:
        "A great PowerPoint template to feature your message with impact.....",
      path: "#",
    },
    deliveryTime: "2 day delivery",
    price: "$25",
    seller: {
      name: "Haroon A.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      ranking: 5.0,
      reviewCount: 2176,
      badge: {
        type: "TOP_RATED_PLUS",
        title: "",
        value: "",
        iconUrl: "",
      },
    },
  },
  {
    images: [
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1709856108/catalog/1354790801200893952/kaghmu6ktpnxe1vox4qo.jpg",
      "https://images.unsplash.com/photo-1634942536790-a8bc6580e1fa?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1634979149798-e9a118734e97?w=400&h=300&fit=crop",
    ],
    title: {
      label:
        "Investor-ready Pitch deck or professional presentation - for your business",
      path: "#",
    },
    deliveryTime: "2 day delivery",
    price: "$25",
    seller: {
      name: "Haroon A.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      ranking: 5.0,
      reviewCount: 2176,
      badge: {
        type: "TOP_RATED_PLUS",
        title: "",
        value: "",
        iconUrl: "",
      },
    },
  },
  {
    images: [
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1692325366/catalog/1692341538461712384/q6au4bmojhy5hsahyknk.jpg",
      "https://images.unsplash.com/photo-1634942536790-a8bc6580e1fa?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1634979149798-e9a118734e97?w=400&h=300&fit=crop",
    ],
    title: {
      label: "Awesome quality of 3D rendering for your home interiors...",
      path: "#",
    },
    deliveryTime: "2 day delivery",
    price: "$25",
    seller: {
      name: "Haroon A.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      ranking: 5.0,
      reviewCount: 2176,
      badge: {
        type: "TOP_RATED_PLUS",
        title: "",
        value: "",
        iconUrl: "",
      },
      isOnline: true,
    },
  },
  {
    images: [
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1709875299/catalog/1427364636045062144/ftzgvmylm8bctntebjbu.webp",
      "https://images.unsplash.com/photo-1634942536790-a8bc6580e1fa?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1634979149798-e9a118734e97?w=400&h=300&fit=crop",
    ],
    title: {
      label:
        "Chief Architect, Revit, Autocad, Architecture Drafting | Drawing |...",
      path: "#",
    },
    deliveryTime: "2 day delivery",
    price: "$25",
    seller: {
      name: "Haroon A.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      ranking: 5.0,
      reviewCount: 2176,
      badge: {
        type: "TOP_RATED_PLUS",
        title: "",
        value: "",
        iconUrl: "",
      },
    },
  },
  {
    images: [
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1704716675/catalog/1744333194251157504/cli95yv7h2zv3g5rliy2.jpg",
      "https://images.unsplash.com/photo-1634942536790-a8bc6580e1fa?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1634979149798-e9a118734e97?w=400&h=300&fit=crop",
    ],
    title: {
      label:
        "Responsive & Professional Websites, Effective Landing Page Design...",
      path: "#",
    },
    deliveryTime: "2 day delivery",
    price: "$25",
    seller: {
      name: "Haroon A.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      ranking: 5.0,
      reviewCount: 2176,
      badge: {
        type: "TOP_RATED_PLUS",
        title: "",
        value: "",
        iconUrl: "",
      },
    },
  },
  {
    images: [
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1709856647/catalog/1393441244683726848/xd0res0zqtcolguhiiht.webp",
      "https://images.unsplash.com/photo-1634942536790-a8bc6580e1fa?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1634979149798-e9a118734e97?w=400&h=300&fit=crop",
    ],
    title: {
      label: "Website Landing Page UI UX design in Figma | Website...",
      path: "#",
    },
    deliveryTime: "2 day delivery",
    price: "$25",
    seller: {
      name: "Haroon A.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      ranking: 5.0,
      reviewCount: 2176,
      badge: {
        type: "TOP_RATED_PLUS",
        title: "",
        value: "",
        iconUrl: "",
      },
      isOnline: true,
    },
  },
];

export const SERVICES_ALL_CATEGORIES: TNavItem[][] = [
  // Design
  [
    { label: "Album Cover Design", path: "#" },
    { label: "AR Filters & Lenses", path: "#" },
    { label: "Architecture & Interior Design", path: "#" },
    { label: "Banner Ads", path: "#" },
    { label: "Book Design", path: "#" },
    { label: "Brand Style Guides", path: "#" },
    { label: "Brand Voice & Tone", path: "#" },
    { label: "Branding Services", path: "#" },
    { label: "Brochure Design", path: "#" },
    { label: "Building Information Modeling", path: "#" },
    { label: "Business Cards & Stationery Design", path: "#" },
    { label: "Car Wraps", path: "#" },
    { label: "Cartoons & Comics", path: "#" },
    { label: "Catalog Design", path: "#" },
    { label: "Character Modeling", path: "#" },
    { label: "Fashion Design", path: "#" },
    { label: "Flyer Design", path: "#" },
    { label: "Game Design", path: "#" },
    { label: "Graphics for Streamers", path: "#" },
    { label: "Illustration", path: "#" },
    { label: "Industrial & Product Design", path: "#" },
    { label: "Infographic Design", path: "#" },
    { label: "Invitation Design", path: "#" },
    { label: "Landscape Design", path: "#" },
    { label: "Local Photography", path: "#" },
    { label: "Logo Design", path: "#" },
    { label: "Menu Design", path: "#" },
    { label: "NFT Art", path: "#" },
    { label: "Other Design", path: "#" },
    { label: "Packaging Design", path: "#" },
    { label: "Pattern Design", path: "#" },
    { label: "Photoshop Editing", path: "#" },
    { label: "Podcast Cover Art", path: "#" },
    { label: "Portraits & Caricatures", path: "#" },
    { label: "Postcard Design", path: "#" },
    { label: "Poster Design", path: "#" },
    { label: "Presentation Design", path: "#" },
    { label: "Product Photography", path: "#" },
    { label: "Resume Design", path: "#" },
    { label: "Signage Design", path: "#" },
    { label: "Social Media Design", path: "#" },
    { label: "Storyboards", path: "#" },
    { label: "T-Shirts & Merchandise Design", path: "#" },
    { label: "Tattoo Design", path: "#" },
    { label: "Trade Show Booth Design", path: "#" },
    { label: "Vector Tracing", path: "#" },
    { label: "Web & Mobile Design", path: "#" },
  ],
  //Video & Audio
  [
    { label: "3D Product Animation", path: "#" },
    { label: "Animated GIFs", path: "#" },
    { label: "Animated Whiteboard & Explainer Videos", path: "#" },
    { label: "Animation for Kids", path: "#" },
    { label: "Animation for Streamers", path: "#" },
    { label: "App & Website Promo Videos", path: "#" },
    { label: "Article to Video", path: "#" },
    { label: "Audio Ads Production", path: "#" },
    { label: "Audiobook Production", path: "#" },
    { label: "Book Trailers", path: "#" },
    { label: "Character Animation", path: "#" },
    { label: "Dialogue Editing", path: "#" },
    { label: "DJ Drops & Producer Tags", path: "#" },
    { label: "Elearning Video Production", path: "#" },
    { label: "Game Trailers", path: "#" },
    { label: "Intro & Outro Animation", path: "#" },
    { label: "Jingles & Intros", path: "#" },
    { label: "Live-Action Explainers", path: "#" },
    { label: "Logo Animation", path: "#" },
    { label: "Lyric & Music Videos", path: "#" },
    { label: "Mixing & Mastering", path: "#" },
    { label: "Music Production & Composition", path: "#" },
    { label: "Music Transcription", path: "#" },
    { label: "Online Music Lessons", path: "#" },
    { label: "Other Video & Audio", path: "#" },
    { label: "Podcast Editing", path: "#" },
    { label: "Real Estate Promo Videos", path: "#" },
    { label: "Screencasting Videos", path: "#" },
    { label: "Session Musicians", path: "#" },
    { label: "Short Video Ads", path: "#" },
    { label: "Singers & Vocalists", path: "#" },
    { label: "Slideshow Videos", path: "#" },
    { label: "Songwriting", path: "#" },
    { label: "Sound Design", path: "#" },
    { label: "Spokesperson Videos", path: "#" },
    { label: "Subtitles & Captions", path: "#" },
    { label: "Unboxing Videos", path: "#" },
    { label: "Video Editing", path: "#" },
    { label: "Visual Effects", path: "#" },
    { label: "Vocal Tuning", path: "#" },
    { label: "Voiceover Recordings", path: "#" },
  ],
  // Development & IT
  [
    { label: "AI & Machine Learning", path: "#" },
    { label: "Blockchain, NFT & Cryptocurrency", path: "#" },
    { label: "Cybersecurity & Data Protection", path: "#" },
    { label: "Data Analysis & Reports", path: "#" },
    { label: "Databases", path: "#" },
    { label: "Desktop Apps", path: "#" },
    { label: "Development for Streamers", path: "#" },
    { label: "Ecommerce Development", path: "#" },
    { label: "Game Development", path: "#" },
    { label: "Mobile Apps", path: "#" },
    { label: "Online Coding Lessons", path: "#" },
    { label: "Other Development & IT", path: "#" },
    { label: "QA Testing", path: "#" },
    { label: "Support & IT", path: "#" },
    { label: "User Testing", path: "#" },
    { label: "Web Programming", path: "#" },
    { label: "Website Builders & CMS", path: "#" },
    { label: "WordPress", path: "#" },
  ],
  // Marketing
  [
    { label: "Book & Ebook Marketing", path: "#" },
    { label: "Community Management", path: "#" },
    { label: "Content Marketing", path: "#" },
    { label: "Crowdfunding", path: "#" },
    { label: "Domain Research", path: "#" },
    { label: "Ecommerce Marketing", path: "#" },
    { label: "Email Marketing", path: "#" },
    { label: "Influencer Marketing", path: "#" },
    { label: "Lead Generation", path: "#" },
    { label: "Local SEO", path: "#" },
    { label: "Market Research", path: "#" },
    { label: "Marketing Strategy", path: "#" },
    { label: "Mobile Marketing & Advertising", path: "#" },
    { label: "Music Promotion", path: "#" },
    { label: "Other Marketing", path: "#" },
    { label: "Podcast Marketing", path: "#" },
    { label: "Public Relations", path: "#" },
    { label: "Search Engine Marketing", path: "#" },
    { label: "SEO", path: "#" },
    { label: "Social Media Advertising", path: "#" },
    { label: "Social Media Management", path: "#" },
    { label: "Surveys", path: "#" },
    { label: "Video Marketing", path: "#" },
    { label: "Web Analytics", path: "#" },
    { label: "Web Traffic Optimization", path: "#" },
  ],
  // Writing & Translation
  [
    { label: "Articles & Blog Posts", path: "#" },
    { label: "Beta Reading", path: "#" },
    { label: "Book & Ebook Writing", path: "#" },
    { label: "Business Names & Slogans", path: "#" },
    { label: "Case Studies", path: "#" },
    { label: "Cover Letters", path: "#" },
    { label: "Creative Writing", path: "#" },
    { label: "Email Copy", path: "#" },
    { label: "Grant Writing", path: "#" },
    { label: "Legal Writing", path: "#" },
    { label: "LinkedIn Profiles", path: "#" },
    { label: "Other Writing & Translation", path: "#" },
    { label: "Podcast Writing", path: "#" },
    { label: "Press Releases", path: "#" },
    { label: "Product Descriptions", path: "#" },
    { label: "Proofreading & Editing", path: "#" },
    { label: "Research & Summaries", path: "#" },
    { label: "Resume Writing", path: "#" },
    { label: "Sales Copy", path: "#" },
    { label: "Scriptwriting", path: "#" },
    { label: "Social Media Copy", path: "#" },
    { label: "Speechwriting", path: "#" },
    { label: "Technical Writing", path: "#" },
    { label: "Translation & Localization", path: "#" },
    { label: "Website Content", path: "#" },
    { label: "White Papers", path: "#" },
  ],
  // More
  [
    { label: "Arts & Crafts", path: "#" },
    { label: "Business Consulting", path: "#" },
    { label: "Business Plans", path: "#" },
    { label: "Career Counseling", path: "#" },
    { label: "Cooking Lessons", path: "#" },
    { label: "Craft Lessons", path: "#" },
    { label: "Data Entry", path: "#" },
    { label: "Ecommerce Management", path: "#" },
    { label: "Family & Genealogy", path: "#" },
    { label: "File Conversion", path: "#" },
    { label: "Financial Consulting", path: "#" },
    { label: "Flyer Distribution", path: "#" },
    { label: "Gaming", path: "#" },
    { label: "Human Resources", path: "#" },
    { label: "Legal Consulting", path: "#" },
    { label: "Online Language Lessons", path: "#" },
    { label: "Online Tutoring", path: "#" },
    { label: "Other Admin & Customer Support", path: "#" },
    { label: "Other Consulting & HR", path: "#" },
    { label: "Other Lifestyle", path: "#" },
    { label: "Personal Styling", path: "#" },
    { label: "Personal Training", path: "#" },
    { label: "Project Management", path: "#" },
    { label: "Transcripts", path: "#" },
    { label: "Traveling", path: "#" },
    { label: "Virtual Assistant", path: "#" },
    { label: "Wellness", path: "#" },
  ],
];
