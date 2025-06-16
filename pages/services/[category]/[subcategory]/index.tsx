import { ServicesSubcatLayout } from "@/components/templates";
import { TNavItem } from "@/components/templates/NavLayout";
import { SERVICES_NAV_ITEMS } from "@/static/data/nav/services";
import { SERVICES_DESIGN_SUBCATEGORIES_DATA } from "@/static/data/services/categories/design";
import { removeDashes } from "@/utils/data";

import { useRouter } from "next/router";

const ServicesSubcategory = () => {
  const router = useRouter();
  const { category, subcategory } = router.query;

  const getBreadcrumbsNavs = (): TNavItem[] => {
    const match = SERVICES_NAV_ITEMS.find((nav) =>
      nav.path.includes(category as string)
    );

    return match ? [{ label: match.label, path: match.path }] : [];
  };

  const getSubCategoryData = () => {
    if (subcategory) {
      const removedDashesSubcategory = removeDashes(subcategory as string);

      const found = SERVICES_DESIGN_SUBCATEGORIES_DATA.find((item) =>
        Object.keys(item).includes(removedDashesSubcategory)
      );

      if (found) {
        return found[removedDashesSubcategory as keyof typeof found];
      }
    }
    return null;
  };
  const data = getSubCategoryData();

  return (
    <ServicesSubcatLayout
      title={data?.title || ""}
      subtitle={data?.subtitle || ""}
      category={getBreadcrumbsNavs()}
      seo={data?.seo || null}
      services={data?.services || []}
    />
  );
};

export default ServicesSubcategory;
