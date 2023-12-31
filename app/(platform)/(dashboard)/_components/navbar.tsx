import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 flex h-14 w-full items-center border-b bg-white px-4 shadow-sm">
      {/* TODO: Mobile Sidebar */}
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button
          size="sm"
          className="hidden h-auto rounded-sm px-2 py-1.5 md:block"
        >
          Create
        </Button>
        <Button size="sm" className="block rounded-sm md:hidden">
          <Plus></Plus>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
