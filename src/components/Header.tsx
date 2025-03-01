import React from "react";
import { ModeToggle } from "./features/auth/components/ModeToogle";


const Header = () => {
  return (
    <div className="relative">
      <div className="absolute flex h-16 w-full backdrop-blur-sm items-center border-b p-5">
        <h1 className="font-bold text-primary text-xl w-[20%]">e-Perpus</h1>
        <div className=" w-full flex justify-end">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
