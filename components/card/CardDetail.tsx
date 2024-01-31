import Image from "next/image";
import BadgeTypes from "../badge/BadgeTypes";

export function CardDetail({
  id,
  name,
  weight,
  abilities,
  types,
}: {
  id: string;
  name: string;
  weight: number;
  abilities: string[];
  types: string[];
}) {
  return (
    <div className="border rounded-lg shadow-lg max-w-2xl mx-auto flex flex-row">
      <div className="w-40 md:w-72">
        <Image
          alt={`${name}_image`}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          width={400}
          height={400}
        />
      </div>
      <div className="flex-1 flex flex-col gap-3  p-5">
        <div>
          <p className="text-xs ">Name</p>
          <p className="leading-none font-semibold  uppercase">{name}</p>
        </div>
        <div>
          <p className="text-xs ">Weight</p>
          <p className="leading-none font-semibold  uppercase">{weight} Kg</p>
        </div>
        <div>
          <p className="text-xs">Abilities</p>
          <p className="leading-none font-semibold  uppercase">{abilities.join(" - ")}</p>
        </div>
        <div>
          <p className="text-xs">Types</p>
          <div className="leading-none flex flex-row flex-wrap gap-2 mt-1">
            {types.map((type) => (
              <BadgeTypes key={type} name={type} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
