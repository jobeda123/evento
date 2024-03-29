import Link from "next/link";
import SearchForm from "@/components/searchForm";
import PageTitle from "@/components/typography/pageTitle";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <PageTitle title="Find events around you" />
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
        Browse more than{" "}
        <span className="italic text-accent font-bold underline">
          10,000 events
        </span>{" "}
        around you
      </p>

      <SearchForm />

      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href={"events/austin"}>Austin</Link>
          <Link href={"events/seattle"}>Seattle</Link>
        </div>
      </section>
    </main>
  );
}
