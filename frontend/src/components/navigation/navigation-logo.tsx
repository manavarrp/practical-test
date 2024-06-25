import React from "react";
import LogoAvatar from "../logo-avatar";
import Image from "next/image";

const NavigationLogo = () => {
  return (
    <div className="flex items-center justify-center gap-2 p-2 mt-4">
      {" "}
        
        <Image 
        width={50}
        height={50}
        src="/logo.png"
        alt="logo"
        />
        

    </div>
  );
};

export default NavigationLogo;
