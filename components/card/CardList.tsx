import Pagination from "../pagination/Pagination";
import Search from "../search/Search";
import Card from "./Card";

async function getData(page: string) {
  let offset = page === "1" ? 0 : parseInt(page) * 20;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`);
  const pokemon = await res.json();
  return pokemon;
}
export default async function CardList({
  page,
  search,
}: {
  page: string;
  search: string;
}) {
  const data = await getData(page);
  let dataFiltered = data.results.filter(
    (pokemon: any) => pokemon.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );
  return (
    <>
      <div className="flex justify-center mb-4">
        <Search />
      </div>
      {dataFiltered.length === 0 ? (
        <div className="min-h-60">
          <p className="text-center">No data available</p>
        </div>
      ) : (
        ""
      )}
      <div className="grid grid-cols-1 mb-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {dataFiltered.map((pokemon: { name: string; url: string }) => (
          <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>
      <Pagination page={parseInt(page)} pageMax={10} />
    </>
  );
}
