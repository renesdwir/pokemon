import { CardDetail } from "@/components/card/CardDetail";
import LayoutPage from "@/components/customLayout/LayoutPage";
import { Suspense } from "react";

async function getDataById(id: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const pokemon = await res.json();
  return pokemon;
}

export default async function DetailPage({ params }: { params: { id: string } }) {
  const data = await getDataById(params.id);
  return (
    <Suspense fallback="Loading...">
      <LayoutPage title={`Detail page of ${data.name}`}>
        <CardDetail
          id={data.id}
          name={data.name}
          weight={data.weight}
          abilities={data.abilities.map((abl: any) => abl.ability.name)}
          types={data.types.map((type: any) => type.type.name)}
        />
      </LayoutPage>
    </Suspense>
  );
}
