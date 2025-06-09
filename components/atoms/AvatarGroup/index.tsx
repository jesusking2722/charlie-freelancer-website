import Image from "next/image";

interface AvatarGroupProps {
  avatars: string[];
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ avatars }) => {
  return (
    <div className="flex -space-x-2">
      {avatars.map((avatar, index) => (
        <Image
          key={index}
          className="z-40 inline-block border h-20 w-20 rounded-full ring-2 ring-white ring-opacity-50"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
          alt=""
        />
      ))}
    </div>
  );
};

export default AvatarGroup;
