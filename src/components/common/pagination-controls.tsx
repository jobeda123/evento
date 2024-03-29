import Link from "next/link";
import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const btnStyles =
  "text-white px-5 py-3 bg-white/5 flex items-center gap-x-2 rounded-md opacity-75 hover:opacity-100 transition text-sm";

type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};

export default function PaginationControls({
  previousPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <section className="flex items-center justify-between w-full">
      {previousPath ? (
        <Link href={previousPath} className={btnStyles}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}
      {nextPath && (
        <Link href={nextPath} className={btnStyles}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}
