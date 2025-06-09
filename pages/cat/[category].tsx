import { CatLayout } from "@/components/templates";
import { useRouter } from "next/router";
import type { TCatLayoutIntro } from "@/components/templates/CatLayout";
import DevIntroImage from "@/public/assets/webps/cat/dev-it/intro.webp";

const Category = () => {
  const router = useRouter();
  const { category } = router.query;

  if (!category && typeof category !== "string") {
    <div>Page Not Found</div>;
  }

  const intro: TCatLayoutIntro = {
    title: "Dev and IT experts to scale your org",
    description:
      "Hire independent professionals to shorten development cycles, bury backlogs, and drive product growth.",
    image: DevIntroImage,
  };

  return <CatLayout intro={intro} params={category as string} />;
};

export default Category;
