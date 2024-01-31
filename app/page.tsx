"use client";
import CardList from "@/components/card/CardList";
import LayoutPage from "@/components/customLayout/LayoutPage";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const search = searchParams.get("search");
  return (
    <LayoutPage title="List Of Pokemon">
      <Suspense fallback="Loading...">
        <CardList page={page || "1"} search={search || ""} />
      </Suspense>
    </LayoutPage>
  );
}
