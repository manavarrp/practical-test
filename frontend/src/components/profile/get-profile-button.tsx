"use client";

import { Button } from "../ui/button";
import { useModal } from "@/store/modal/modal-store";

const GetProfileButton = () => {
  const { onOpen } = useModal();

  return (
    <Button onClick={() => onOpen("getProfile")} type="button" size="lg" variant={"secondary"}>
      Profile
    </Button>
  );
};

export default GetProfileButton;
