import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="text-3xl font-bold">
      <Image
        src="/lws-kitchen.png"
        width={100}
        height={50}
        className="h-10"
        alt="Logo"
      />
    </Link>
  );
}
