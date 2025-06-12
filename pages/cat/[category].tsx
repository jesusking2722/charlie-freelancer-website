import { CatLayout } from "@/components/templates";
import { useRouter } from "next/router";
import type { TCatLayoutIntro } from "@/components/templates/CatLayout";
import DevIntroImage from "@/public/assets/webps/cat/dev-it/intro.webp";
import {
  CAT_DEVELOPER_SERVICES,
  CAT_DEVELOPERS,
  CAT_DEVELOPER_PROJECT_OVERVIEW_SKILLS,
} from "@/static/cat.dev.it.data";

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

  return (
    <CatLayout
      intro={intro}
      params={category as string}
      expertCategory={CAT_DEVELOPERS}
      services={CAT_DEVELOPER_SERVICES}
      skills={CAT_DEVELOPER_PROJECT_OVERVIEW_SKILLS}
    />
  );
};

export default Category;
