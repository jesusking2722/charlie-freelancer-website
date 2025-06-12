interface SkillTagProps {
  label: string;
  value?: any;
}

const SkillTag: React.FC<SkillTagProps> = ({ label, value }) => {
  return (
    <span className="bg-[#e9e9e9] text-[#676767] rounded-full py-1 px-3 text-sm">
      {label}
    </span>
  );
};

export default SkillTag;
