import Image from "next/image";

interface AvatarGroupProps {
  avatars: string[];
  size?: "small" | "medium" | "large";
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ avatars, size }) => {
  return (
    <div className="flex -space-x-2">
      {avatars.map((avatar, index) => {
        const zIndexClasses = ["z-40", "z-30", "z-20", "z-10", "z-5"];

        return (
          <div
            key={index}
            className={`relative ${
              size === "medium"
                ? "w-10 h-10"
                : size === "large"
                ? "w-14 h-14"
                : "w-8 h-8"
            } ${zIndexClasses[index] || "z-0"}`}
          >
            <Image
              className="border rounded-full ring-2 ring-white ring-opacity-50 object-cover"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              fill
            />
          </div>
        );
      })}
    </div>
  );
};

export default AvatarGroup;
