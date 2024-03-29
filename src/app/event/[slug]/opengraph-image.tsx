import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Evento";
export const size = {
  width: 1200,
  height: 630,
};

type Props = {
  params: {
    slug: string;
  };
};

export const contentType = "image/png";

export default async function Image({ params }: Props) {
  return new ImageResponse(
    (
      <section>
        <h1>{params.slug}</h1>
        <p>Evento - Browse events around you</p>
      </section>
    )
  );
}
