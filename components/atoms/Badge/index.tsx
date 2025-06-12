import { TBadgeType, TFreelancerBadge } from "@/types/components.types";
import Image from "next/image";

interface BadgeProps {
  type: TBadgeType;
  badge: TFreelancerBadge;
}

const Badge: React.FC<BadgeProps> = ({ type, badge }) => {
  // Handle different badge types
  const getBadgeContent = () => {
    switch (type) {
      case "FREELANCER":
        // badge is typed as TFreelancerBadge here
        return (
          <div className="flex flex-row items-center gap-2">
            <Image
              src={
                badge.iconUrl ||
                "https://cdn.prod.website-files.com/603fea6471d9d8559d077603/662e89079cf27c1b6bfc0aeb_top-rated-plus%20(1).svg"
              }
              alt={badge.type}
              width={badge.width || 24}
              height={badge.height || 24}
              className="rounded-full"
            />
            {badge.title ? (
              <span className="text-sm">{badge.title}</span>
            ) : (
              <span className="text-sm">
                {badge.type === "TOP_RATED_PLUS"
                  ? "Top Rated Plus"
                  : badge.type === "TOP_RATED"
                  ? "Top Rated"
                  : "Rising Talent"}
              </span>
            )}
          </div>
        );

      //   case "JOB_SUCCESS_SCORE":
      //     // badge is typed as TJobSuccessScoreBadge here
      //     return (
      //       <div className="flex flex-row items-center gap-2">
      //         <Image
      //           src={
      //             badge.iconUrl ||
      //             "https://cdn.prod.website-files.com/603fea6471d9d8559d077603/662e89079cf27c1b6bfc0aeb_top-rated-plus%20(1).svg"
      //           }
      //           alt={badge.alt || ""}
      //           width={badge.width || 24}
      //           height={badge.height || 24}
      //         />
      //         <span>{badge.score}% Job Success</span>
      //       </div>
      //     );

      default:
        // Handle other badge types
        return (
          <div className="flex flex-row items-center gap-2">
            <Image
              src="https://cdn.prod.website-files.com/603fea6471d9d8559d077603/662e89079cf27c1b6bfc0aeb_top-rated-plus%20(1).svg"
              alt=""
              width={24}
              height={24}
            />
          </div>
        );
    }
  };

  return getBadgeContent();
};

export default Badge;
