import "server-only";

import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";
import prisma from "../db";
import { getCapitalizedString } from "./functions";

export const getEvents = unstable_cache(async (city: string, page = 1) => {
  // const response = await fetch(  
  //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  // );
  // const events: EventToEvent[] = await response.json();

  const conditions = city === "all" ? {} : { city: getCapitalizedString(city) };

  const events = await prisma.eventToEvent.findMany({
    where: conditions,
    orderBy: { date: "asc" },
    take: 6,
    skip: (page - 1) * 6,
  });

  const totalCount = await prisma.eventToEvent.count({
    where: conditions,
  });

  return { events, totalCount };
});

// with the help of unstable_cache, we can cache the data for a certain amount of time
export const getEvent = unstable_cache(async (slug: string) => {
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  // );

  // const event: EventToEvent = await response.json();

  const event = await prisma.eventToEvent.findUnique({
    where: { slug: slug },
  });

  if (!event) {
    return notFound();
  }

  return event;
});
