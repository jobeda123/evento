import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" passHref>
      <Image
        src={"https://bytegrad.com/course-assets/react-nextjs/evento.png"}
        width={50}
        height={20}
        alt="EVENTO logo"
      />
    </Link>
  );
}
