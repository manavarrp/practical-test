import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  src?: string;
  className?: string;
}

const LogoAvatar = ({ src, className }: UserAvatarProps) => {
  return (
    <Avatar className={cn("h-20 w-20 md:w-100", className)}>
      <AvatarImage src={src} />
    </Avatar>
  );
};

export default LogoAvatar;
