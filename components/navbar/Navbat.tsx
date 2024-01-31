import Link from "next/link";

export default function Navbar() {
  return (
    <div className="px-10 h-14 border-b  flex justify-between items-center">
      <Link href={"/"} className="text-2xl font-bold">
        Pokemon
      </Link>
      <div className="space-x-4 md:space-x-8">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About</Link>
      </div>
    </div>
  );
}
