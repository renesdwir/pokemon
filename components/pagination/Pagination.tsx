import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function Pagination({ page, pageMax }: { page: number; pageMax: number }) {
  const router = useRouter();
  const handlePagination = (prop: string) => {
    if (prop === "next") {
      router.push(`/?page=${page + 1}`);
    }
    if (prop === "prev") {
      router.push(`/?page=${page - 1}`);
    }
  };
  return (
    <div className="flex flex-row py-10 justify-between">
      <Button disabled={page === 1} onClick={() => handlePagination("prev")}>
        Previous
      </Button>
      <p>
        page {page}/{pageMax}
      </p>
      <Button disabled={page === pageMax} onClick={() => handlePagination("next")}>
        Next
      </Button>
    </div>
  );
}
