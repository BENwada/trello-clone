import { Logo } from "@/components/logo";

const Navbar = () => {
  return (
    <div className="fixed top-0 flex h-14 w-full items-center border-b bg-white px-4 shadow-sm">
      <div className="mx-auto flex w-full items-center justify-between md:max-w-screen-2xl">
        <Logo />
      </div>
    </div>
  );
};

export default Navbar;
