export default function LayoutPage({
  children,
  title,
}: {
  children: JSX.Element;
  title: string;
}) {
  return (
    <div className="max-w-6xl mx-auto px-10 ">
      <div className="my-10">
        <h1 className="text-center text-xl font-semibold">{title}</h1>
      </div>
      {children}
    </div>
  );
}
