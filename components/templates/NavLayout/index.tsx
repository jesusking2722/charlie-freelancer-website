const NavLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed top-[80px] w-full p-6 z-[49] border-t-[1px] border-gray-300 bg-white">
      <div className="w-[80%] mx-auto">{children}</div>
    </div>
  );
};

export default NavLayout;
