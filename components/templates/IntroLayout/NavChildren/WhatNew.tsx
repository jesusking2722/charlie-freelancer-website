import Link from "next/link";

type TCard = {
  title: string;
  description: string;
  path: string;
};

const WhatNew = () => {
  const cards: TCard[] = [
    {
      title: "Charlie Unicorn AI Updates",
      description: "Checkout our latest products, partners, and enhancements.",
      path: "/",
    },
    {
      title: "Blog",
      description: "News and stories from the world's work marketplace.",
      path: "/",
    },
    {
      title: "Research Institute",
      description:
        "Insights and tools for business leaders navigating a new world of work.",
      path: "/",
    },
    {
      title: "Release notes",
      description: "Our latest product news, additions and improvements.",
      path: "/",
    },
  ];

  return (
    <div className="w-full px-8 grid grid-cols-4 gap-10">
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
  );
};

export default WhatNew;
