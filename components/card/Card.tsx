import Image from "next/image";
import Link from "next/link";

export default function Card({ name, url }: { name: string; url: string }) {
  let id = url.split("/")[6];
  return (
    <Link href={`/${id}`} className="bg-slate-200 rounded-lg">
      <div className="mx-auto flex justify-center w-full">
        <Image
          alt={`${name}_image`}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          width={400}
          height={400}
        />
      </div>
      <p className="h-10 font-semibold text-lg text-center uppercase">{name}</p>
    </Link>
  );
}
