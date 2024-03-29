"use client"; // Error components must be Client Components

import PageTitle from "@/components/typography/pageTitle";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="text-center py-24">
      <PageTitle title={error.message} />
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        onClick={
          // Attempt to recover by trying to re-render the segment
          reset
        }
      >
        Try again
      </button>
    </main>
  );
}
