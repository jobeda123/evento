import Events from "@/components/events";
import PageTitle from "@/components/typography/pageTitle";
import { getCapitalizedString } from "@/lib/utils/functions";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { z } from "zod";

type Props = {
  params: {
    city: string;
  };
};
type EventsPageProps = Props & {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;

  return {
    title:
      city === "all" ? "All Events" : `Events in ${getCapitalizedString(city)}`,
    description: `Browse more than 10,000 events in ${city}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({ params, searchParams }: EventsPageProps) {
  const city = params.city;
  // if the page is equal to 0, undefined or null, then set it to 1
  // const page = searchParams.page || 1;

  // if it is defined then it would be number otherwise it would be undefined
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);

  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <PageTitle
        title={
          params.city === "all"
            ? "All Events"
            : `Events in ${getCapitalizedString(city)}`
        }
        className="mb-28"
      />

      {/* suspense moddhe key na dile seta ekbar e generate korbe, 
      loading initially e dekhabe only , aita always jate dekhai tar jonoo
      key dia lagbe*/}
      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        {/* unary operator make string to number using + before value */}
        <Events city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
