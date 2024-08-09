"use client";

import { toast } from "sonner";
import { Button } from "./ui/button";

const Test = () => {
  const handleClick = (mode) => {
    mode ? toast.success("Test Success") : toast.error("Test error");
  };
  return (
    <>
      <Button
        className="my-5 mx-5"
        variant=""
        onClick={() => handleClick(true)}
      >
        Test Toast
      </Button>
    </>
  );
};

export default Test;
