export default function BadgeTypes({ name }: { name: string }) {
  return (
    <div className="px-2 py-1 text-xs rounded-full bg-green-300 text-green-700">
      {name}
    </div>
  );
}
