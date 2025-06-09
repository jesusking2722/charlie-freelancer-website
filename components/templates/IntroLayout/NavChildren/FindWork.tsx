import Link from "next/link";

type TCard = {
  title: string;
  description: string;
  path: string;
};

const FindWork = () => {
  const cards: TCard[] = [
    {
      title: "Ways to earn",
      description:
        "Learn why Charlie Unicorn AI has the right opportunities for you.",
      path: "/",
    },
    {
      title: "Find work for your skills",
      description: "Explore the kind of work available in your filed.",
      path: "/",
    },
    {
      title: "Win work with ads",
      description: "Get noticed by the right client.",
      path: "/",
    },
    {
      title: "Join Freelancer Plus",
      description:
        "Access more Connects, get strategic insights on competitors, and try out the latest tools.",
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

export default FindWork;
