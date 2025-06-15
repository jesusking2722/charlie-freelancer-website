import Link from "next/link";
import { Icon } from "@iconify/react";

type TCard = {
  title: string;
  description: string;
  path: string;
};

const WhyCharlie = () => {
  const cards: TCard[] = [
    {
      title: "Success stories",
      description: "Discover how teams work strategically and grow together.",
      path: "#",
    },
    {
      title: "Reviews",
      description: "See what it's like to collaborate on Charlie Unicorn AI.",
      path: "#",
    },
    {
      title: "How to hire",
      description: "Learn about the different ways to get work done.",
      path: "#",
    },
    {
      title: "How to find work",
      description: "Learn about how to grow your independent career.",
      path: "#",
    },
  ];

  const guides: TCard[] = [
    {
      title: "Guides",
      description: "Getting Started as a Freelancer",
      path: "",
    },
    {
      title: "Guides",
      description: "Growing Your Freelancer Career",
      path: "",
    },
    {
      title: "Guides",
      description: "Hiring & Working with Independent Talent",
      path: "",
    },
  ];

  return (
    <div className="w-full flex px-8 gap-24">
      <div className="w-2/5 grid grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <Link
            key={index}
            href={card.path}
            className="w-full rounded-lg hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer p-4"
          >
            <h1 className="text-base">{card.title}</h1>
            <p className="text-sm mt-2 text-gray-600">{card.description}</p>
          </Link>
        ))}
      </div>
      <div className="w-2/5 flex flex-col items-start justify-center">
        <h2 className="text-base text-left">Where work gets done</h2>
        <div className="w-full flex flex-col gap-4 mt-6">
          {guides.map((guide, index) => (
            <Link
              key={index}
              href={guide.path}
              className="w-full rounded-lg hover:bg-gray-200 border border-gray-300 transition-all duration-300 ease-in-out cursor-pointer py-4 px-8"
            >
              <h4 className="text-sm text-gray-600">Guides</h4>
              <h3 className="text-base mt-1">{guide.description}</h3>
            </Link>
          ))}
        </div>

        <Link
          href="#"
          className="flex items-center gap-1 text-sm text-blue-600 underline mt-6"
        >
          See Resources
          <Icon
            icon="solar:arrow-right-linear"
            className="text-blue-600 w-4 h-4"
          />
        </Link>
      </div>
    </div>
  );
};

export default WhyCharlie;
