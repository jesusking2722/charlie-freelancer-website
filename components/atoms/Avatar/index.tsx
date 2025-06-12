import { TFreelancerBadge } from "@/types/components.types";
import Image from "next/image";
import Badge from "../Badge";
import { formatName } from "@/utils/user";

interface AvatarProps {
  name: string;
  pic: string;
  badge: TFreelancerBadge;
}

const Avatar: React.FC<AvatarProps> = ({ name, pic, badge }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <Image
        className="border rounded-full object-contain"
        src={pic}
        alt={name}
        width={64}
        height={64}
      />
      <div className="">
        <h1 className="text-lg font-semibold">{formatName(name)}</h1>
        <Badge type="FREELANCER" badge={badge} />
      </div>
    </div>
  );
};

export default Avatar;
