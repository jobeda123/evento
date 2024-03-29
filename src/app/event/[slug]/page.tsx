import Section from "@/components/section";
import PageTitle from "@/components/typography/pageTitle";
import SectionContent from "@/components/typography/section-content";
import SectionHeading from "@/components/typography/section-heading";
import { getFullDate } from "@/lib/utils/functions";
import { getEvent } from "@/lib/utils/server-utils";
import { EventToEvent } from "@prisma/client";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const event: EventToEvent = await getEvent(slug);

  return {
    title: event.name,
  };
}

export async function generateStaticParams() {
  // top 100 most popular events
  // return an array of slugs
  return [
    {
      slug: "comedy-extravaganza",
    },
    {
      slug: "dj-practice-session",
    },
  ];
}

export default async function EventPage({ params }: Props) {
  const slug = params.slug;
  const event = await getEvent(slug);

  return (
    <main>
      <section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
        <Image
          src={event.imageUrl}
          alt="Event background image"
          fill
          quality={50}
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover blur-3xl z-0"
          priority
        />

        <div className="z-1 relative flex flex-col lg:flex-row gap-6 lg:gap-x-16">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />

          <div className="flex flex-col">
            <p className="text-white/75">{getFullDate(event.date)}</p>
            <PageTitle
              title={event.name}
              className="mb-2 mt-1 whitespace-nowrap lg:text-5xl"
            />
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by
              <span className="italic">{event.organizerName}</span>
            </p>

            <button className="state-effects focus:scale-105 bg-white/20 bg-blur text-lg capitalize lg:mt-auto w-[95vw] rounded-md border-white/10 border-2 sm:w-full py-2 mt-5">
              Get Tickets
            </button>
          </div>
        </div>
      </section>

      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section>
          <SectionHeading title="About this event" />
          <SectionContent content={event.description} />
        </Section>

        <Section>
          <SectionHeading title="Location" />
          <SectionContent content={event.location} />
        </Section>
      </div>
    </main>
  );
}
