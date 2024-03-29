import { EventToEvent } from "@prisma/client";
import EventCard from "./card/event";
import PaginationControls from "./common/pagination-controls";
import PageTitle from "./typography/pageTitle";
import { getEvents } from "@/lib/utils/server-utils";

type EventsProps = { city: string; page?: number };

export default async function Events({ city, page = 1 }: EventsProps) {
  const { events, totalCount } = await getEvents(city, page);
  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";

  return (
    <section className="max-w-[1100px] flex gap-10 flex-wrap justify-center px-[20px]">
      {events.length > 0 ? (
        events?.map((event: EventToEvent) => (
          <EventCard event={event} key={event.id} />
        ))
      ) : (
        <PageTitle
          title={"No events found."}
          className="text-red-300 text-xl"
        />
      )}

      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
}
